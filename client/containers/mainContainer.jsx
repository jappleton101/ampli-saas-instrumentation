import * as React from "react";
import { useState } from "react";
import axios from "axios";
import MainComponent from "../components/mainComponent.jsx";

function MainContainer({ variant }) {
  return (
    <>
      <MainComponent variant={variant} />
    </>
  );
}

export default MainContainer;
