import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: 0,
    email: "",
    interests: ["Angular", "React"],
    theme: "Dark",
  });

  const tabsConfig = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabsConfig[activeTab].component;

  const onHandleSubmit = () => {
    console.log(data);
  };

  const onHandlePrevious = () => {
    setActiveTab(activeTab - 1);
  };

  const onHandleNext = () => {
    setActiveTab(activeTab + 1);
  };

  return (
    <>
      <h3 className="tab-form">Tab-Form</h3>
      <div className="tabs-main-container">
        <div className="tabs-heading-container">
          {tabsConfig.map((tab, index) => (
            <div
              className="tabs"
              key={tab.name}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className="tabs-body-container">
          <ActiveTabComponent data={data} setData={setData} />
        </div>

        <div className="tab-footer-buttons">
          <div className="tab-form-button">
            {activeTab > 0 && (
              <button onClick={onHandlePrevious}>Previous</button>
            )}
          </div>

          <div className="tab-form-button">
            {activeTab < tabsConfig.length - 1 && (
              <button onClick={onHandleNext}>Next</button>
            )}
          </div>

          <div className="tab-form-button">
            {activeTab === tabsConfig.length - 1 && (
              <button onClick={onHandleSubmit}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabForm;
