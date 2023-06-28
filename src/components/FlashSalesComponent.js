import CarouselComponent from "./CarouselComponent";
import { BsFillLightningFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Countdown, { zeroPad } from "react-countdown";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FlashSalesComponent = () => {
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };
  const array = [1, 2, 3];
  const arrayCategory = [1, 2, 3, 4, 5, 6];
  const getLocalStorageValue = (s) => localStorage.getItem(s);

  const [data, setData] = useState({ date: Date.now(), delay: 1000000 });
  const wantedDelay = 1000000;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <span>Timer end</span>;
    } else {
      // Render a countdown
      return (
        <span>
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };

  useEffect(() => {
    const savedDate = getLocalStorageValue("end_date");
    if (savedDate != null && !isNaN(savedDate)) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      //Do you reach the end?
      if (delta > wantedDelay) {
        //Yes we clear uour saved end date
        if (localStorage.getItem("end_date").length > 0)
          localStorage.removeItem("end_date");
      } else {
        //No update the end date
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);
  return (
    <div className="mt-5 border bg-white rounded-sm p-5">
      <div className="flex justify-between">
        <div className="flex gap-2 items-cente mb-3 ">
          <div className="font-roboto max-[252px]:text-[10px] max-[501px]:text-lg min-[760px]:text-xl text-[#fa5a96] font-bold">
            F<BsFillLightningFill className="inline" />
            ASH SALE
          </div>
          <div className="font-bold max-[252px]:text-[10px] max-[501px]:text-lg min-[760px]:text-xl">
            <Countdown
              date={data.date + data.delay}
              renderer={renderer}
              zeroPadTime={2}
              onStart={(delta) => {
                //Save the end date
                if (localStorage.getItem("end_date") == null)
                  localStorage.setItem(
                    "end_date",
                    JSON.stringify(data.date + data.delay)
                  );
              }}
              onComplete={() => {
                if (localStorage.getItem("end_date") != null)
                  localStorage.removeItem("end_date");
              }}
            />
          </div>
        </div>
        <div className="hidden min-[970px]:block text-[#fa5a96]">
          Lihat Semua <IoIosArrowForward className="inline" />
        </div>
      </div>
      <CarouselComponent
        showArrows={true}
        autoPlay={false}
        infiniteLoop={false}
      >
        {array.map((i) => (
          <div key={i}>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 gap-2">
              {arrayCategory.map((i) => (
                <Link key={i} to="/flash-sales">
                  <div className="flex flex-col ">
                    <div className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05]">
                      <img
                        alt=""
                        src={unsplashimg.src}
                        className="object-cover h-[170px]"
                      />
                      <div className="text-[#fa5a96] text-center">
                        Rp.10.000.000
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </CarouselComponent>
      <div className="mt-2 hidden max-[969px]:block text-[#fa5a96]">
        Lihat Semua <IoIosArrowForward className="inline" />
      </div>
    </div>
  );
};

export default FlashSalesComponent;
