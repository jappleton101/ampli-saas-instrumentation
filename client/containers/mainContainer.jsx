import * as React from "react";
import ResponsiveAppBar from "../components/NavBar.jsx";
import ToDoCard from "../components/ToDoList.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { AmplitudeBrowser } from "@amplitude/analytics-browser";

window.amplitude = new AmplitudeBrowser();
amplitude.init("511911c0366c51e10cc03a5264a3808b", {
  defaultTracking: false,
  autocapture: {
    pageViews: true,
    attribution: true,
    formInteractions: true,
    sessions: true,
    fileDownloads: true,
    elementInteractions: {
      cssSelectorAllowlist: [
        "a",
        "button",
        "input",
        "select",
        "textarea",
        "label",
        "video",
        "audio",
        '[contenteditable="true" i]',
        "[data-amp-default-track]",
        ".amp-default-track",
      ],
      // by default, the above selectors are in the allow list
      // When you use 'cssSelectorAllowlist', to target specific elements, set 'actionClickAllowlist'
      // to ensure Amplitude tracks interactions with non-standard clickable elements during page transitions or DOM updates
      actionClickAllowlist: ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"], // default settings
      // Accepts CSS selectors that define which elements on the page should be tracked when the page changes
      // for example, when a new visual element appears, or the click takes the user to a new page
    },
    networkTracking: {
      captureRules: [{ statusCodeRange: "200-599" }],
      // tracks Fetch/XHR requests capture rules can be specified to broaden or narrow default rules
    },
  },
});

function MainContainer() {
  const [view, setView] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleSessionAction(action) {
    if (action === "logout") {
      const response = await axios.post("/users/logout");
      setIsLoggedIn(false);
      setView("");
    }

    if (action === "login") {
      setIsLoggedIn(true);
    }
  }

  const setViewHandler = (e) => {
    setView(e.target.id);
  };

  async function getSession() {
    try {
      const response = await axios.get("/users/session");
      return response;
    } catch (error) {
      console.error(error);
      alert("Error validating user session. Please log in again.");
    }
  }

  async function getUserTasks() {}

  useEffect(() => {
    getSession().then((data) => {
      if (data && data.data.sessionData) {
        setIsLoggedIn(true);
      }
    });
  }, [isLoggedIn]);

  return (
    <>
      <ResponsiveAppBar
        setViewHandler={setViewHandler}
        isLoggedIn={isLoggedIn}
        id="responsive-navbar"
        currentView={view}
        handleSessionAction={handleSessionAction}
      />
      <div id="main-container">
        <br />
        <ToDoCard />
      </div>
    </>
  );
}

export default MainContainer;
