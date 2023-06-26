import CarouselComponent from "./CarouselComponent";
import { IoIosArrowForward } from "react-icons/io";
import { GoThumbsup } from "react-icons/go";
import { Link } from "react-router-dom";

const BestSelling = () => {
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };
  const array = [1, 2, 3];
  const arrayCategory = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mt-5 border bg-slate-100 rounded-sm p-5">
      <div className="flex justify-between mb-3">
        <div className="flex gap-2 items-center">
          <div className="font-roboto max-[252px]:text-[10px] max-[501px]:text-lg min-[760px]:text-xl text-[#fa5a96] font-bold">
            Produk terlaris
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
                <Link key={i} to="/product-detail/nescafe-coffee/4">
                  <div className="flex flex-col">
                    <div className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] relative">
                      <img
                        alt=""
                        src={unsplashimg.src}
                        className="h-[150px] object-cover"
                      />
                      <div className="absolute top-0 left-0 p-2 text-white bg-orange-400">
                        <GoThumbsup />
                      </div>
                    </div>
                    <div className="text-[#fa5a96] text-center">
                      Rp.10.000.000
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

export default BestSelling;