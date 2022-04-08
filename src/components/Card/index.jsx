import './index.scss';

const Card = ({ weather = {} }) => {
  const { name, main: { temp, temp_max, temp_min } = {} } = weather;

  if (!name) return null;

  return (
    <div className="card">
      <div className="card-title">
        <h2>The Weather in {name} is:</h2>
      </div>
      <div className="card-body">
        <p className="temperature">{temp} Cº</p>
        <p>
          Temperature min: <span>{temp_min} Cº</span>
        </p>
        <p>
          Temperature max: <span>{temp_max} Cº</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
