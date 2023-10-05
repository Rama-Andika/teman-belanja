import CarouselComponent from "./CarouselComponent";
import Eletronik from "../assets/images/elektronik.png";
import Laptop from "../assets/images/laptop.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const CategoryComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [setMaxSlide] = useState(0);
  const next = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentSlide((prev) => prev - 11);
  };

  const updateCurrentSlide = (index) => {
    setMaxSlide(index);
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };
  return (
    <>
      <div className="mt-[30px] bg-white rounded-sm font-quicksand text-[14px] ">
        <div className="flex items-center justify-between mb-[30px]  ">
          <div className="flex items-center gap-[37px] max-[428px]:hidden ">
            <div className="max-[252px]:text-[12px] min-[760px]:text-[32px] font-bold">
              Shop by Categories
            </div>
            <div className="text-[10px] min-[760px]:text-[16px] font-[400] flex items-center gap-[17px]">
              <div>All Categories</div>
              <div>
                <img
                  className="w-[5px] min-[760px]:w-[8px]"
                  src={require("../assets/images/arrowRightBlack.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="max-[428px]:block min-[429px]:hidden max-[252px]:text-[12px] min-[760px]:text-[32px] font-bold">
              Shop by Categories
            </div>
            <div className="max-[428px]:flex min-[429px]:hidden text-[10px] min-[760px]:text-[16px] font-[400] flex items-center gap-[17px]">
              <div>All Categories</div>
              <div>
                <img
                  className="w-[5px] min-[760px]:w-[8px]"
                  src={require("../assets/images/arrowRightBlack.png")}
                  alt=""
                />
              </div>
            </div>

            <div className="hidden items-center gap-2 min-[429px]:flex">
            <div onClick={prev} className="max-[429px]:w-[30px] max-[429px]:h-[30px]">
              <img src={require("../assets/images/prev.png")} alt="" />
            </div>
            <div onClick={next} className="max-[429px]:w-[30px] max-[429px]:h-[30px]">
              {currentSlide !== 0 ? (
                <img
                  className="scale-x-[-1]"
                  src={require("../assets/images/prev.png")}
                  alt=""
                />
              ) : (
                <img
                  className=""
                  src={require("../assets/images/nextSelected.png")}
                  alt=""
                />
              )}
            </div>
          </div>         
        </div>
        <div className="flex items-center justify-end gap-2 mb-5 min-[429px]:hidden">
            <div onClick={prev} className="max-[429px]:w-[30px] max-[429px]:h-[30px]">
              <img src={require("../assets/images/prev.png")} alt="" />
            </div>
            <div onClick={next} className="max-[429px]:w-[30px] max-[429px]:h-[30px]">
              {currentSlide !== 0 ? (
                <img
                  className="scale-x-[-1]"
                  src={require("../assets/images/prev.png")}
                  alt=""
                />
              ) : (
                <img
                  className=""
                  src={require("../assets/images/nextSelected.png")}
                  alt=""
                />
              )}
            </div>
          </div>

        <CarouselComponent
          className="group"
          showArrows={true}
          autoPlay={false}
          infiniteLoop={false}
          showIndicators={false}
          swipeable={false}
          externalIcon={true}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
        >
          <div className="overflow-y-hidden overflow-x-auto">
            <div className="max-[1384px]:flex max-[1384px]:justify-between grid grid-cols-8 gap-2 font-bold text-[16px]">
              <div className="flex flex-col gap-[26px] pt-[41px] pb-[56px] px-[49px] shadow-sm justify-center items-center bg-[#F4F6FA]">
                <div className="w-[80px]">
                  <img
                    className="h-[80px]"
                    src={require("../assets/images/sembako.png")}
                    alt=""
                  />
                </div>
                <div className="h-[48px] overflow-hidden overflow-ellipsis">Makanan</div>
              </div>
              <div className="flex flex-col gap-[26px] pt-[41px] pb-[56px] px-[49px] shadow-sm justify-center items-center bg-[#F4F6FA]">
                <div className="w-[80px]">
                  <img
                    className="h-[80px]"
                    src={require("../assets/images/iconMinuman.png")}
                    alt=""
                  />
                </div>
                <div className="h-[48px] overflow-hidden overflow-ellipsis">Minuman</div>
              </div>
              <div className="flex flex-col gap-[26px] pt-[41px] pb-[56px] px-[49px] shadow-sm justify-center items-center bg-[#F4F6FA]">
                <div className="w-[80px]">
                  <img
                    className="h-[80px]"
                    src={require("../assets/images/iconMakanan.png")}
                    alt=""
                  />
                </div>
                <div className="h-[48px] overflow-hidden overflow-ellipsis">Makanan</div>
              </div>
              <div className="flex flex-col gap-[26px] pt-[41px] pb-[56px] px-[49px] shadow-sm justify-center items-center bg-[#F4F6FA]">
                <div className="w-[80px]">
                  <img
                    className="h-[80px]"
                    src={require("../assets/images/iconPeralatan.png")}
                    alt=""
                  />
                </div>
                <div className="h-[48px] overflow-hidden overflow-ellipsis">Peralatan</div>
              </div>
              <div className="flex flex-col gap-[26px] pt-[41px] pb-[56px] px-[49px] shadow-sm justify-center items-center bg-[#F4F6FA]">
                <div className="w-[80px]">
                  <img
                    className="h-[80px]"
                    src={require("../assets/images/Jamiu.png")}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <div className="h-[48px] overflow-hidden overflow-ellipsis">
                    Jamu & Obat Tradisional
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[26px] pt-[41px] pb-[56px] px-[49px] shadow-sm justify-center items-center bg-[#F4F6FA]">
                <div className="w-[80px]">
                  <img
                    className="h-[80px]"
                    src={require("../assets/images/Buah.png")}
                    alt=""
                  />
                </div>
                <div className="h-[48px] overflow-hidden overflow-ellipsis">Buah</div>
              </div>
              <div className="flex flex-col gap-[26px] pt-[41px] pb-[56px] px-[49px] shadow-sm justify-center items-center bg-[#F4F6FA]">
                <div className="w-[80px]">
                  <img
                    className="h-[80px]"
                    src={require("../assets/images/iconSayuran.png")}
                    alt=""
                  />
                </div>
                <div className="h-[48px] overflow-hidden overflow-ellipsis">Sayuran</div>
              </div>
              <div className="flex flex-col gap-[26px] pt-[41px] pb-[56px] px-[49px] shadow-sm justify-center items-center bg-[#F4F6FA]">
                <div className="w-[80px]">
                  <img
                    className="h-[80px]"
                    src={require("../assets/images/Kopi.png")}
                    alt=""
                  />
                </div>
                <div className="h-[48px] overflow-hidden overflow-ellipsis">Kopi</div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="overflow-x-auto overflow-y-hidden h-full">
              <div className="w-[1293px] grid grid-cols-10">
                <Link to="/elektronik">
                  <div className=" transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] hover:shadow-lg border border-slate-100 h-[150px] ">
                    <img
                      alt=""
                      src={Eletronik}
                      className=" object-cover object-center h-[88.28px] category-image"
                    />
                    <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                      Eletronik
                    </div>
                  </div>
                </Link>

                <div className=" transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Laptop}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Komputer & aksesoris
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="overflow-x-auto overflow-y-hidden h-full">
              <div className="w-[1293px] grid grid-cols-10">
                <Link to="/elektronik">
                  <div className=" transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] hover:shadow-lg border border-slate-100 h-[150px] ">
                    <img
                      alt=""
                      src={Eletronik}
                      className=" object-cover object-center h-[88.28px] category-image"
                    />
                    <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                      Eletronik
                    </div>
                  </div>
                </Link>

                <div className=" transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Laptop}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Komputer & aksesoris
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselComponent>

        <div className="grid grid-cols-3 max-[861px]:grid-cols-2 max-[488px]:grid-cols-1 gap-2 mt-[30px]">
          <div className="rounded-sm bg-[#F0E8D5] h-[250px] relative">
            <div className="flex flex-col gap-5 absolute top-[50px] left-[28px] z-50">
              <div className="font-bold w-[250px] h-[100px] text-[24px] max-[1170px]:text-[18px] overflow-hidden overflow-ellipsis">Produk harian yang siap diantar ke rumah anda</div>
              <div><button className="rounded-sm bg-[#3BB77E] py-1 px-3 text-white">Shop Now</button></div>
            </div>
            <img
              className="absolute bottom-0 right-0"
              src={require("../assets/images/bengkuang.png")}
              alt=""
            />
          </div>
          <div className="rounded-sm bg-[#F3E8E8] h-[250px] relative">
            <div className="flex flex-col gap-5 absolute top-[50px] left-[28px] z-50">
              <div className="font-bold w-[250px] h-[100px] text-[24px] max-[1170px]:text-[18px] overflow-hidden overflow-ellipsis">Minuman segar yang siap diantar ke rumah anda</div>
              <div><button className="rounded-sm bg-[#3BB77E] py-1 px-3 text-white">Shop Now</button></div>
            </div>
            <img
              className="absolute bottom-0 right-0 h-[156.13px]"
              src={require("../assets/images/milk.png")}
              alt=""
            />
          </div>
          <div className="rounded-sm bg-[#E7EAF3] h-[250px] relative">
            <div className="flex flex-col gap-5 absolute top-[50px] left-[28px] z-50">
              <div className="font-bold w-[250px] h-[100px] text-[24px] max-[1170px]:text-[18px] overflow-hidden overflow-ellipsis">Produk harian yang siap diantar ke rumah anda</div>
              <div><button className="rounded-sm bg-[#3BB77E] py-1 px-3 text-white">Shop Now</button></div>
            </div>
            <img
              className="absolute bottom-0 right-0"
              src={require("../assets/images/sayur.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryComponent;
