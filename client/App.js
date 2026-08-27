import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContainer from "./containers/mainContainer.jsx";
import ToDoCard from "./components/ToDoList.jsx";
import { isEmbedMode } from "./embedMode.js";

const queryClient = new QueryClient();

function App() {
  const embed = isEmbedMode(window.location.search);

  return (
    <QueryClientProvider client={queryClient}>
      {embed ? <ToDoCard /> : <MainContainer />}
    </QueryClientProvider>
  );
}

export default App;
