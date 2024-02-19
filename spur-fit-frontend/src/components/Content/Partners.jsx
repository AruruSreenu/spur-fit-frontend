import { motion } from "framer-motion";
import { PartnersList } from "../../assets/all";
import Reveal from "../../assets/Reveal";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

const Partners = () => {
  return (
    <div className="flex flex-col w-full  mt-20">
      <h1 className="text-skyblue text-3xl text-css-shadow" id="partners">
        Partners
      </h1>

      <div className="flex flex-row items-center justify-center gap-5 mt-5 flex-wrap">
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
            className={`flex flex-row items-center ${item.width} ${item.height} text-white boxy-1 relative overflow-hidden group`}
          >
            <img className="w-24 h-20" src={item.images} alt={item.index} />

            <div className="ml-2 relative z-10">
              <Reveal>
                <h2 className="text-lightPink text-lg">{item.title}</h2>
              </Reveal>
              <p className="text-lightWhite text-sm">{item.description}</p>
            </div>

            {/* Glass effect */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-lightPink backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-30 blur-lg"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
