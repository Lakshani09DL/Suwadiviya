import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import Cliniccard from "../components/cliniccard";
import Testcard from "../components/testcard";
import Scancard from "../components/scancard";
import { useEffect, useState } from "react";
import homagama_hospital from "../../assets/homagama_hospital.jpeg";

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


function HomagamaHome() {

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
            Homagama Base Hospital
          </motion.h1>
          
          <motion.span 
            className="text-xl text-gray-600"
            variants={itemVariants}
          >
            Homagama
          </motion.span>
          
          <motion.p 
            className="text-lg text-left text-gray-700 pr-4"
            variants={itemVariants}
          >
            Base Hospital Homagama is a government-run medical facility located approximately 18 kilometers southeast of Colombo, Sri Lanka's capital, in the Western Province. Established in 1946 through a donation from philanthropist Mr. Semaneris Appuhamy, it was upgraded to a Base Hospital in 1997 to better serve the growing population.<br/>
            <br/>
            
            The hospital serves a community of around 400,000 people and offers a wide range of medical services. These include major specialties like Medicine, Surgery, Obstetrics and Gynecology, Pediatrics, and Psychiatry, as well as minor specialties such as Ophthalmology, Dermatology, ENT (Ear, Nose, and Throat), Radiology, and Pathology.<br/>
            <br/>

            In addition to its clinical services, Base Hospital Homagama functions as a teaching hospital for the Faculty of Medical Sciences at the University of Sri Jayewardenepura. This partnership provides medical students with hands-on clinical training, enhancing their educational experience.<br/>
            <br/>

            During the COVID-19 pandemic, the hospital was designated as a special treatment center. It implemented advanced health information systems to manage patient data effectively and conducted remote consultations to ensure continuous care while minimizing the risk of virus transmission.<br/>
            <br/>

            Looking ahead, there are plans to further develop Base Hospital Homagama. The government has approved its upgrade to a teaching hospital, aiming to enhance its capacity for medical education and patient care.<br/>
            <br/>

            Location : RXWR+WR6, Hospital Rd, Homagama, Sri Lanka<br/>
            
            contact : +94 112 855 200<br/>
          </motion.p>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div 
          className="flex-1 md:w-1/2"
          variants={imageVariants}
        >
          <motion.img
            className="w-full h-auto rounded-lg shadow-md"
            src={homagama_hospital}
            alt="Homagama Base hospital"
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
                variants={cardVariants}
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

export default HomagamaHome;