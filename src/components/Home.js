import React, { useEffect } from "react";
import "../index.css";
import ImageCarousel from "./ImageCarousel";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
    });
  }, []);


  return (
    <div className="h-full w-full about pt-[10vh] font-vt323 text-yellow-400 flex flex-col items-center justify-center overflow-hidden text-[2.5vh] lg:text-[4vh]">
      <div>
        <ImageCarousel />
      </div>

      <div className="w-[90vw] pb-8 lg:w-[95vw] h-auto border-black my-12 border-4 shadow-[-5px_5px_0_0_#000000] lg:shadow-[-10px_10px_0_0_#000000] flex flex-col items-center">
        <div className="bg-white h-[2vh] lg:h-[8vh] w-full flex items-center border-black border-b-2 pl-[0.5vw]">
          <img src="/signal.svg" alt="Traffic Signal" className="h-[1vh] lg:h-[5vh]" />
        </div>
        <div className="pb-6" data-aos="fade-up">
          <p className="font-extrabold text-[3vh] lg:text-[5vh] p-4 text-cyan-300">
            What is a deepfake?
          </p>
          <p className="px-16">
            A deepfake is a type of synthetic media created using artificial intelligence, specifically deep learning algorithms, to manipulate or generate audio, video, or images. Deepfakes often alter a person's appearance, voice, or actions, making it seem as though they are doing or saying something they never actually did.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-4 mt-4 w-[60vw] lg:w-[90vw] py-8" data-aos="zoom-in">

 <img src="/gif-1.gif" className="inline lg:h-[50vh] lg:w-[25vw]" />
 <img src="/gif-2.gif" className="inline lg:h-[50vh] lg:w-[25vw]" />
 <img src="/gif-3.gif" className="inline lg:h-[50vh] lg:w-[25vw]" />

</div>

        <div data-aos="fade-up">
          <p className="font-extrabold text-[3vh] lg:text-[5vh] p-4 text-cyan-300">
            Harmful effects of Deepfake
          </p>
          <div className="px-16">
            <ol type="1" className="list-decimal space-y-2">
              <li><span className="underline">Misinformation and Fake News:</span> Deepfakes can spread false information, potentially influencing public opinion or causing confusion. They can manipulate speeches, actions, or statements of public figures, making it difficult to distinguish fact from fiction.</li>
              <li><span className="underline">Political Manipulation:</span> Deepfakes can be used in political campaigns to discredit candidates or spread propaganda, creating false narratives that can undermine trust in democratic processes.</li>
              <li><span className="underline">Identity Theft and Fraud:</span> Deepfake technology can be used to impersonate individuals, leading to identity theft. Fraudsters can create fake videos or audio to gain unauthorized access to accounts or deceive others for financial gain.</li>
              <li><span className="underline">Defamation and Blackmail:</span> Deepfake videos can be used to make it appear as though someone has said or done something they haven’t. This can be used for blackmail or to destroy someone’s reputation, especially in cases of non-consensual pornography or revenge porn.</li>
              <li><span className="underline">Security Threats:</span> Deepfakes can be weaponized for cyberattacks, including phishing schemes, by mimicking the voices or likenesses of trusted individuals in organizations or governments.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}