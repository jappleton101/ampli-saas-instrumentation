import * as React from "react";
import axios from "axios";
import { AmplitudeBrowser } from "@amplitude/analytics-browser";
import { plugin as engagementPlugin } from "@amplitude/engagement-browser";
import { Experiment } from "@amplitude/experiment-js-client";

window.amplitude = new AmplitudeBrowser();
amplitude.add(engagementPlugin());

amplitude.init("PROJECT_API_KEY", {
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
  "EXPERIMENT_DEPLOYMENT_KEY",
);

await experiment.fetch();

variant = experiment.variant("EXPERIMENT_FLAG");

variant.value;

function MainContainer() {
  return (
    <>
      <h1>PLACEHOLDER</h1>
    </>
  );
}

export default MainContainer;
