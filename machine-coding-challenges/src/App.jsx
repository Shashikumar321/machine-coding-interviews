import "./App.css";
import { Link } from "react-router";

import CardsList from "./components/CardsList";

const App = () => {
  const config = [
    {
      name: "Tab-Form",
      description:
        "Create a multiple accordian layout with Profile, Interests, Settings tabs and a submit button at the last. Maintain data persistence and scalability.",
      path: '/tab-form',
    },
    {
      name: "Pagination",
      description: "Create a Pagination functionality with modifiable results per page option. Add buttons to navigate to 1st page and last page",
      path: '/pagination',
    },
    {
      name: "Auto Complete",
      description: "Create a Search input bar with auto complete functionality.",
      path: '/auto-complete',
    },
    {
      name: "File Explorer",
      description: "Create a File-Folder explorer functionality similar to VS code File explorer. File explorer should have create folder, delete folder features.",
      path: '/file-explorer',
    },
    {
      name: "Progress Bar",
      description: "Create a Progress bar functionality with transition.",
      path: '/progress-bar',
    },
    {
      name: "OTP Input",
      description: "Create a OTP input functionality with reset button.",
      path: '/otp-input',
    },
    {
      name: "Nested Checkbox",
      description: "Create a Nested checkobox functionality.",
      path: '/nested-checkbox',
    }
  ];

  return (
    <>
      <div className="cardslist-container">
        {config.map((conf) => (
          <div key={conf.name}>
            <Link className="links" to={conf.path}><CardsList data={conf} /></Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
