import DataViewer from "./components/DataViewer";
import styled from "@emotion/styled";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  }
});

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContainer>
          <Routes>
            <Route path="/" element={<DataViewer />} />
          </Routes>
        </AppContainer>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
