import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import { useEffect } from "react";
import { Rating } from "react-simple-star-rating";

const ProductRekomendasiList = () => {
  // const arrayCategory = [1, 2, 3, 4, 5, 6];
  // const unsplashimg = {
  //   src: "https://source.unsplash.com/1600x900/?random",
  //   alt: "random unsplash image",
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavbarComponent>
        <div className="mt-10 font-roboto">
          <div className="mb-10 flex justify-center">
            <button className="bg-[#fa5a96] text-white px-[18px] py-[14px] rounded-lg shadow-sm font-bold text-[20px]">
              REKOMENDASI
            </button>
          </div>
          <div className="grid grid-cols-1">
            <div className="relative">
              <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 min-[1170px]:grid-cols-5 gap-1 ">
                <Link to="/product-detail/nescafe-coffee/4">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white w-auto flex flex-col items-center">
                    <img
                      alt=""
                      src={require("../assets/images/rekomendasi1.jpeg")}
                      className="h-[190.05px] w-full object-fill "
                    />
                    <div className="w-full p-3 text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
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
                <Link to="/product-detail/nescafe-coffee/4">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white w-auto flex flex-col items-center">
                    <img
                      alt=""
                      src={require("../assets/images/rekomendasi2.jpeg")}
                      className="h-[190.05px] w-full object-fill "
                    />
                    <div className="w-full p-3 text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
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
                <Link to="/product-detail/nescafe-coffee/4">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white w-auto flex flex-col items-center">
                    <img
                      alt=""
                      src={require("../assets/images/rekomendasi3.jpeg")}
                      className="h-[190.05px] w-full object-fill "
                    />
                    <div className="w-full p-3 text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
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
                <Link to="/product-detail/nescafe-coffee/4">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white w-auto flex flex-col items-center">
                    <img
                      alt=""
                      src={require("../assets/images/rekomendasi4.jpeg")}
                      className="h-[190.05px] w-full object-fill "
                    />
                    <div className="w-full p-3 text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
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
                <Link to="/product-detail/nescafe-coffee/4">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white w-auto flex flex-col items-center">
                    <img
                      alt=""
                      src={require("../assets/images/rekomendasi5.jpeg")}
                      className="h-[190.05px] w-full object-fill "
                    />
                    <div className="w-full p-3 text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
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
                <Link to="/product-detail/nescafe-coffee/4">
                  <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white w-auto flex flex-col items-center">
                    <img
                      alt=""
                      src={require("../assets/images/rekomendasi6.jpeg")}
                      className="h-[190.05px] w-full object-fill "
                    />
                    <div className="w-full p-3 text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
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
              </div>
            </div>
          </div>
        </div>
      </NavbarComponent>
      <Footer className=" mt-10 border-t-4 border-[#fa5a96]" />
    </>
  );
};

export default ProductRekomendasiList;
