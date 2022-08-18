import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
      ;
    </div>
  );
};

render(<App />, document.getElementById("root"));
