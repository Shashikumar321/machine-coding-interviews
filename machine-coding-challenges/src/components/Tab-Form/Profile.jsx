const Profile = ({data, setData}) => {

  const { name, age, email } = data;

  const handleSetData = (e, item) => {
    setData(prevData => ({
      ...prevData,
      [item]: e.target.value
    }))
  }

  return (
    <>
      <div className="tab-profile">
        <div className="tab-input-label">
          <label>
            Name : 
            <input type="text" name="name" value={name} onChange={(e) =>handleSetData(e, 'name')}/>
          </label>
        </div>

        <div className="tab-input-label">
          <label>
            Age : 
            <input type="number" name="age" value={age} onChange={(e) =>handleSetData(e, 'age')}/>
          </label>
        </div>

        <div className="tab-input-label">
          <label>
            Email : 
            <input type="email" name="email" value={email} onChange={(e) => handleSetData(e, 'email')}/>
          </label>
        </div>
      </div>
    </>
  );
};

export default Profile;
