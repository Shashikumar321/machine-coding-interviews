import { BrowserRouter, Routes, Route, Link } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TabForm from "./components/Tab-Form/TabForm.jsx";
import NestedCheckbox from "./components/NestedCheckbox/NestedCheckbox.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";
import AutoComplete from "./components/Auto-Complete/AutoComplete.jsx";
import FileExplorer from "./components/File-Explorer/FileExplorer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Link className="links" to="/"><h1>🏠 Machine Coding Challenges</h1></Link>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tab-form" element={<TabForm />} />
      <Route path="/pagination" element={<Pagination />} />
      <Route path="/auto-complete" element={<AutoComplete />} />
      <Route path="/file-explorer" element={<FileExplorer />} />
      <Route path="/nested-checkbox" element={<NestedCheckbox />} />

    </Routes>
  </BrowserRouter>
);
