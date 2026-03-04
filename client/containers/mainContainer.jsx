import * as React from "react";
import { useState } from "react";
import axios from "axios";
import MainComponent from "../components/mainComponent.jsx";
import ExperimentalComponent from "../components/experimentalComponent.jsx";
import LoginPage from "../components/loginComponent.jsx";

function MainContainer({ variant }) {
  const [currentView, setCurrentView] = useState();

  if (currentView === "login") {
    return (
      <>
        <LoginPage />
      </>
    );
  }

  return (
    <>
      {variant === "control" ? (
        <MainComponent setCurrentView={setCurrentView} />
      ) : (
        <ExperimentalComponent setCurrentView={setCurrentView} />
      )}
    </>
  );
}

export default MainContainer;
