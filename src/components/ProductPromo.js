import CarouselComponent from "./CarouselComponent";
import { IoIosArrowForward } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductPromo = () => {

  const array = [1, 2, 3];


  return (
    <div className="mt-5 border bg-white rounded-sm p-5 font-roboto ">
      <div className="flex justify-between mb-3">
        <div className="flex gap-2 items-center">
          <div className="max-[252px]:text-[10px] max-[501px]:text-lg min-[760px]:text-xl text-[#fa5a96] font-bold">
            Produk promo <CiDiscount1 className="inline" />
          </div>
        </div>
        <div className="hidden min-[970px]:block text-[#fa5a96]">
          Lihat Semua <IoIosArrowForward className="inline" />
        </div>
      </div>
      <CarouselComponent
        className="group"
        showIndicators={false}
        showArrows={true}
        autoPlay={false}
        infiniteLoop={false}
      >
        {array.map((i) => (
          <div key={i}>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 gap-2">
              <Link  to="/product-promo/nescafe-coffee/4">
                <div className="flex flex-col">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] relative">
                    <img
                      alt=""
                      src={require("../assets/images/flashImage1.jpeg")}
                      className="h-[180px] object-cover"
                    />
                    <div className="flex flex-col justify-center absolute top-0 right-0 bg-yellow-300 text-white p-1 px-2 text-[10px]">
                      <div className="text-red-500">10%</div>
                      <div>OFF</div>
                    </div>
                    <div className="flex flex-col justify-center absolute top-2 left-0 bg-orange-400 text-white p-1 px-2 text-[10px]">
                      <div>STAR</div>
                    </div>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <div className="relative">
                      <div className="text-slate-400">
                        <p>Rp.9.000.000</p>
                      </div>
                      <div className="">
                        <hr className="bg-slate-400 h-1 mt-[-13px]" />
                      </div>
                    </div>
                    <div className="text-[#fa5a96] text-[18px] font-bold">Rp.10.000.000</div>
                  </div>
                </div>
              </Link>
              <Link  to="/product-promo/nescafe-coffee/4">
                <div className="flex flex-col">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] relative">
                    <img
                      alt=""
                      src={require("../assets/images/flashimage2.jpeg")}
                      className="h-[180px] object-cover"
                    />
                    <div className="flex flex-col justify-center absolute top-0 right-0 bg-yellow-300 text-white p-1 px-2 text-[10px]">
                      <div className="text-red-500">10%</div>
                      <div>OFF</div>
                    </div>
                    <div className="flex flex-col justify-center absolute top-2 left-0 bg-orange-400 text-white p-1 px-2 text-[10px]">
                      <div>STAR</div>
                    </div>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <div className="relative">
                      <div className="text-slate-400">
                        <p>Rp.9.000.000</p>
                      </div>
                      <div className="">
                        <hr className="bg-slate-400 h-1 mt-[-13px]" />
                      </div>
                    </div>
                    <div className="text-[#fa5a96] text-[18px] font-bold">Rp.10.000.000</div>
                  </div>
                </div>
              </Link>
              <Link  to="/product-promo/nescafe-coffee/4">
                <div className="flex flex-col">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] relative">
                    <img
                      alt=""
                      src={require("../assets/images/flashImage3.png")}
                      className="h-[180px] object-cover"
                    />
                    <div className="flex flex-col justify-center absolute top-0 right-0 bg-yellow-300 text-white p-1 px-2 text-[10px]">
                      <div className="text-red-500">10%</div>
                      <div>OFF</div>
                    </div>
                    <div className="flex flex-col justify-center absolute top-2 left-0 bg-orange-400 text-white p-1 px-2 text-[10px]">
                      <div>STAR</div>
                    </div>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <div className="relative">
                      <div className="text-slate-400">
                        <p>Rp.9.000.000</p>
                      </div>
                      <div className="">
                        <hr className="bg-slate-400 h-1 mt-[-13px]" />
                      </div>
                    </div>
                    <div className="text-[#fa5a96] text-[18px] font-bold">Rp.10.000.000</div>
                  </div>
                </div>
              </Link>
              <Link  to="/product-promo/nescafe-coffee/4">
                <div className="flex flex-col">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] relative">
                    <img
                      alt=""
                      src={require("../assets/images/flashImage4.png")}
                      className="h-[180px] object-cover"
                    />
                    <div className="flex flex-col justify-center absolute top-0 right-0 bg-yellow-300 text-white p-1 px-2 text-[10px]">
                      <div className="text-red-500">10%</div>
                      <div>OFF</div>
                    </div>
                    <div className="flex flex-col justify-center absolute top-2 left-0 bg-orange-400 text-white p-1 px-2 text-[10px]">
                      <div>STAR</div>
                    </div>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <div className="relative">
                      <div className="text-slate-400">
                        <p>Rp.9.000.000</p>
                      </div>
                      <div className="">
                        <hr className="bg-slate-400 h-1 mt-[-13px]" />
                      </div>
                    </div>
                    <div className="text-[#fa5a96] text-[18px] font-bold">Rp.10.000.000</div>
                  </div>
                </div>
              </Link>
              <Link  to="/product-promo/nescafe-coffee/4">
                <div className="flex flex-col">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] relative">
                    <img
                      alt=""
                      src={require("../assets/images/flashImage5.png")}
                      className="h-[180px] object-cover"
                    />
                    <div className="flex flex-col justify-center absolute top-0 right-0 bg-yellow-300 text-white p-1 px-2 text-[10px]">
                      <div className="text-red-500">10%</div>
                      <div>OFF</div>
                    </div>
                    <div className="flex flex-col justify-center absolute top-2 left-0 bg-orange-400 text-white p-1 px-2 text-[10px]">
                      <div>STAR</div>
                    </div>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <div className="relative">
                      <div className="text-slate-400">
                        <p>Rp.9.000.000</p>
                      </div>
                      <div className="">
                        <hr className="bg-slate-400 h-1 mt-[-13px]" />
                      </div>
                    </div>
                    <div className="text-[#fa5a96] text-[18px] font-bold">Rp.10.000.000</div>
                  </div>
                </div>
              </Link>
              <Link  to="/product-promo/nescafe-coffee/4">
                <div className="flex flex-col">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] relative">
                    <img
                      alt=""
                      src={require("../assets/images/flashImage6.jpeg")}
                      className="h-[180px] object-cover"
                    />
                    <div className="flex flex-col justify-center absolute top-0 right-0 bg-yellow-300 text-white p-1 px-2 text-[10px]">
                      <div className="text-red-500">10%</div>
                      <div>OFF</div>
                    </div>
                    <div className="flex flex-col justify-center absolute top-2 left-0 bg-orange-400 text-white p-1 px-2 text-[10px]">
                      <div>STAR</div>
                    </div>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <div className="relative">
                      <div className="text-slate-400">
                        <p>Rp.9.000.000</p>
                      </div>
                      <div className="">
                        <hr className="bg-slate-400 h-1 mt-[-13px]" />
                      </div>
                    </div>
                    <div className="text-[#fa5a96] text-[18px] font-bold">Rp.10.000.000</div>
                  </div>
                </div>
              </Link>
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

export default ProductPromo;
