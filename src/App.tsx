import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Router from "./routes/Router";


const queryClient = new QueryClient()


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router /> 
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
