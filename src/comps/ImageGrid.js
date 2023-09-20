import React from "react";
import useFireStore from "../hooks/useFireStore";
import { motion } from "framer-motion";
const ImageGrid = () => {
  const { docs } = useFireStore("images");

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc, index) => {
          return (
            <motion.div
              className="img-wrap"
              index={index}
              key={doc.id}
              whileHover={{ opacity: 1 }}
              layout
            >
              <motion.img
                src={doc.url}
                alt="file uplaoded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
