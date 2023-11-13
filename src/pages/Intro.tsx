import React from 'react'
import IntroImage from '../assets/images/skippy.jpg'
import Background from '../assets/images/starbg.jpg'



import { useState, useEffect } from 'react'



import PageTransition from '../components/PageTransition';


// animations import
import AOS from 'aos'
import 'aos/dist/aos.css'
import AskChatGPT from '../components/AskChatGPT'



function Intro() {

      // animation stuff:
      useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    const [isVisible, setIsVisible] = useState(false)


    const clicked = () => {
      setIsVisible(false)
  }

  // login const


  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    animate: {
      opacity: 1,
      y: "0vh",
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        ease: "easeInOut",
      },
    },
  };



  return (

    <div 
      style={{ backgroundImage: `url(${Background})`, height: 'calc(100vh) !important' }}
      className="justify-center bg-cover bg-fixed h-screen"
    >
    <PageTransition pageVariants={pageVariants}>
    <div 
      className="flex justify-center h-full"
      >
  
      <div 
        className="grid place-items-center p-4 m-10 bg-white  bg-opacity-80 
        rounded-md drop-shadow-xl"
        >
              

          <div 
          className="flex place-items-center"
          >


          <div className='pb-20'>
            <p 
            style={{ fontFamily: 'Yellowtail' }}
            className='p-5 text-6xl lg:text-8xl lg:p-10 tracking-wide
            text-fuchsia-900 text-center drop-shadow-2xl'
            data-aos="zoom-out-up"
            >
              Romance on the Dutchman
            </p>
            <p 
            style={{ fontFamily: 'Delicious Handrawn' }}
            className='p-5 pb-20 text-xl lg:text-2xl lg:p-10 tracking-wide
            text-fuchsia-600 text-center drop-shadow-2xl'
            data-aos="zoom-out-down"
            >
              Long ago, in a dumpster fire of a galaxy not even a little far away, lived a woman that definitely could have spent 20ish minutes doing literally anything else, but is fatally attracted to silly side quests so
            </p>
          </div>

            <img 
            src={IntroImage} alt="" 
            className="h-3/6 w-2/5 mr-4 ml-4 mt-4 drop-shadow-2xl
            "
            data-aos="zoom-out-right" 
            />
        </div>

        <div 
        className='grid grid-cols-2 place-items-center'
        
        >
        <AskChatGPT></AskChatGPT>
        </div>       
      </div>    
    </div>
    </PageTransition>   
  </div>
  
  )
}

export default Intro
