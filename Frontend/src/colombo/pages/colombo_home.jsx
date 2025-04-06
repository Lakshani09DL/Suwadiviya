import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import Cliniccard from "../components/cliniccard";
import Testcard from "../components/testcard";
import Scancard from "../components/scancard";
import { useEffect, useState } from "react";
import colomboNationalImage from '../../assets/colombo_national.jpg';
// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  }
};


const popupVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};
// Animation variants
const containerVariants = {
  hidden: {
    opacity: 0,
    x: -50 // start off-screen to the left
  },
  visible: {
    opacity: 1,
    x: 0, // slide into place
    transition: {
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.5,
      when: "beforeChildren"
    }
  }
};

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  
  
  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "anticipate"
      }
    }
  };


  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };


  const cards = [
    { id: 1, component: <Cliniccard /> },
    { id: 2, component: <Testcard /> },
    { id: 3, component: <Scancard /> },
  ];


function ColomboHome() {

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
  ]

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
            Colombo National Hospital
          </motion.h1>
          
          <motion.span 
            className="text-xl text-gray-600"
            variants={itemVariants}
          >
            Colombo 00700
          </motion.span>
          
          <motion.p 
            className="text-lg text-gray-700 pr-4"
            variants={itemVariants}
          >
            The National Hospital of Sri Lanka (NHSL) stands as a cornerstone of the nation's healthcare system. Established in 1864, this government-funded institution in Colombo leads the country in providing comprehensive medical services under the direct purview of the central government. As the largest hospital in Sri Lanka, it boasts a capacity of over 3000 beds, solidifying its role as a vital resource for the population.<br/>
            <br/>
            
            Beyond its substantial size, the NHSL serves as a pivotal educational hub, functioning as the primary teaching hospital for the Faculty of Medicine at the University of Colombo and the Postgraduate Institute of Medicine. It is also recognized as a major trauma center, equipped to handle critical cases and playing a crucial role in fostering a healthier Sri Lankan population.
            <br/>
            <br/>

            Address : WV99+FHX, Colombo 00700<br/>
            
            Contact : 0112 691 111
          </motion.p>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div 
          className="flex-1 md:w-1/2"
          variants={imageVariants}
        >
          <motion.img
  className="w-full h-auto rounded-lg shadow-md"
  src={colomboNationalImage} // Use the imported image here
  alt="Colombo National Hospital"
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
/>
        </motion.div>
      </motion.div>


      <motion.h2
        className="bg-slate-900 p-10 text-4xl font-bold text-white text-center"
        variants={itemVariants}>
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

export default ColomboHome;