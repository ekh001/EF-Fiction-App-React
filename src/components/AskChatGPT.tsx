import React from 'react'
import { useState } from 'react'
import ReactModal from 'react-modal'
import questionLogo from '../assets/images/question.svg'
import emoji from '../assets/images/wink.png'

const AskChatGPT = () => {

  // modal constants
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // openai const

  const [tweet, setTweet] = useState("");
  const [question, setQuestion] = useState('');
  const [sentiment, setSentiment] = useState("");
  const API_KEY = '#';

  // openai function
  async function callOpenAIAPI(){
    console.log("Calling OpenAI API...");

    const APIBody = {
      "model": "text-davinci-003",
      "prompt": "Generate a unique, romantic, PG-13 fanfiction that is less than 150 words, for the characters Joe Bishop and Skippy from the book series Expeditionary Force by Craig Alanson. Remember that Skippy identifies as male: ",
      "temperature": 0.8,
      "max_tokens": 150,
      "top_p": 1.0,
      "frequency_penalty": 0.5,
      "presence_penalty": 0.0
    }

    await fetch('https://api.openai.com/v1/completions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify(APIBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setSentiment(data.choices[0].text.trim());
    })
  }
  console.log(tweet);
  return (
    <>
<div className='fixed w-3/6 bg-white bg-opacity-0'>
  <div className='grid grid-cols-4 justify-center place-items-center px-10 drop-shadow-2xl'>
    <button
      className=' bg-fuchsia-500 p-3 m-3 h-24 w-24 rounded-full text-fuchsia-800
      drop-shadow-2xl
      hover:bg-fuchsia-700 hover:text-white
      transition ease-linear duration-200'
      onClick={() => setIsModalOpen(true)}
    >
      <img src={questionLogo} alt="Home"
      className=''
      />
    </button>
  </div>
</div>
      <ReactModal 
      isOpen={isModalOpen} onRequestClose={closeModal}
      >
      <h2 
      style={{ fontFamily: 'Delicious Handrawn' }}
      className='text-fuchsia-800 text-5xl p-5 text-center'>You know you want to</h2>
      <h2 
      style={{ fontFamily: 'Delicious Handrawn' }}
      className='text-fuchsia-800 text-5xl p-5 text-center mb-4'>I double dog dare you</h2>
      
        
        
          
          
        
        <div className='flex justify-center space-x-4'>
          <button
            className='bg-fuchsia-400 text-white px-4 py-2 rounded-md hover:bg-fuchsia-700
            transition ease-linear duration-200'
            onClick={callOpenAIAPI}
          >
             <img src={emoji} alt="Home"
              className='w-8 '
              />
          </button>
          <button
            className='bg-fuchsia-400 text-white px-4 py-2 rounded-md hover:bg-fuchsia-700
            transition ease-linear duration-200'
            onClick={closeModal}
          >
            Exit
          </button>
          </div>
        {sentiment !== '' && (
          <div 
          className='grid grid-cols-1 text-center place-items-center p-10 text-xl
          transition ease-linear duration-200'>
            <h3
            style={{ fontFamily: 'Delicious Handrawn' }}
            className='text-fuchsia-800 text-3xl p-5 text-center tracking-wide'>{sentiment}</h3>
          </div>
        )}
      </ReactModal>
    </>
  );
}

export default AskChatGPT
