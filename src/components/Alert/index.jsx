import './index.scss';
import { motion } from 'framer-motion';

const Alert = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="alert">{message}</p>
    </motion.div>
  );
};

export default Alert;
