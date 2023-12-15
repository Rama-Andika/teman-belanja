import { useState } from "react";
import NavbarComponent from "../../components/NavbarComponent";
import {
  Pagination,
  Rating,
  Slider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Footer from "../../components/Footer";
import ArrowDown from "../../components/icons/ArrowDown";
import Sort from "../../components/icons/Sort";


const CategoryShop = () => {
  const [open, setOpen] = useState(false);
  const [kondisi, setKondisi] = useState(null);
  const [value, ] = useState(4);

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#3BB77E",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });

  return (
    <div className="font-quicksand" onClick={() => open && setOpen(false)}>
      <NavbarComponent>
        <div className="mt-[30px]">
          <div className="h-[235px] bg-[#3BB77E] opacity-[20%] rounded-lg"></div>

          <div className="ps-[36px] mt-[-180px] pe-[36px] relative z-10 flex max-[541px]:flex-col max-[541px]:gap-5 justify-between items-center">
            <div>
              <div className="text-[48px] font-bold max-[541px]:text-center">
                Makanan
              </div>
              <div className="text-[18px] text-[#7E7E7E] max-[541px]:text-center">
                Home {">"} Makanan
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-2 max-[1137px]:hidden justify-end">
                <div className="py-[5px] px-[20px] text-[18px] bg-white rounded-xl font-bold w-[166.45px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#3BB77E] ">
                  Minyak Goreng
                </div>
                <div className="py-[5px] px-[20px] text-[18px] bg-white rounded-xl font-bold w-[166.45px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#3BB77E] ">
                  Minyak Goreng
                </div>
                <div className="py-[5px] px-[20px] text-[18px] bg-white rounded-xl font-bold w-[166.45px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#3BB77E] ">
                  Minyak Goreng
                </div>
                <div className="py-[5px] px-[20px] text-[18px] bg-white rounded-xl font-bold w-[166.45px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#3BB77E] ">
                  Minyak Goreng
                </div>
              </div>
              <div className="hidden max-[1137px]:flex justify-end max-[541px]:justify-center relative">
                <div
                  onClick={() => setOpen((prev) => !prev)}
                  className=" relative  "
                >
                  <div className="py-[5px] px-[20px] text-[18px] bg-white rounded-xl font-bold w-[166.45px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#3BB77E] text-center cursor-pointer">
                    Kategori <span>▼</span>
                  </div>
                  {open && (
                    <div className="absolute top-[50px] py-2 px-5 right-0 grid gap-5 bg-white text-black max-h-[222.4px] overflow-y-auto">
                      <div className="text-[18px] overflow-ellipsis overflow-hidden whitespace-nowrap text-center w-[160px]  pb-2 ">
                        Minyak Goreng
                      </div>
                      <div className="text-[18px] overflow-ellipsis overflow-hidden whitespace-nowrap text-center w-[160px]  pb-2 ">
                        Minyak Goreng
                      </div>
                      <div className="text-[18px] overflow-ellipsis overflow-hidden whitespace-nowrap text-center w-[160px]  pb-2 ">
                        Minyak Goreng
                      </div>
                      <div className="text-[18px] overflow-ellipsis overflow-hidden whitespace-nowrap text-center w-[160px]  pb-2 ">
                        Minyak Goreng
                      </div>
                      <div className="text-[18px] overflow-ellipsis overflow-hidden whitespace-nowrap text-center w-[160px]  pb-2 ">
                        Minyak Goreng
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[144px] max-[542px]:mt-[73px]">
          <div className="flex gap-[23px]">
            <div className="flex flex-col gap-[55px] max-[1280px]:hidden">
              <div className="border shadow-md py-[28.87px] px-[29.08px] min-w-[379px] relative  ">
                <div className="font-bold text-[24px] pb-[14.16px]">
                  Filter Produk
                </div>
                <hr />
                <div className="text-[16px] text-[#B6B6B6] pt-[35.46px] ">
                  Kisaran Harga:{" "}
                  <span className="text-[14px] text-[#3BB77E]">
                    Rp 0 - Rp 100.000.000
                  </span>
                </div>
                <div className="pt-[21.51px]">
                  <ThemeProvider theme={theme}>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={[10, 70]}
                      valueLabelDisplay="auto"
                      color="primary"
                      size="small"
                    />
                  </ThemeProvider>
                </div>
                <div className="text-[16px] text-[#B6B6B6] pt-[30.3px] ">
                  Lokasi
                </div>
                <div className="pt-[21.27px]">
                  <div className="flex gap-[10px] items-center">
                    <input
                      name="c_1"
                      id="c_1"
                      className="checked:bg-[#3BB77E] border border-[#D7DEDB]"
                      type="checkbox"
                      checked
                    />
                    <label className="text-[16px] font-bold" htmlFor="c-1">
                      Import
                    </label>
                  </div>
                  <div className="flex gap-[10px] items-center pt-[10px]">
                    <div>
                      <input
                        className="checked:bg-[#3BB77E] border border-[#D7DEDB]"
                        type="checkbox"
                      />
                    </div>
                    <div className="text-[16px] text-[#B6B6B6]">Lokal</div>
                  </div>
                  <div className="flex gap-[10px] items-center pt-[10px]">
                    <div>
                      <input
                        className="checked:bg-[#3BB77E] border border-[#D7DEDB]"
                        type="checkbox"
                      />
                    </div>
                    <div className="text-[16px] text-[#B6B6B6]">Bali</div>
                  </div>
                  <div className="flex gap-[10px] items-center pt-[10px]">
                    <div>
                      <input
                        className="checked:bg-[#3BB77E] border border-[#D7DEDB]"
                        type="checkbox"
                      />
                    </div>
                    <div className="text-[16px] text-[#B6B6B6]">Jawa</div>
                  </div>
                </div>
                <div className="text-[16px] text-[#B6B6B6] pt-[30.3px] ">
                  Kondisi
                </div>
                <div className="pt-[21.27px]">
                  <div className="flex gap-[10px] items-center">
                    <input
                      className="checked:bg-[#3BB77E] border border-[#D7DEDB]"
                      type="checkbox"
                      checked={kondisi === "Baru"}
                      onChange={() => setKondisi("Baru")}
                    />
                    <label className="text-[16px] font-bold" htmlFor="c-1">
                      Baru
                    </label>
                  </div>
                  <div className="flex gap-[10px] items-center pt-[10px]">
                    <div>
                      <input
                        className="checked:bg-[#3BB77E] border border-[#D7DEDB]"
                        type="checkbox"
                        checked={kondisi === "Bekas"}
                        onChange={() => setKondisi("Bekas")}
                      />
                    </div>
                    <div className="text-[16px] text-[#B6B6B6]">Bekas</div>
                  </div>
                </div>

                <div className="pt-[30.3px] relative z-10 ">
                  <div className="text-[16px] text-[#B6B6B6]">
                    Merk / Vendor
                  </div>
                  <div className="pt-[21.27px]">
                    <div className="flex gap-[10px] items-center">
                      <input
                        className="checked:bg-[#3BB77E] border border-[#D7DEDB]"
                        type="checkbox"
                      />
                      <label className="text-[16px] font-bold" htmlFor="c-1">
                        Toko Buah Sukses
                      </label>
                    </div>
                    <div className="flex gap-[10px] items-center pt-[10px]">
                      <input
                        className="checked:bg-[#3BB77E] border border-[#D7DEDB]"
                        type="checkbox"
                      />
                      <div className="text-[16px] text-[#B6B6B6]">
                        Warung Buah bali
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[58.49px]">
                  <button className="bg-[#DEF9EC] py-[13.72px] px-[31.79px] text-[14px] font-bold rounded-[4px] text-[#3BB77E] flex items-center gap-[6.49px]">
                    <span>
                      <img
                        src={require("../../assets/images/filter.png")}
                        alt=""
                      />
                    </span>{" "}
                    <span>Filter</span>
                  </button>
                </div>
                <div className="absolute bottom-0 right-0 z-0">
                  <img
                    src={require("../../assets/images/imgFilter.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="border shadow-md py-[28.87px] px-[29.08px] min-w-[379px] relative  ">
                <div className="font-bold text-[24px] pb-[14.16px]">
                  Produk Terpopuler
                </div>
                <hr />
                <div className="mt-[38.23px]">
                  <div className="flex items-center gap-[23px]">
                    <div className="w-[120px] h-[120px]">
                      <img
                        src={require("../../assets/images/avocado.png")}
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="w-[172px]">
                      <div className="text-[16px] font-bold">
                        Alpukat Matang Import
                      </div>
                      <div className="text-[16px] font-bold">
                        <div className="flex items-center gap-[10px]">
                          <Rating value={value} size="small" />
                          <div className="text-[12px] text-[#7E7E7E]">
                            (4.0)
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] w-fit line-through mt-[4.98px] mb-[3px]">
                        Rp. 28.0000
                      </div>
                      <div className="text-[20px] text-[#3BB77E] font-bold">
                        Rp. 20.500
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[23px] mt-[24px]">
                    <div className="w-[120px] h-[120px]">
                      <img
                        src={require("../../assets/images/pisang.png")}
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="w-[172px]">
                      <div className="text-[16px] font-bold">
                        Pisang Raja Lokal
                      </div>
                      <div className="text-[16px] font-bold">
                        <div className="flex items-center gap-[10px]">
                          <Rating value={value} size="small" />
                          <div className="text-[12px] text-[#7E7E7E]">
                            (4.0)
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] w-fit line-through mt-[4.98px] mb-[3px]">
                        Rp. 28.0000
                      </div>
                      <div className="text-[20px] text-[#3BB77E] font-bold">
                        Rp. 20.500
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[23px] mt-[24px]">
                    <div className="w-[120px] h-[120px]">
                      <img
                        src={require("../../assets/images/jeruk.png")}
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="w-[172px]">
                      <div className="text-[16px] font-bold">
                        Jeruk Mandarin Import
                      </div>
                      <div className="text-[16px] font-bold">
                        <div className="flex items-center gap-[10px]">
                          <Rating value={value} size="small" />
                          <div className="text-[12px] text-[#7E7E7E]">
                            (4.0)
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] w-fit line-through mt-[4.98px] mb-[3px]">
                        Rp. 28.0000
                      </div>
                      <div className="text-[20px] text-[#3BB77E] font-bold">
                        Rp. 20.500
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[23px] mt-[24px]">
                    <div className="w-[120px] h-[120px]">
                      <img
                        src={require("../../assets/images/semangka.png")}
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="w-[172px]">
                      <div className="text-[16px] font-bold">
                        Semangka Merah Biji Sedikit
                      </div>
                      <div className="text-[16px] font-bold">
                        <div className="flex items-center gap-[10px]">
                          <Rating value={value} size="small" />
                          <div className="text-[12px] text-[#7E7E7E]">
                            (4.0)
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] w-fit line-through mt-[4.98px] mb-[3px]">
                        Rp. 28.0000
                      </div>
                      <div className="text-[20px] text-[#3BB77E] font-bold">
                        Rp. 20.500
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border shadow-md py-[28.87px] px-[29.08px] min-w-[379px] relative  ">
                <div className="font-bold text-[24px] pb-[14.16px]">
                  Tag Terpopuler
                </div>
                <hr />
                <div className="mt-[39.95px]">
                  <div className="grid grid-cols-3 whitespace-nowrap gap-[10px]">
                    <div className="text-[18px] text-[#3BB77E] font-bold px-[20px] py-[15px] bg-white shadow-md rounded-[30px] text-center min-w-fit">
                      Lokal
                    </div>
                    <div className="text-[18px]  font-bold px-[20px] py-[15px] bg-white shadow-md rounded-[30px] text-center min-w-fit">
                      Import
                    </div>
                    <div className="text-[18px]  font-bold px-[20px] py-[15px] bg-white shadow-md rounded-[30px] text-center min-w-fit">
                      Bali
                    </div>
                  </div>
                  <div className="grid grid-cols-3 whitespace-nowrap gap-[10px] mt-[10px]">
                    <div className="text-[18px] text-[#3BB77E] font-bold px-[20px] py-[15px] bg-white shadow-md rounded-[30px] text-center min-w-fit">
                      Daging
                    </div>
                    <div className="text-[18px] font-bold px-[20px] py-[15px] bg-white shadow-md rounded-[30px] text-center min-w-fit">
                      Mie Instant
                    </div>
                  </div>
                  <div className="grid grid-cols-3 whitespace-nowrap gap-[10px] mt-[10px]">
                    <div className="text-[18px] text-[#3BB77E] font-bold px-[20px] py-[15px] bg-white shadow-md rounded-[30px] text-center min-w-fit">
                      Makan
                    </div>
                    <div className="text-[18px]  font-bold px-[20px] py-[15px] bg-white shadow-md rounded-[30px] text-center min-w-fit">
                      Jamu
                    </div>
                  </div>
                </div>
              </div>
              <div className="border shadow-md pt-[33.71px] ps-[43.58px] min-w-[379px] h-[512px] relative rounded-[20px] bg-[#EDF1F4]  ">
                <div className="flex flex-col max-w-[323.59px]">
                  <div className="text-[20px] font-bold text-[#FDC040]">
                    Summer Deals
                  </div>
                  <div className="font-bold text-[40px]">
                    Makanan Sehat Untuk Keluarga
                  </div>
                  <div className="text-[18px] text-[#7E7E7E]">
                    Dapatkan Diskon 35% untuk item tertentu
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 w-full h-[220px]">
                  <img
                    src={require("../../assets/images/yogurt.png")}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div>
                <div className="bg-[#F5F5F5] px-[33px] py-[23px] rounded-[15px]">
                  <div className="flex justify-between items-center max-[769px]:flex-col max-[769px]:items-start">
                    <div className="text-[16px]">
                      We found <span className="text-[#3BB77E]">688</span> items
                      for you!
                    </div>
                    <div className="flex max-[769px]:flex-col max-[769px]:items-start max-[769px]:gap-[10px] max-[769px]:mt-[10px] gap-[18px]  ">
                      <div className="text-[16px] flex items-center gap-[5px]">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="#FF5733"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_130_8049)">
                              <path
                                d="M7.33333 7.33333H0V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L7.33333 0V7.33333ZM1.33333 6H6V1.33333H2C1.82319 1.33333 1.65362 1.40357 1.5286 1.5286C1.40357 1.65362 1.33333 1.82319 1.33333 2V6Z"
                                fill="#7E7E7E"
                              />
                              <path
                                d="M16 7.33333H8.66666V0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V7.33333ZM9.99999 6H14.6667V2C14.6667 1.82319 14.5964 1.65362 14.4714 1.5286C14.3464 1.40357 14.1768 1.33333 14 1.33333H9.99999V6Z"
                                fill="#7E7E7E"
                              />
                              <path
                                d="M7.33333 16H2C1.46957 16 0.960859 15.7892 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14L0 8.66663H7.33333V16ZM1.33333 9.99996V14C1.33333 14.1768 1.40357 14.3463 1.5286 14.4714C1.65362 14.5964 1.82319 14.6666 2 14.6666H6V9.99996H1.33333Z"
                                fill="#7E7E7E"
                              />
                              <path
                                d="M14 16H8.66666V8.66663H16V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7892 14.5304 16 14 16ZM9.99999 14.6666H14C14.1768 14.6666 14.3464 14.5964 14.4714 14.4714C14.5964 14.3463 14.6667 14.1768 14.6667 14V9.99996H9.99999V14.6666Z"
                                fill="#7E7E7E"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_130_8049">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        Tampilkan: 50
                        <span>
                          <ArrowDown color="#B6B6B6" />
                        </span>
                      </div>
                      <div className="text-[16px] flex items-center gap-[5px]">
                        <span>
                          <Sort color="#7E7E7E" />
                        </span>
                        Urutkan: Terlaris
                        <span>
                          <ArrowDown color="#B6B6B6" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[32.48px] gap-[24px]">
                  <div className="grid grid-cols-3 max-[1175px]:grid-cols-2 max-[342px]:grid-cols-1 gap-[24px] max-[1175px]:gap-2">
                    <div className="">
                      <div className="h-[409.92px]  ">
                        <img
                          className="object-cover w-full h-full rounded-[20px]"
                          src={require("../../assets/images/promo1.png")}
                          alt=""
                        />
                      </div>

                      <div className="w-full px-[31px] rounded-sm bg-transparent min-[1433px]:block mt-[-136px] max-[1445px]:mt-[-200px] max-[1432px]:hidden ml-auto mr-auto z-[999] relative">
                        <div className="grid min-[1433px]:grid-cols-4 max-[1432px]:grid-rows-4 gap-2">
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
                      <div className="rounded-[10px] w-[90%] max-[524px]:w-full bg-white shadow-md ml-auto mr-auto z-[999] min-[1433px]:mt-[10px] max-[1432px]:mt-[-250px] relative pt-[24px] ps-[32px] pe-[24px] max-[524px]:px-[10px] mt-[11.92px] max-[546px]:mt-[-200px] ">
                        <div>
                          <div className="w-full rounded-sm bg-transparent min-[1433px]:hidden max-[1432px]:block">
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
                        <div className="text-[16px] font-bold h-[42px] overflow-hidden overflow-ellipsis max-[1432px]:mt-2 ">
                          Seeds of Change Organic Quinoa, Brown, & Red Rice
                        </div>
                        <div className="mt-2">
                          <img
                            src={require("../../assets/images/rating.png")}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] pt-[4px] text-[#7E7E7E]">
                          500 gram
                        </div>
                        <div className="flex items-center max-[1444px]:flex-col max-[1444px]:items-start gap-2 mt-[3.14px] justify-between pb-[19.86px]">
                          <div className="flex flex-col">
                            <div className="text-[10px] relative w-fit line-through">
                              Rp. 28.0000
                            </div>
                            <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                              <div className="font-bold">Rp. 25.000.000</div>
                            </div>
                          </div>
                          <div className="max-[1444px]:w-full">
                            <button className="flex max-[1444px]:w-full max-[1444px]:justify-center items-center p-3 bg-[#DEF9EC] text-[#3BB77E] font-bold rounded-[4px] ">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                    <div className="flex flex-col border p-[27px] max-[524px]:p-[10px] relative rounded-[20px]">
                      <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                        <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                          sale
                        </div>
                      </div>
                      <div className="h-[202px] flex justify-center ">
                        <img
                          src={require("../../assets/images/mangga.png")}
                          alt=""
                          className="object-fill h-full"
                        />
                      </div>
                      <div className="text-[12px] text-[#3BB77E] mt-[31px]">
                        Buah
                      </div>
                      <div className="text-[16px] mt-[10px] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti assumenda veniam doloremque quos quod et
                        aspernatur, esse accusamus iusto minima animi
                        voluptatibus nihil facilis excepturi sit quaerat vero
                        ducimus incidunt! lore
                      </div>

                      <div className="mt-[10px]">
                        <img
                          src={require("../../assets/images/rating.png")}
                          alt=""
                        />
                      </div>
                      <div className="text-[12px] text-[#7E7E7E] mt-[10px] ">
                        500 gram
                      </div>

                      <div className="flex justify-between max-[546px]:flex-col gap-2 mt-[16.66px]">
                        <div className="flex flex-col">
                          <div className="text-[12px] w-fit line-through">
                            Rp. 28.0000
                          </div>
                          <div className="text-[20px] max-[468px]:text-[14px] text-[#3BB77E] font-bold">
                            Rp. 25.000.000
                          </div>
                        </div>

                        <div className="max-[546px]:w-full">
                          <button className="flex max-[1279px]:w-full max-[1279px]:justify-center  items-center p-[9px] bg-[#DEF9EC] text-[#3BB77E] font-bold">
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
                <div className="flex justify-end mt-[32.46px]">
                  <Pagination count={10} size="small" />
                </div>
              </div>
            </div>
          </div>
          <div className="ps-[78.21px] max-[866px]:px-5 py-[72.87px] mt-[78.24px] bg-[#d8f1e5] relative ">
            <div className="w-[690.2PX] max-[866px]:w-full">
              <div className="text-[40px] font-bold">
                Diskon spesial untuk pelanggan baru, Ayo buruan daftar!
              </div>
              <div className="mt-[32.2px] text-[18px] text-[#2B3D34] w-[371.44px] max-[866px]:w-full">
                daftarkan email anda sekarang, kupon diskon akan dikirimkan ke
                email anda
              </div>
              <div className="mt-[10px]">
                <div className="flex items-center max-[409px]:flex-col max-[409px]:items-start max-[409px]:gap-2">
                  <div className="relative z-10 max-[409px]:w-full">
                    <input
                      className="w-full rounded-[30px] border-0 text-[12px] font-[400] ps-[57px] pe-[148px] max-[409px]:pe-5 max-[735px]:py-[5px] max-[735px]:pe-[100px] "
                      type="text"
                      placeholder="email anda disini"
                    />
                    <div className="absolute left-[22px] top-[12px]">
                      <img
                        src={require("../../assets/images/paperPlane.png")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="z-20 max-[409px]:ms-0 max-[409px]:w-full ms-[-80px] bg-[#3BB77E] rounded-[30px] text-[16px] max-[735px]:text-[12px] py-[8px] px-[36px] max-[735px]:px-[20px] text-white font-bold">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 max-[1408px]:hidden">
              <img src={require("../../assets/images/fresh.png")} alt="" />
            </div>
          </div>
        </div>
      </NavbarComponent>
      <Footer className="mt-10" />
    </div>
  );
};

export default CategoryShop;
