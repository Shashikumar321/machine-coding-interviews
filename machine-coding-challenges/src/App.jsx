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
      name: "Nested Checkbox",
      description: "Create a Nested checkobox functionality.",
      path: '/nested-checkbox',
    },
    {
      name: "Pagination",
      description: "Create a Pagination functionality.",
      path: '/pagination',
    },
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
