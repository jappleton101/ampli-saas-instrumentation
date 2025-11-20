import * as React from "react";
import ResponsiveAppBar from "../components/NavBar.jsx";
import ToDoCard from "../components/ToDoList.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Experiment } from "@amplitude/experiment-js-client";

let variant;

await analytics.ready(() => {
  window.engagement.boot({
    user: {
      // User Provider: Guides and Surveys requires either user_id or device_id for user identification
      user_id: analytics.user().id(),
      device_id: analytics.user().anonymousId(),
      user_properties: {},
    },
    integrations: [
      {
        // Tracking Provider: Pass Guides and Surveys events to the 3rd party analytics provier
        track: (event) => {
          analytics.track(event.event_type, event.event_properties);
        },
      },
    ],
  });

  const experiment = Experiment.initialize(
    "client-TG1laGEVQ6ESxIBi0NHo9emqhMmufueg",
    {
      exposureTrackingProvider: {
        track: (exposure) => {
          analytics.track("$exposure", exposure);
        },
      },
    }
  );

  const user = {
    user_id: analytics.user().id(),
    device_id: analytics.user().anonymousId(),
  };

  experiment.fetch(user);

  variant = experiment.variant("experimental-button");

  // Forward events from segment to do event-based triggers for Guides and Surveys.
  analytics.on("track", (event, properties, options) => {
    window.engagement.forwardEvent({
      event_type: event,
      event_properties: properties,
    });
  });
  analytics.on("page", (event, properties, options) => {
    window.engagement.forwardEvent({
      event_type: event,
      event_properties: properties,
    });
  });
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
        <ToDoCard variantValue={variant ? variant.value : null} />
      </div>
    </>
  );
}

export default MainContainer;
