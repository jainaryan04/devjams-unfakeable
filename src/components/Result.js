import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function ResultPage() {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract result, randomArray, metadata, frame_base64, dct_base64, image_base64, total_blinks, irregular_blinks, full_prediction_string, and transcribed_text from location state
    const {
        result,
        randomArray,
        prediction,
        frame_base64,
        dct_base64,
        image_base64,
        total_blinks,
        irregular_blinks,
        full_prediction_string,
        transcribed_text,
        similarity,
        micro,
        gaze,
        lip,
        mfcc1_64,
        mfcc2_64,
        mfcc3_64,
        final_result,result1,metadata
    } = location.state || { 
        result: null, 
        randomArray: [], 
        prediction: null,
        frame_base64: null, 
        dct_base64: null, 
        image_base64: null, 
        total_blinks: null, 
        irregular_blinks: null,
        full_prediction_string: null,
        transcribed_text: null,
        similarity: null,
        micro: null,
        gaze: null,
        lip: null,
        mfcc1_64: null,
        mfcc2_64: null,
        mfcc3_64: null,
        final_result:null,
        result1:null,
        metadata:null
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Debugging - log the result, randomArray, metadata, and images to see what is being passed
    useEffect(() => {
        console.log("Result:", micro);
        console.log("Random Array:", randomArray);
    }, [result,micro, randomArray]);

    useEffect(() => {
      AOS.init({
          duration: 2000, // Duration of animations
          easing: 'ease-in-out', // Animation easing function
          once: true, // Whether animation should happen only once
      });
  }, []);
  
    // Prepare data for the chart
    const data = {
        labels: randomArray.map((_, index) => `${index + 1}`),
        datasets: [
            {
                label: 'Predictions',
                data: randomArray,  // Data to plot on the chart
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: 1,
                color: 'white',
            },
        ],
    };

    useEffect(() => {
      const handleScroll = () => {
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize on load
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
      <div className="about text-white px-10 w-[100vw] h-auto flex flex-col items-center justify-center pt-[10vh] font-vt323">
        <div className="w-[95vw] h-auto border-black my-12 border-4 shadow-[-10px_10px_0_0_#000000] flex flex-col items-center">
        <div className="bg-white h-[2vh] lg:h-[8vh] w-full flex items-center border-black border-b-2 pl-[0.5vw]">
          <img src="/signal.svg" alt="Yellow Circles" className="h-[1vh] lg:h-[5vh]" />
        </div>
        <p className="text-center text-[3vh] lg:text-[9vh] my-4 font-noto [text-shadow:-10px_10px_10px_var(--tw-shadow-color)] shadow-[#6a3b6e]">
  Analysis Results
</p>
{metadata && (
  <div className="text-[2vh] lg:text-[4vh] bg-red-500 border-black border-4 shadow-[-5px_5px_0_0_#000000] lg:shadow-[-10px_10px_0_0_#000000] my-4 w-[80vw] text-center" data-aos="zoom-in">
    {/* Split the metadata string by '\n' and map each part to a <p> element */}
    <p className="text-[3vh] lg:text-[6vh] font-extrabold">METADATA</p>
    {metadata.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ))}
  </div>
)}

 {full_prediction_string && full_prediction_string !== 0 && (
  <div className="bg-red-500 my-4 w-[80vw] text-center border-black border-4 shadow-[-10px_10px_0_0_#000000] text-[2vh] lg:text-[4vh]" data-aos="zoom-in">
    <p className="text-[4vh] lg:text-[6vh] font-extrabold">LIPNET</p>
    <p> <span className="underline pr-4">Lip Reading Transcript: </span>{full_prediction_string}</p>
   
    {transcribed_text && transcribed_text !== 0 && <p><span className="underline pr-4">Transcribed Text: </span>{transcribed_text}</p>}
    {similarity !== undefined&& <p><span className="underline pr-4">Lip-audio Consistency Score:</span> {similarity}</p>}
    {lip !== undefined && lip !== 0 && <p className='mt-4 border-t-4 border-black bg-yellow-400 py-4 text-gray-500 mt-4 border-t-4 border-black'><span className="underline">Conclusion:</span> {lip}</p>}
  </div>
)} 

  
          {/* Container for side-by-side content */}
          <div className="flex w-[80vw] justify-between my-2 lg:my-8 text-[4vh]" >
              
  
              {/* Eye Tracker Plot */}
       {image_base64 && (
                  <div className="bg-red-500 w-full p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000] text-[2vh] lg:text-[4vh]" data-aos="zoom-in">
                    <p className="text-[4vh] lg:text-[6vh] font-extrabold">GAZE TRACKER</p>

                      {total_blinks !== undefined && <p><span className="underline pr-4">Total Blinks: </span>{total_blinks}</p>}
                      {irregular_blinks !== undefined && <p><span className="underline pr-4">Irregular Blinks: </span>{irregular_blinks}</p>}
                      <h2><span className="underline pr-4">Eye Tracker Plot</span></h2>
                      <img src={`data:image/png;base64,${image_base64}`} alt="Eye Tracker Plot" className="w-[75%] lg:w-[50%] h-[20vh] lg:h-[60vh] ml-[10vw] lg:ml-[19vw]" />
  
                      {gaze !== undefined && gaze !== 0 && <p className='mt-4 border-t-4 border-black bg-yellow-400 py-4 text-gray-500'><span className="underline">Conclusion:</span>{gaze}</p>}
                  </div>
              )} 
          </div>
  
       {mfcc1_64 && (
              <div className="text-center lg:mt-4 border-black border-4 shadow-[-5px_5px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000]" data-aos="zoom-in">
                
                  <img src={`data:image/png;base64,${mfcc1_64}`} alt="MFCC Plot 1" className="w-[80vw] h-[25vh] lg:h-[50vh]" />
              </div>
          )}
          {mfcc2_64 && (
              <div className="text-center mt-12 border-black border-4 shadow-[-5px_5px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000]" data-aos="zoom-in">
            
                  <img src={`data:image/png;base64,${mfcc2_64}`} alt="MFCC Plot 2" className="w-[80vw] h-[25vh] lg:h-[50vh]" />
              </div>
          )}
          {mfcc3_64 && (
              <div className="text-center mt-12 border-black border-4 shadow-[-5px_5px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000]" data-aos="zoom-in">
                 
                  <img src={`data:image/png;base64,${mfcc3_64}`} alt="MFCC Plot 3" className="w-[80vw] h-[25vh] lg:h-[50vh]" />
                  
              </div>
          )} 
  
          {randomArray.length > 0 && (
              <div className="bg-red-500 w-[80vw] text-[2vh] lg:text-[4vh] mt-4 p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000]" data-aos="zoom-in">
                <p className="text-[3vh] lg:text-[6vh] font-extrabold">MESO NET</p>
                  <h2><span className="underline pr-4 ">Prediction Graph</span></h2>
                  <Line data={data} />
                  {result && <p><span className="underline pr-4">MicroExpression Analysis Graph: </span>{result}</p>}
                  {micro !== undefined && micro !== 0 && <p className='mt-4 border-t-4 border-black bg-yellow-400 py-4 text-gray-500'><span className="underline">Conclusion: </span>{micro}</p>}
              </div>
          )}

  {final_result && (
            <div className="bg-yellow-400 w-[80vw] my-10 p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000] text-[3vh] lg:text-[5vh] text-gray-500" data-aos="zoom-in">
                <p>{final_result}</p>
              </div>
          )} 

{result1 && (
            <div className="bg-yellow-400 w-[80vw] my-10 p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000] text-[3vh] lg:text-[5vh] text-gray-500" data-aos="zoom-in">
                <p>{result1}</p>
              </div>
          )} 
  
          <button onClick={() => navigate('/upload')} className="my-[3vh] lg:my-[10vh] bg-red-500 text-white py-2 px-4 rounded hover:underline w-[30vw] lg:w-[20vw] hover:bg-yellow-500 border-[#525252] hover:border-black border-4 shadow-[-10px_10px_0_0_#525252] hover:shadow-[-10px_10px_0_0_#000000]">
              Go Back
          </button>
          </div>
      </div>
  );
  
}

export default ResultPage;