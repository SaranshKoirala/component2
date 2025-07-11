import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Ui1 from "./Components/Ui1";

export default function App() {
  const [nonActiveDiv, setNonActiveDiv] = useState(0);
  const [prevNonActiveDiv, setPrevNonActiveDiv] = useState();

  function handleActiveDiv(index) {
    setPrevNonActiveDiv(nonActiveDiv);
    setNonActiveDiv(index);
  }
  return (
    <div className="flex justify-center items-center h-screen perspective-[100px]">
      <div className="flex flex-col gap-9">
        <div className="tracking-tighter">
          <p className="text-xl mb-1 motion-rotate ">
            Explore our classes and master trending skills!
          </p>
          <div className="font-bold text-3xl">
            <span className="text-black">Dive Into </span>
            <span className="text-green-600">What's Hot Right Now! 🔥</span>
          </div>
        </div>

        <div className="flex gap-8 h-[370px] text-white ">
          <Ui1
            index={0}
            nonActiveDiv={nonActiveDiv}
            handleActiveDiv={() => handleActiveDiv(0)}
            prevNonActiveDiv={prevNonActiveDiv}
            number={23}
            heading={"All Courses"}
            subHeading={"courses you're powering through right now."}
          />
          <Ui1
            index={1}
            nonActiveDiv={nonActiveDiv}
            handleActiveDiv={() => handleActiveDiv(1)}
            prevNonActiveDiv={prevNonActiveDiv}
            number={"05"}
            heading={"Upcoming Courses"}
            subHeading={"exciting new courses waiting to boost your skills."}
          />
          <Ui1
            index={2}
            nonActiveDiv={nonActiveDiv}
            handleActiveDiv={() => handleActiveDiv(2)}
            prevNonActiveDiv={prevNonActiveDiv}
            number={10}
            heading={"Ongoing Courses"}
            subHeading={"currently happening—don't miss out on the action!"}
          />
        </div>
      </div>
    </div>
  );
}
