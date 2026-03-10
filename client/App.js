import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainContainer from './containers/mainContainer.jsx';
import { AmplitudeBrowser } from "@amplitude/analytics-browser";
import { Experiment } from "@amplitude/experiment-js-client";

window.amplitude = new AmplitudeBrowser();

amplitude.init("99698bc4876a943672eae07e721f4c2d", {
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
  "client-9yB3EbFKU6rppmCU3M3siNccw68eTsG8",
);

await experiment.fetch();

variant = experiment.variant('flag-name') // on or off; control or treatment for experiment

console.log("This user is assigned to", variant.value);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer variant={variant.value}/>
    </QueryClientProvider>
    
  );
}

export default App;
