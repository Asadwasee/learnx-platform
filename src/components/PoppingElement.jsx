import { motion } from 'framer-motion';

const PoppingElement = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      type: "spring", 
      stiffness: 260, 
      damping: 20, 
      delay 
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default PoppingElement;
