import { Link } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";

const ProductComponent = () => {
  // const unsplashimg = {
  //   src: "https://source.unsplash.com/1600x900/?random",
  //   alt: "random unsplash image",
  // };
  const array = [1, 2, 3];
  const arrayCategory = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="mt-5 py-4 text-center text-[#fa5a96] bg-white border-b-4 border-[#fa5a96]">
        <p className="font-roboto max-[252px]:text-[10px] max-[501px]:text-lg min-[760px]:text-lg">
          REKOMENDASI
        </p>
      </div>
      <div className="border bg-white rounded-sm px-5 pt-2">
        <CarouselComponent
          className="group"
          showIndicators={false}
          showArrows={true}
          autoPlay={false}
          infiniteLoop={false}
        >
          {array.map((i) => (
            <div key={i}>
              <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 min-[1170px]:grid-cols-5 gap-2 ">
                {arrayCategory.map(
                  (i) =>
                    i <= 6 && (
                      <Link key={i} to="/product-detail/nescafe-coffee/4">
                        <div className="flex flex-col ">
                          <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01]">
                            <img
                              alt=""
                              src={require(`../assets/images/rekomendasi${i}.jpeg`)}
                              className="object-cover h-[180px]"
                            />
                            <div className="w-full text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
                              Nescafe Coffee
                            </div>
                            <div className="text-[#fa5a96] text-left flex justify-between items-center pb-2">
                              <div className="whitespace-nowrap overflow-ellipsis overflow-hidden text-[16px] font-bold">
                                Rp.10.000.000
                              </div>
                              <div className="text-[12px] text-slate-500 whitespace-nowrap">
                                10RB Terjual
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                )}
              </div>
            </div>
          ))}
        </CarouselComponent>
      </div>
    </>
  );
};

export default ProductComponent;
