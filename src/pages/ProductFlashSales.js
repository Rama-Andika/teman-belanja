import { BsFillLightningFill } from "react-icons/bs";
import NavbarComponent from "../components/NavbarComponent";
import Countdown, { zeroPad } from "react-countdown";
import { useEffect, useState } from "react";
import BannerFlashSales from "../assets/images/flashSales.png";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const ProductFlashSales = () => {
  const arrayCategory = [1, 2, 3, 4, 5, 6];
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getLocalStorageValue = (s) => localStorage.getItem(s);

  const [data, setData] = useState(
    { date: Date.now(), delay: 86400000 } //60 seconds
  );
  const wantedDelay = 86400000;

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
    <>
      <NavbarComponent>
        <div className="mt-5 font-roboto">
          <div className="flex gap-2 items-center justify-center mb-5">
            <div className="font-roboto text-xl text-[#fa5a96] font-bold">
              F<BsFillLightningFill className="inline" />
              ASH SALE
            </div>
            <div className="font-bold text-xl">
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
          <div>
            <div className="">
              <img
                className="w-full"
                src={BannerFlashSales}
                alt="banner-laptop"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mt-5">
            <div className="relative">
              <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 max-[375px]:grid-cols-1 gap-1 ">
                {arrayCategory.map((i) => (
                  <Link key={i} to="/flash-sales/nescafe-coffee/4">
                    <div className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] bg-white w-auto flex flex-col items-center">
                      <img
                        alt=""
                        src={unsplashimg.src}
                        className=" w-full h-[280px] object-cover "
                      />
                      <div className="w-full p-3 text-left max-[434px]:text-lg overflow-ellipsis overflow-hidden">
                        Nescafe Coffee
                      </div>
                      <div className="w-full px-3  font-bold text-[#fa5a96] max-[434px]:text-sm whitespace-nowrap overflow-ellipsis overflow-hidden">
                        Rp. 10.000.000
                      </div>
                      <div className="w-full px-3 font-bold text-[#fa5a96] text-[12px] whitespace-nowrap overflow-ellipsis overflow-hidden flex gap-1 items-center">
                        <div>
                          <Rating
                            size={10}
                            transition
                            allowFraction
                            initialValue={5}
                          />
                        </div>

                        <div className="text-slate-500 mt-1">100 Terjual</div>
                      </div>
                      <div className="w-full p-3 text-[#000000A6] text-[12px] whitespace-nowrap overflow-ellipsis overflow-hidden">
                        KOTA DENPASAR
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </NavbarComponent>
    </>
  );
};

export default ProductFlashSales;
