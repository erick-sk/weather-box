import './index.scss';
import { motion } from 'framer-motion';

const Card = ({ weather = {} }) => {
  const { name, main: { temp, temp_max, temp_min } = {} } = weather;

  if (!name) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="card">
        <div className="card-title">
          <h2>The Weather in {name} is:</h2>
        </div>
        <div className="card-body">
          <p className="temperature">{temp} Cº</p>
          <p>Temperature min: {temp_min} Cº</p>
          <p>Temperature max: {temp_max} Cº</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
