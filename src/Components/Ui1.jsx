import { IoIosArrowRoundForward } from "react-icons/io";

export default function Ui1({
  index,
  nonActiveDiv,
  handleActiveDiv,
  prevNonActiveDiv,
  number,
  heading,
  subHeading,
}) {
  return (
    <div
      className={`transition-all duration-1000 ${
        nonActiveDiv === index
          ? "flex flex-col justify-between items-center gap-8 bg-red-500  rounded-3xl py-4 px-8 w-[490px]"
          : " bg-red-100 text-red-500 w-[240px] rounded-3xl flex flex-col justify-end py-4 gap-10 items-center"
      }`}
      onClick={handleActiveDiv}
    >
      {nonActiveDiv === index ? (
        <>
          <div className="flex self-end items-center gap-2 motion-preset-fade motion-duration-700">
            <span>View all Courses</span>
            <button className="flex justify-center items-center">
              <IoIosArrowRoundForward className="text-2xl leading-none" />
            </button>{" "}
          </div>
          <div
            className={`flex justify-start items-center gap-8 ${
              prevNonActiveDiv < nonActiveDiv
                ? "-motion-translate-x-in-25"
                : "motion-translate-x-in-25"
            }`}
          >
            <img src="/icon1.png" width={"75px"} height={"75px"} />
            <img src="/icon2.png" width={"75px"} height={"75px"} />
            <img src="/icon3.png" width={"75px"} height={"75px"} />
            <img src="/icon4.png" width={"75px"} height={"75px"} />
          </div>
          <div className="flex justify-center items-center gap-5 ">
            <div className="relative">
              <div className="text-9xl font-extrabold">{number}</div>
              <span className="text-5xl font-extrabold absolute -top-1 -right-4">
                +
              </span>
            </div>
            <div className="origin-top -motion-rotate-in-180 duration-1000">
              <div className="font-bold mb-2 text-2xl">{heading}</div>
              <div className="text-sm/4 w-40">{subHeading}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="-rotate-90 transition-all duration-900 ease-in-out">
            <div
              className={`font-bold mb-3 text-2xl/7 ${
                index === 0 ? "" : "w-28"
              } `}
            >
              {heading}
            </div>
            <div className="text-sm/4 w-43 ">{subHeading}</div>
          </div>
          <div className="relative">
            <div className="text-9xl font-extrabold">{number}</div>
            <span className="text-5xl font-extrabold absolute -top-4 -right-3">
              +
            </span>
          </div>
        </>
      )}
    </div>
  );
}
