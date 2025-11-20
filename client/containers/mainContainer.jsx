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

// your Amplitude API Key
amplitude.init("API_KEY", {
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

// This must be a deployment key that is in your amplitude instance and associated with the project of the API key used above
const experiment =
  Experiment.initializeWithAmplitudeAnalytics("DEPLOYMENT_KEY");

await experiment.fetch();

// This must be a flag key associated with an experiment in your Amplitude Instance
// the actual feature display logic is in the ToDoList Component
variant = experiment.variant("FLAG_KEY");

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
