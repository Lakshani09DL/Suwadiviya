import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef, useEffect } from "react";
import test_image from '../../assets/tests.jpg';
import axios from 'axios';

function HomagamaTestlist(){

    const [setselectedTest, setsetselectedTest] = useState(null);

    // Sample data for tests, need to replace with backend data
    const dummytests = [];
    
    const [tests, settests] = useState(dummytests);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/homagama/tests/homagama-test-list')
        .then(response => {
            settests(response.data)
        })
        .catch(error => {
            console.error('Error fetching test data:', error);
        })
    }, []);

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

    // Component to display each test
      const Test = ({ test, setsetselectedTest, setselectedTest, itemVariants }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
    
        return (
            <motion.div
                ref={ref}
                className="bg-slate-50 shadow-lg rounded-xl px-10 py-6 w-full max-w-full mx-auto"
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{
                    zIndex:1
                }}
            >
                <h3 className="text-xl text-blue-700 font-semibold">{test.name}</h3>
                <button 
                    className="text-white bg-blue-700 sm p-2 m-6" 
                    onClick={() => setsetselectedTest(test)}
                >
                    View More
                </button>
            </motion.div>
        );
    };
    
      
    return(
        <>
            <Navbar 
            style={{
                zIndex: 1,
            }}/>

            <motion.h2
            className="bg-blue-50 text-5xl text-center text-blue-500 font-bold py-20"
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            style={{
                zIndex: 1,
            }}
            >
                Welcome to Test Services at Homagama Base Hospital!
            </motion.h2>

            <motion.div 
            className="bg-blue-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-20 px-40 py-20"
            initial='hidden'
            animate='visible'
            style={{
                backgroundImage: `url(${test_image})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
            >
            
            <div
            className="fixed mt-96 top-0 bottom-0 bg-gray-500 opacity-60 z-0"
            style={{
                left: '0.5rem',   
                right: '0.5rem',
            }}
            ></div>

            

            {tests.map((test) => (
                
                <Test 
                    key={test.id}
                    test={test}
                    setsetselectedTest={setsetselectedTest}
                    setselectedTest={setselectedTest}
                    itemVariants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                />
            ))}
            
            {setselectedTest && (
                <div className="fixed inset-0 bg-slate-100 bg-opacity-80 flex justify-center items-center z-50 w-screen h-full" style={{zIndex: 1}}>
                <div className="bg-white rounded-xl p-6 w-auto shadow-lg relative max-h-[80vh] overflow-y-auto">
                    <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 mt-20 mb-10">{setselectedTest.name}</h3>
                    <div className="bg-slate-300 rounded-xl p-6 w-full max-w-full mx-auto">
                        <p className="text-xl text-black font-semibold p-2 m-3">
                            <strong>Location:</strong> {setselectedTest.location}
                        </p>
                        <p className="text-xl text-black font-semibold p-2 m-3">
                            <strong>Machine: </strong>{setselectedTest.machine_name}
                        </p>
                        {/* <p className="text-xl text-black font-semibold p-2 m-3">
                            <strong>Price: </strong>{setselectedTest.price}
                        </p> */}
                        <p className="text-xl text-black font-semibold p-2 m-3">
                            <strong>Special Information: </strong>
                        </p>
                        <ul className="text-lg text-gray-800 font-semibold p-2 m-2">
                            {Object.entries(setselectedTest.special_information).map(([key, value], index) => (
                                <li key={index}><strong>{key}</strong>: {value}</li>
                            ))}
                        </ul>
                    </div>
                    <button 
                        onClick={() => setsetselectedTest(null)} 
                        className="absolute top-2 right-3 bg-red-500 text-white hover:text-red-600 text-xl"
                    >
                        &times;
                    </button>
                </div>   
            </div>
                )}
            </motion.div>
        </>
        
    );
}

export default HomagamaTestlist;
