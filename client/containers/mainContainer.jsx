import * as React from "react";
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
    attribution: true,
    formInteractions: true,
    sessions: true,
    fileDownloads: true,
    elementInteractions: true,
    networkTracking: {
      captureRules: [{ statusCodeRange: "200-599" }],
    },
  },
});

let variant;

const experiment = Experiment.initializeWithAmplitudeAnalytics(
  "client-TG1laGEVQ6ESxIBi0NHo9emqhMmufueg",
);

await experiment.fetch();

variant = experiment.variant("experimental-button");

variant.value;

function MainContainer() {
  return (
    <>
      <h1>PLACEHOLDER</h1>
    </>
  );
}

export default MainContainer;
