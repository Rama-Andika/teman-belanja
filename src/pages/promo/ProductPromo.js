const ProductPromo = () => {
  return (
    <>
      <div className="mt-[30px] bg-white rounded-sm font-quicksand">
        <div className="flex items-center justify-between">
          <div className="max-[252px]:text-[12px] min-[760px]:text-[32px] font-bold">
            Promo Hari Ini
          </div>
          <div className="text-[10px] min-[760px]:text-[16px] font-[400] flex items-center gap-[17px]">
            <div>Semua Promo</div>
            <div>
              <img
                className="w-[5px] min-[760px]:w-[8px]"
                src={require("../../assets/images/arrowRightBlack.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 max-[1334px]:grid-cols-3 max-[700px]:grid-cols-2 gap-5 mt-5">
          <div>
            <img
              className="object-cover w-full"
              src={require("../../assets/images/promo1.png")}
              alt=""
            />

            <div className="w-full rounded-sm px-7 bg-transparent -mt-[125px] min-[519px]:block max-[518px]:hidden ml-auto mr-auto z-[999] relative">
              <div className="grid min-[519px]:grid-cols-4 max-[518px]:grid-rows-4 gap-2">
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    365
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Hari
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    24
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Jam
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    60
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Menit
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    60
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Detik
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90%] rounded-sm bg-white p-7 max-[468px]:p-3 shadow-md min-[519px]:mt-[10px] max-[518px]:mt-[-50px] ml-auto mr-auto z-[999] relative ">
              <div>
                <div className="w-full rounded-sm bg-transparent min-[519px]:hidden max-[518px]:block">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        365
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Hari
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        24
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Jam
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        60
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Menit
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        60
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Detik
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[14px] font-bold h-[42px] overflow-hidden overflow-ellipsis max-[518px]:mt-2">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </div>
              <div>
                <img src={require("../../assets/images/rating.png")} alt="" />
              </div>
              <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
              <div className="flex items-center max-[1444px]:flex-col max-[1444px]:items-start gap-2 mt-2 justify-between">
                <div className="flex flex-col">
                  <div className="text-[10px] relative w-fit line-through">
                    Rp. 28.0000
                  </div>
                  <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                    <div className="font-bold">Rp. 25.000.000</div>
                  </div>
                </div>
                <div className="max-[1444px]:w-full">
                  <button className="flex max-[1444px]:w-full max-[1444px]:justify-center items-center p-3 bg-[#DEF9EC] text-[#3BB77E] font-bold">
                    +{" "}
                    <span>
                      <img
                        src={require("../../assets/images/cartGreen.png")}
                        alt=""
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full"
              src={require("../../assets/images/promo1.png")}
              alt=""
            />

            <div className="w-full rounded-sm px-7 bg-transparent -mt-[125px] min-[519px]:block max-[518px]:hidden ml-auto mr-auto z-[999] relative">
              <div className="grid min-[519px]:grid-cols-4 max-[518px]:grid-rows-4 gap-2">
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    365
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Hari
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    24
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Jam
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    60
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Menit
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    60
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Detik
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90%] rounded-sm bg-white p-7 max-[468px]:p-3 shadow-md min-[519px]:mt-[10px] max-[518px]:mt-[-50px] ml-auto mr-auto z-[999] relative ">
              <div>
                <div className="w-full rounded-sm bg-transparent min-[519px]:hidden max-[518px]:block">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        365
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Hari
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        24
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Jam
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        60
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Menit
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        60
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Detik
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[14px] font-bold h-[42px] overflow-hidden overflow-ellipsis max-[518px]:mt-2">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </div>
              <div>
                <img src={require("../../assets/images/rating.png")} alt="" />
              </div>
              <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
              <div className="flex items-center max-[1444px]:flex-col max-[1444px]:items-start gap-2 mt-2 justify-between">
                <div className="flex flex-col">
                  <div className="text-[10px] relative w-fit line-through">
                    Rp. 28.0000
                  </div>
                  <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                    <div className="font-bold">Rp. 25.000.000</div>
                  </div>
                </div>
                <div className="max-[1444px]:w-full">
                  <button className="flex max-[1444px]:w-full max-[1444px]:justify-center items-center p-3 bg-[#DEF9EC] text-[#3BB77E] font-bold">
                    +{" "}
                    <span>
                      <img
                        src={require("../../assets/images/cartGreen.png")}
                        alt=""
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full"
              src={require("../../assets/images/promo1.png")}
              alt=""
            />

            <div className="w-full rounded-sm px-7 bg-transparent -mt-[125px] min-[519px]:block max-[518px]:hidden ml-auto mr-auto z-[999] relative">
              <div className="grid min-[519px]:grid-cols-4 max-[518px]:grid-rows-4 gap-2">
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    365
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Hari
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    24
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Jam
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    60
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Menit
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    60
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Detik
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90%] rounded-sm bg-white p-7 max-[468px]:p-3 shadow-md min-[519px]:mt-[10px] max-[518px]:mt-[-50px] ml-auto mr-auto z-[999] relative ">
              <div>
                <div className="w-full rounded-sm bg-transparent min-[519px]:hidden max-[518px]:block">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        365
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Hari
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        24
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Jam
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        60
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Menit
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        60
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Detik
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[14px] font-bold h-[42px] overflow-hidden overflow-ellipsis max-[518px]:mt-2">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </div>
              <div>
                <img src={require("../../assets/images/rating.png")} alt="" />
              </div>
              <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
              <div className="flex items-center max-[1444px]:flex-col max-[1444px]:items-start gap-2 mt-2 justify-between">
                <div className="flex flex-col">
                  <div className="text-[10px] relative w-fit line-through">
                    Rp. 28.0000
                  </div>
                  <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                    <div className="font-bold">Rp. 25.000.000</div>
                  </div>
                </div>
                <div className="max-[1444px]:w-full">
                  <button className="flex max-[1444px]:w-full max-[1444px]:justify-center items-center p-3 bg-[#DEF9EC] text-[#3BB77E] font-bold">
                    +{" "}
                    <span>
                      <img
                        src={require("../../assets/images/cartGreen.png")}
                        alt=""
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full"
              src={require("../../assets/images/promo1.png")}
              alt=""
            />

            <div className="w-full rounded-sm px-7 bg-transparent -mt-[125px] min-[519px]:block max-[518px]:hidden ml-auto mr-auto z-[999] relative">
              <div className="grid min-[519px]:grid-cols-4 max-[518px]:grid-rows-4 gap-2">
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    365
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Hari
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    24
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Jam
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    60
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Menit
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    60
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Detik
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90%] rounded-sm bg-white p-7 max-[468px]:p-3 shadow-md min-[519px]:mt-[10px] max-[518px]:mt-[-50px] ml-auto mr-auto z-[999] relative ">
              <div>
                <div className="w-full rounded-sm bg-transparent min-[519px]:hidden max-[518px]:block">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        365
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Hari
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        24
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Jam
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        60
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Menit
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        60
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Detik
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[14px] font-bold h-[42px] overflow-hidden overflow-ellipsis max-[518px]:mt-2">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </div>
              <div>
                <img src={require("../../assets/images/rating.png")} alt="" />
              </div>
              <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
              <div className="flex items-center max-[1444px]:flex-col max-[1444px]:items-start gap-2 mt-2 justify-between">
                <div className="flex flex-col">
                  <div className="text-[10px] relative w-fit line-through">
                    Rp. 28.0000
                  </div>
                  <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                    <div className="font-bold">Rp. 25.000.000</div>
                  </div>
                </div>
                <div className="max-[1444px]:w-full">
                  <button className="flex max-[1444px]:w-full max-[1444px]:justify-center items-center p-3 bg-[#DEF9EC] text-[#3BB77E] font-bold">
                    +{" "}
                    <span>
                      <img
                        src={require("../../assets/images/cartGreen.png")}
                        alt=""
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full"
              src={require("../../assets/images/promo1.png")}
              alt=""
            />

            <div className="w-full rounded-sm px-7 bg-transparent -mt-[125px] min-[519px]:block max-[518px]:hidden ml-auto mr-auto z-[999] relative">
              <div className="grid min-[519px]:grid-cols-4 max-[518px]:grid-rows-4 gap-2">
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    365
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Hari
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    24
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Jam
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    60
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Menit
                  </div>
                </div>
                <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                  <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                    60
                  </div>
                  <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                    Detik
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90%] rounded-sm bg-white p-7 max-[468px]:p-3 shadow-md min-[519px]:mt-[10px] max-[518px]:mt-[-50px] ml-auto mr-auto z-[999] relative ">
              <div>
                <div className="w-full rounded-sm bg-transparent min-[519px]:hidden max-[518px]:block">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        365
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Hari
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        24
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Jam
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        60
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Menit
                      </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md px-3 max-[1022px]:pt-1  text-center">
                      <div className="text-[#3BB77E] text-[20px] max-[1499px]:text-[18px] max-[1415px]:text-[16px] max-[1334px]:text-[20px] max-[1137px]:text-[16px] max-[1022px]:text-[14px] max-[1001px]:text-[12px] max-[518px]:text-[16px]  font-bold">
                        60
                      </div>
                      <div className="text-[12px] max-[1022px]:text-[10px] text-[#7E7E7E] mt-[-5px]">
                        Detik
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[14px] font-bold h-[42px] overflow-hidden overflow-ellipsis max-[518px]:mt-2">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </div>
              <div>
                <img src={require("../../assets/images/rating.png")} alt="" />
              </div>
              <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
              <div className="flex items-center max-[1444px]:flex-col max-[1444px]:items-start gap-2 mt-2 justify-between">
                <div className="flex flex-col">
                  <div className="text-[10px] relative w-fit line-through">
                    Rp. 28.0000
                  </div>
                  <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                    <div className="font-bold">Rp. 25.000.000</div>
                  </div>
                </div>
                <div className="max-[1444px]:w-full">
                  <button className="flex max-[1444px]:w-full max-[1444px]:justify-center items-center p-3 bg-[#DEF9EC] text-[#3BB77E] font-bold">
                    +{" "}
                    <span>
                      <img
                        src={require("../../assets/images/cartGreen.png")}
                        alt=""
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPromo;
