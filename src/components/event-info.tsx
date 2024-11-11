import { motion } from "framer-motion";

export const EventInfo = ({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle: string;
  body: string;
}) => {
  return (
    <motion.div 
      className="z-50"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
      }}
    >
      <p className="font-heading text-4xl lg:text-6xl">{title}</p>
      <p className="text-yellow-500 uppercase text-xl font-semibold">{subtitle}</p>
      <p className="text-lg mt-3 font-semibold">{body}</p>
    </motion.div>
  );
};
