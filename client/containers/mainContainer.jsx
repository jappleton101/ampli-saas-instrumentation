import * as React from "react";
import ResponsiveAppBar from "../components/NavBar.jsx";
import ToDoCard from "../components/ToDoList.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { AmplitudeBrowser } from "@amplitude/analytics-browser";
import { plugin as engagementPlugin } from "@amplitude/engagement-browser";
import { Experiment } from "@amplitude/experiment-js-client";

window.amplitude = new AmplitudeBrowser();
amplitude.add(engagementPlugin());

amplitude.init("511911c0366c51e10cc03a5264a3808b", {
  defaultTracking: false,
  autocapture: {
    pageViews: true,
    attribution: false,
    formInteractions: false,
    sessions: false,
    fileDownloads: false,
    elementInteractions: true,
    networkTracking: {
      captureRules: [{ statusCodeRange: "200-599" }],
    },
  },
});

let variant;

const experiment = Experiment.initializeWithAmplitudeAnalytics(
  "client-TG1laGEVQ6ESxIBi0NHo9emqhMmufueg"
);

await experiment.fetch();

variant = experiment.variant("experimental-button");

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
        <ToDoCard variantValue={variant ? variant.value : null} />
      </div>
    </>
  );
}

export default MainContainer;
