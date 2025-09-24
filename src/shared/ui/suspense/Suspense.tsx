import { memo } from "react";
import { motion } from "framer-motion";

import Icon1 from "@/shared/assets/loading-1.svg";
import Icon2 from "@/shared/assets/loading-2.svg";
import Icon3 from "@/shared/assets/loading-3.svg";

const icons = [Icon1, Icon2, Icon3];

export const MovieLoading = memo(() => {
  return (
    <div className="flex h-screen w-full items-center justify-center  ">
      <div className="flex gap-4">
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.1,
            }}
            className="w-10 h-16"
          >
            <img
              src={icon}
              alt={`icon-${i}`}
              className="w-full h-full drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
});
