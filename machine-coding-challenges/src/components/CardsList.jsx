const CardsList = ({data}) => {

    const { name, description } = data;

  return (
    <>
      <div className="card-container">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default CardsList;
