import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { SlBasket } from "react-icons/sl";
import NavbarComponent from "../components/NavbarComponent";
import ReactImageGallery from "react-image-gallery";
import { BsFillLightningFill } from "react-icons/bs";
import Countdown from "react-countdown";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";

const ProductFlashSalesDetail = () => {
  const [count, setcount] = useState(1);
  const navigate = useNavigate();

  const maxCount = 5;

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

  const onClickHandle = () => {
    navigate("/keranjang");
  };

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getLocalStorageValue = (s) => localStorage.getItem(s);

  const [data, setData] = useState(
    { date: Date.now(), delay: 86400000 } //60 seconds
  );
  const wantedDelay = 86400000;

  console.log(getLocalStorageValue);

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
        <div className="pt-5 font-roboto">
          <div className="">
            <div className="flex gap-2 items-center justify-center mb-5">
              <div className="font-roboto text-xl text-[#ffafcc] font-bold">
                F<BsFillLightningFill className="inline" />
                ASH SALE
              </div>
              <div className="font-bold max-[252px]:text-[10px] max-[501px]:text-xs min-[760px]:text-xl">
                <Countdown
                  daysInHours={true}
                  date={data.date + data.delay}
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
          </div>

          <div className="grid gap-6 grid-cols-2 max-[486px]:grid-cols-1 ">
            <div>
              <ReactImageGallery
                items={images}
                showPlayButton={false}
                showNav={false}
                className="w-[200px] h-[100px]"
              />
            </div>
            <div className="flex flex-col justify-between text-[10px] min-[768px]:text-lg">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-roboto text-[22px]">Nescafe Coffee</p>
                </div>
                <div className="text-[24px] text-[#fa5a96] font-roboto">
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
                <div className="text-[12px] text-slate-400">Tabanan, Bali</div>
              </div>

              <div className="flex flex-col gap-8 max-[1289px]:mt-10 ">
                <div className="flex items-center max-[751px]:mt-10 max-[363px]:text-sm max-[334px]:text-xs">
                  <div className="me-3">Kuantitas</div>
                  <div className="flex items-center">
                    <button
                      onClick={() => setCountToMinus()}
                      className="px-3 h-8 bg-slate-200 rounded-sm"
                    >
                      -
                    </button>

                    <input
                      type="number"
                      min="1"
                      className="shrink text-center border border-slate-300 text-[12px]"
                      onChange={(e) => onChangeCount(e)}
                      value={count}
                      style={{ width: "50px", height: "30px" }}
                    />

                    <button
                      onClick={() => setCountToPlus()}
                      className="py-0 px-3 h-8 bg-slate-200 rounded-sm"
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

          <div className="pt-9">
            <p className="ont-roboto text-lg font-bold">Deskripsi Produk</p>
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

export default ProductFlashSalesDetail;