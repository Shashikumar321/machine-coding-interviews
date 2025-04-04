const Settings = ({data, setData}) => {

  const { theme } = data;

  const handleDataChange = (themeData) => {
    setData((prevData) => ({
      ...prevData,
      theme: themeData === 'Light' ? 'Light' : 'Dark'
    }))
  }

  return (
    <>
      <div className="tab-settings">
        <div>
          <label>
            <input type="radio" checked={theme === 'Light'} onChange={() => handleDataChange('Light')}/>
            Light
          </label>
        </div>
        <div>
          <label>
            <input type="radio" checked={theme === 'Dark'} onChange={() => handleDataChange('Dark')}/>
            Dark
          </label>
        </div>
      </div>
    </>
  );
};

export default Settings;
