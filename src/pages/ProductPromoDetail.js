import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { SlBasket } from "react-icons/sl";
import NavbarComponent from "../components/NavbarComponent";
import ReactImageGallery from "react-image-gallery";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const ProductPromoDetail = () => {
  const [count, setcount] = useState(1);
  const navigate = useNavigate();

  const maxCount = 100000;

  const setCountToMinus = () => {
    if (count > 1) {
      setcount((count) => count - 1);
    }
  };

  const setCountToPlus = () => {
    if (count < maxCount) {
      setcount((count) => count + 1);
    }
  };

  const onChangeCount = (e) => {
    if (parseInt(e.target.value) > maxCount) {
      setcount(maxCount);
    } else {
      setcount(parseInt(e.target.value));
    }
  };

  const images = [
    {
      original: require("../assets/images/flashImage1.jpeg"),
      thumbnail: require("../assets/images/flashImage1.jpeg"),
    },
    {
      original: require("../assets/images/terlaris1.jpeg"),
      thumbnail: require("../assets/images/terlaris1.jpeg"),
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickHandle = () => {
    navigate("/keranjang");
  };
  return (
    <>
      <NavbarComponent>
        <div className="pt-5 font-roboto">
          <div className="max-[486px]:block grid gap-10 grid-cols-12 max-[486px]:grid-cols-1 bg-white p-5 mt-3">
            <div className="col-span-5">
              <div className="relative">
                <ReactImageGallery
                  items={images}
                  showPlayButton={false}
                  showNav={false}
                />
                <div className="flex flex-col justify-center absolute top-0 right-0 bg-yellow-300 text-white  p-1 max-[390px]:text-[10px] max-[390px]:px-2 px-4 text-[18px]">
                  <div className="text-red-500">10%</div>
                  <div>OFF</div>
                </div>
                <div className="flex flex-col justify-center absolute top-2 left-0 bg-orange-400 text-white p-1 px-2 text-[10px]">
                  <div>STAR</div>
                </div>
              </div>
            </div>
            <div className="col-span-7 flex flex-col justify-between text-[10px] min-[768px]:text-lg max-[486px]:mt-5">
              <div className="flex flex-col gap-4">
                <div className="w-full overflow-ellipsis overflow-hidden">
                  <p className="font-roboto text-[22px] font-bold">
                    NESCAFE COFFEE
                  </p>
                </div>
                <div className="max-[486px]:text-[24px] text-[30px] text-[#fa5a96] font-roboto font-bold">
                  Rp. 10.000.000
                </div>
                <div className="text-[12px] flex gap-2 items-center mb-5">
                  <div>
                    <Rating
                      size={20}
                      transition
                      allowFraction
                      initialValue={5}
                    />
                  </div>

                  <div className="mt-1">100 Terjual</div>
                </div>
                <div className="text-[12px] text-slate-400">TABANAN, BALI</div>
              </div>

              <div className="flex flex-col gap-8 max-[1289px]:mt-10 ">
                <div className="flex items-center max-[751px]:mt-10 max-[363px]:text-sm max-[334px]:text-xs">
                  <div className="me-3">Kuantitas</div>
                  <div className="flex items-center">
                    <button
                      onClick={() => setCountToMinus()}
                      className="px-3 h-8 border border-slate-200 rounded-sm"
                    >
                      -
                    </button>

                    <input
                      type="number"
                      min="1"
                      className="shrink text-center border border-slate-200 text-[12px]"
                      onChange={(e) => onChangeCount(e)}
                      value={count}
                      style={{ width: "50px", height: "30px" }}
                    />

                    <button
                      onClick={() => setCountToPlus()}
                      className="py-0 px-3 h-8 border border-slate-200 rounded-sm"
                    >
                      +
                    </button>
                  </div>

                  <div className="ms-7">Tersisa {maxCount} buah</div>
                </div>
                <div className="max-[378px]:flex-col flex gap-1">
                  <div>
                    <button className="whitespace-nowrap max-[378px]:w-full flex items-center gap-2 bg-[#ffafcc] p-3 rounded-sm text-slate-900 hover:bg-[#ffc8dd]">
                      <SlBasket /> Masukkan Keranjang
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => onClickHandle()}
                      className="whitespace-nowrap max-[378px]:w-full flex items-center bg-[#fa5a96] p-3 rounded-sm text-white hover:bg-[#ffafcc]"
                    >
                      Beli sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white p-5 mt-3">
            <p className="font-roboto text-lg font-bold">Deskripsi Produk</p>
            <div className="mt-5">
              Irure proident laboris duis amet aliqua Lorem consectetur eiusmod
              eu. Enim adipisicing dolor ipsum ut ipsum. Eiusmod sit minim
              occaecat sit ipsum fugiat aliquip sit est ad eiusmod qui commodo.
              Est laborum do qui exercitation occaecat eiusmod mollit ipsum
              reprehenderit non nulla Lorem occaecat. Proident minim nisi
              adipisicing tempor fugiat. Excepteur fugiat nisi consectetur
              nostrud et elit ut nulla mollit labore sit pariatur. Laboris
              ullamco fugiat voluptate deserunt Lorem est ea ad ut aliqua id est
              voluptate. Dolore ex aute non laborum qui et cupidatat ex qui
              sint. Cupidatat ipsum consectetur reprehenderit culpa fugiat
              veniam sunt aute excepteur excepteur est. Irure adipisicing
              ullamco cupidatat aute est dolore. Reprehenderit id magna nisi
              minim. Cillum culpa id laborum non anim culpa ut sunt pariatur qui
              ullamco. Culpa laboris cillum eiusmod Lorem ut nulla duis. Aliquip
              deserunt dolor quis mollit adipisicing. Officia ad nulla laborum
              aliqua nulla nisi nulla aute aute officia voluptate tempor sit
              sint. Nulla dolore adipisicing occaecat velit excepteur culpa id
              pariatur ullamco aute esse dolor in. Sit dolor eu quis aliquip eu
              duis mollit. Dolor excepteur ea fugiat nisi ipsum est fugiat.
              Aliqua et aute labore Lorem velit labore eiusmod aute aliqua duis
              velit. Culpa consectetur adipisicing ipsum tempor. Occaecat in
              adipisicing sit duis in incididunt.
            </div>
          </div>
        </div>
      </NavbarComponent>
      <Footer className=" mt-10 border-t-4 border-[#fa5a96]" />
    </>
  );
};

export default ProductPromoDetail;
