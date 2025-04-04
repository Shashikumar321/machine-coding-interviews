const Interests = ({ data, setData }) => {
  const { interests } = data;

  const interestsToDisplay = ["JavaScript", "Angular", "React", "TypeScript", "Python", "Java"];

  const handleSetData = (e) => {
    const { checked, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      interests: checked
        ? [...prevData.interests, value]
        : prevData.interests.filter((int) => int !== value),
    }));
  };

  return (
    <>
      <div className="tab-interests">
        {interestsToDisplay.map((interest, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name={interest}
              value={interest}
              checked={interests.includes(interest)}
              onChange={handleSetData}
            />
            {interest}
          </label>
        ))}
      </div>
      <div className="interests-display">
        Selected Interests are : {interests.join(", ")}
      </div>
    </>
  );
};

export default Interests;
