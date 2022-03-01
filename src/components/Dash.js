import React from "react";
import { motion } from "framer-motion";

const Dash = () => {
  return (
    <motion.div
      whileHover={{
        rotate: 180,
      }}
      style={{
        height: 25,
        width: 10,
        background: "#3356C4",
        margin: "1rem 0.5rem 1rem 0rem",
      }}
    />
  );
};

export default Dash;
