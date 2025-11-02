import Countries from "./Countries";
import { Routes as Switch, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ProductFilter from "./pages/ProductFilterUseMemo";
import ProductListCallback from "./pages/ProductListUseCallback";

function App() {

  return (
    <Router>
      <div style={{ minHeight: "90vh", margin: "0px", padding: "0px" }}>
            <Switch>
              <Route path="/" element={<Countries />} />
              <Route path="/product" element={<ProductFilter />} />
              <Route path="/product-callback" element={<ProductListCallback />} />
            </Switch>
      </div>
    </Router>
  )
}

export default App
