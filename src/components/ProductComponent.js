import { Link } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";

const ProductComponent = () => {
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };
  const array = [1, 2, 3];
  const arrayCategory = [1, 2, 3, 4, 5, 6];

  console.log(array);
  return (
    <>
      <div className="mt-5 py-4 text-center text-[#fa5a96] bg-white mb-5 border-b-4 border-[#fa5a96]">
        <p className="font-roboto max-[252px]:text-[10px] max-[501px]:text-lg min-[760px]:text-lg">
          REKOMENDASI
        </p>
      </div>
      <div className="mt-5 border bg-white rounded-sm p-5">
        <CarouselComponent
          showArrows={true}
          autoPlay={false}
          infiniteLoop={false}
        >
          {array.map((i) => (
            <div key={i}>
              <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 min-[1170px]:grid-cols-5 gap-2 ">
                {arrayCategory.map((i) => (
                  <Link key={i} to="/product-detail/nescafe-coffee/4">
                    <div className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] bg-white">
                      <img
                        alt=""
                        src={unsplashimg.src}
                        className="h-[200px] object-cover"
                      />
                      <div className="text-left max-[434px]:text-sm ">
                        Nescafe Coffee
                      </div>
                      <div className="text-left mt-5 font-bold text-[#fa5a96] max-[434px]:text-sm">
                        Rp. 10.000.000
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </CarouselComponent>
      </div>
    </>
  );
};

export default ProductComponent;
