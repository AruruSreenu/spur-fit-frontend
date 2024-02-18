import { motion } from "framer-motion";
import { PartnersList } from "../../assets/all";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 * index,
    },
  }),
};

const Partners = () => {
  return (
    <div className="flex flex-col w-full border border-lightPink mt-20 ">
      <h1 className="text-skyblue text-3xl">Partners</h1>

      <div className="flex flex-row items-center justify-center border border-white gap-5 mt-5 flex-wrap">
        {PartnersList.map((item, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            key={index}
            custom={index}
            className={`flex flex-row items-center  ${item.width} ${item.height}  text-white boxy-1`}
          >
            <img className="w-24 h-20" src={item.images} alt={item.index} />
            <div className="ml-2">
              <h2 className="text-lightPink text-lg">{item.title}</h2>
              <p className="text-lightWhite text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
