import React from "react";
import Lottie from "lottie-react";
import Guitar from "../Assets/Guitar.json";
import { motion } from "framer-motion";
import "./Login.css";
import cd from "../Assets/cd.json";

export default function Login() {
  return (
    <div className="go-to">
      <div className="lottie-guitar">
        <Lottie loop={true} animationData={Guitar} />
      </div>
      <div className="button">
        <motion.h2
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9, color: "#AEE2FF" }}
        >
          Connect to Musicmo
        </motion.h2>
        <Lottie className="cd" loop={true} animationData={cd} />
      </div>
    </div>
  );
}
