import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainContainer from './containers/mainContainer.jsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer/>
    </QueryClientProvider>
    
  );
}

export default App;
