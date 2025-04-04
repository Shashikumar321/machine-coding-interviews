import { BrowserRouter, Routes, Route, Link } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TabForm from "./components/Tab-Form/TabForm.jsx";
import NestedCheckbox from "./components/NestedCheckbox/NestedCheckbox.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Link className="links" to="/"><h1>🏠 Machine Coding Chalenges</h1></Link>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tab-form" element={<TabForm />} />
      <Route path="/nested-checkbox" element={<NestedCheckbox />} />
      <Route path="/pagination" element={<Pagination />} />
    </Routes>
  </BrowserRouter>
);
