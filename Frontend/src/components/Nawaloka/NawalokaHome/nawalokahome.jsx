import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar/navbar";
import Cliniccard from "../Clinic/clinicCard";
import Testcard from "../Test/testcard";
import Scancard from "../Scan/scancard";
import { useEffect, useState } from "react";
import nawalokaimg from "../../../assets/nawaloka.jpg";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 },
  },
};

const popupVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};
// Animation variants
const containerVariants = {
  hidden: {
    opacity: 0,
    x: -50, // start off-screen to the left
  },
  visible: {
    opacity: 1,
    x: 0, // slide into place
    transition: {
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "anticipate",
    },
  },
};

const slideVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const cards = [
  { id: 1, component: <Cliniccard /> },
  { id: 2, component: <Testcard /> },
  { id: 3, component: <Scancard /> },
];

function NawalokaHome() {
  // state to manage the current card to be displayed
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // visible cards
  const visibleCards = [
    cards[currentCard % cards.length],
    cards[(currentCard + 1) % cards.length],
  ];

  return (
    <>
      <Navbar />

      {/* ... (your existing header content) ... */}
      {/* Main Content Section */}
      <motion.div
        className="bg-white flex flex-col md:flex-row items-center md:items-center p-12 space-y-6 md:space-y-0 mb-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Section (Text) */}
        <motion.div
          className="flex-1 md:w-1/2 space-y-4"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-bold text-gray-800"
            variants={itemVariants}
          >
            Nawaloka Hospital PLC-Colombo
          </motion.h1>

          <motion.span
            className="text-xl text-gray-600"
            variants={itemVariants}
          >
            Colombo 02
          </motion.span>

          <motion.p
            className="text-lg text-gray-700 pr-4"
            variants={itemVariants}
          >
            Nawaloka Hospital Colombo is a leading private healthcare
            institution located in the heart of Colombo, Sri Lanka. Known for
            its modern facilities and high standards of patient care, it has
            earned a reputation as one of the top hospitals in the country.
            <br />
            <br />
            The hospital operates 24/7, offering a comprehensive range of
            medical services, from general treatments to advanced surgeries and
            specialized care. With a team of experienced medical professionals
            and state-of-the-art technology, Nawaloka Hospital is committed to
            delivering quality healthcare in a safe and compassionate
            environment.
            <br />
            <br />
            Over the years, it has become a trusted choice for both local and
            international patients, contributing significantly to the
            advancement of private healthcare in Sri Lanka.
            <br />
            <br />
            Location : Nawaloka Hospitals PLC,Colombo 2,Sri Lanka.
            <br />
            contact : +94115 577 111
          </motion.p>
        </motion.div>
        /* Right Section (Image) */
        <motion.div className="flex-1 md:w-1/2" variants={imageVariants}>
          <motion.img
            className="w-full h-auto rounded-lg shadow-md"
            src={nawalokaimg}
            alt="Nawaloka Logo"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      <motion.h2
        className="bg-slate-900 p-10 text-4xl font-bold text-white text-center"
        variants={itemVariants}
      >
        Our Services
      </motion.h2>

      {/* Cards Section with Hover Effects */}
      <div className="bg-slate-900 flex flex-row justify-center p-5 space-x-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[currentCard].id}
            className="flex w-full justify-center space-x-4 p-5 shadow-xl rounded-lg text-xl"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            {/* Clinic Card with Popup */}
            {visibleCards.map((card, index) => (
              <motion.div
                key={card.id}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-row justify-center p-6 space-x-8 w-100 h-80"
              >
                {card.component}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default NawalokaHome;
