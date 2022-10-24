import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/simpleFirstPage";
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
