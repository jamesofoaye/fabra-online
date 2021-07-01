import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';


const ImageGrid = ({ setSelectedImg, adBucket }) => {
  const { docs } = useFirestore(adBucket);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.url}
            layout
            whileHover={{ opacity: 1 }}
            s
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
export default ImageGrid;
