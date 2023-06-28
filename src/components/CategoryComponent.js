import CarouselComponent from "./CarouselComponent";
import Eletronik from "../assets/images/elektronik.png";
import Laptop from "../assets/images/laptop.png";
import Gitar from "../assets/images/gitar.png";
import Handphone from "../assets/images/handphone.png";
import JamTangan from "../assets/images/jam_tangan.png";
import KacaMata from "../assets/images/kaca_mata.png";
import Kesehatan from "../assets/images/kesehatan.png";
import PakaianPria from "../assets/images/pakaian_pria.png";
import Sepatu from "../assets/images/sepatu.png";
import Tas from "../assets/images/tas.png";
import Makanan from "../assets/images/makanan.png";
import Perawatan from "../assets/images/perawatan.png";
import Rumah from "../assets/images/rumah.png";
import PakaianWanita from "../assets/images/pakaianWanita.png";
import PakaianMuslim from "../assets/images/pakaianMuslim.png";
import IbuBayi from "../assets/images/ibuBayi.png";
import PakaianBayi from "../assets/images/pakaianBayi.png";
import sepatuWanita from "../assets/images/sepatuWanita.png";
import TasWanita from "../assets/images/tasWanita.png";
import Otomotif from "../assets/images/otomotif.png";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

const CategoryComponent = () => {
  const array = [1];
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
  };
  return (
    <>
      <div className="mt-5 border bg-white rounded-sm  font-roboto text-[14px] ">
        <div className="mb-3 p-5">
          <p className="max-[252px]:text-[10px] max-[501px]:text-lg min-[760px]:text-lg">
            KATEGORI
          </p>
        </div>
        <CarouselComponent
          className="group"
          showArrows={true}
          autoPlay={false}
          infiniteLoop={false}
          showIndicators={false}
          swipeable={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles }}
                className="left-0 rounded-full shadow-xl bg-white w-[30px] h-[30px] group-hover:w-[50px] group-hover:h-[50px]"
              >
                <RiArrowLeftSLine className="text-center text-slate-500 group-hover:text-[50px]"/>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles }}
                className="right-0 rounded-full shadow-xl bg-white w-[30px] h-[30px] group-hover:w-[50px] group-hover:h-[50px]"
              >
                <RiArrowRightSLine className="text-center text-slate-500 group-hover:text-[50px]"/>
              </button>
            )
          }
        >
          <div>
            <div className="overflow-x-auto overflow-y-hidden">
              <div className="w-[1293px] grid grid-cols-10">
                <Link to="/elektronik">
                  <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
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

                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Laptop}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Komputer & aksesoris
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Handphone}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Handphone & Aksesoris
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={PakaianPria}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Pakaian Pria
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Sepatu}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Sepatu Pria
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Tas}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Tas Pria
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={KacaMata}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Aksesoris Fashion
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={JamTangan}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Jam Tangan
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Kesehatan}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Kesehatan
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Gitar}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Hobi & Koleksi
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Makanan}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Makanan & Minuman
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Perawatan}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Perawatan & Kecantikan
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Rumah}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Perlengkapan Rumah
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={PakaianWanita}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Pakaian Wanita
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={PakaianBayi}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Fashion Bayi & Anak
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={PakaianMuslim}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Fashion Muslim
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={IbuBayi}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Ibu & Bayi
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={sepatuWanita}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Sepatu Wanita
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={TasWanita}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Tas Wanita
                  </div>
                </div>
                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
                  <img
                    alt=""
                    src={Otomotif}
                    className=" object-cover object-center h-[88.28px] category-image"
                  />
                  <div className="w-full overflow-ellipsis overflow-hidden px-3 py-0">
                    Otomotif
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="overflow-x-auto overflow-y-hidden h-full">
              <div className="w-[1293px] grid grid-cols-10">
                <Link to="/elektronik">
                  <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
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

                <div className=" transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border border-slate-100 h-[150px] ">
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
      </div>
    </>
  );
};

export default CategoryComponent;
