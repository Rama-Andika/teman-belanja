import { Navbar } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import wishlist from "../assets/images/wishlist.png";
import akun from "../assets/images/akun.png";
import bandingkan from "../assets/images/bandingkan.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Select from "react-select";

const options = [
  { value: 0, label: "Makanan & minuman", key: 1 },
  { value: 1, label: "Beras", key: 2 },
];
const NavbarComponent = ({ children }) => {
  let items = 200;
  const { screenSize, setScreenSize, setActive } = useStateContext();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onSubmitSearch = (e) => {
    e.preventDefault();
    navigate(`/search?keyword=${search}`);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickHamburger = () => {
    setActive((prev) => !prev);
  };

  const customeStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "white",
      height: "10px",
      fontSize: "14px",
      borderRadius: "0.125rem",
      whiteSpace: "nowrap",
      border: state.isFocused ? "1px solid #BCE3C9" : "",
      outline: state.isFocused && "1px solid #BCE3C9",
      "&:hover": {
        border: "1px solid #BCE3C9",
      },
    }),
    input: (baseStyles, state) => ({
      ...baseStyles,
      color: "black",
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "white",
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      fontSize: "14px",
      backgroundColor: state.isSelected
        ? "#52b788"
        : state.isFocused && "#BCE3C9",
    }),
  };

  return (
    <>
      <div className="font-quicksand" onClick={() => open && setOpen(false)}>
        <div className="relative">
          <Navbar fluid rounded className="bg-transparent min-[920px]:mx-16">
            <div className="flex items-center">
              <div
                className="w-[62.69px] h-[72.84px]"
                style={{ backgroundImage: `url(${logo}` }}
              ></div>
              <div className="ms-[-10px]">
                <Link to="/">
                  <div className="flex gap-0 flex-col text-[#3BB77E] items-start justify-center">
                    <div className="text-[20px] font-bold mt-[5px] tracking-[1px]">
                      RUANG
                    </div>
                    <div className="text-[20px] font-bold mt-[-10px] tracking-[1px]">
                      BELANJA
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative w-[500px] max-[1025px]:hidden min-[1300px]:w-[400px] min-[1400px]:w-[520px] min-[1484px]:w-[620px] ">
              <button
                type="button"
                onClick={onSubmitSearch}
                className="absolute top-[0.20rem] right-[0.13rem] py-2 px-3"
              >
                <AiOutlineSearch className="text-sm " />
              </button>
              <div className="flex items-center justify-center">
                <div className="w-[30%]">
                  <Select
                    components={{
                      DropdownIndicator: () => null,
                      IndicatorSeparator: () => null,
                    }}
                    options={options}
                    noOptionsMessage={() => "Data not found"}
                    styles={customeStyles}
                    placeholder="Semua Kategori"
                    required
                  />
                </div>
                <div className="w-full">
                  <form onSubmit={onSubmitSearch} className="forma">
                    <input
                      className="text-slate-900 ps-[20px] rounded-sm border border-slate-300 w-full h-[38px] text-sm focus:border-[#BCE3C9]"
                      type="text"
                      placeholder="Cari produk"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>

            {screenSize > 1274 ? (
              <div className="flex gap-[20px] items-center">
                <div className="relative">
                  <div
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex md:order-2 gap-2 cursor-pointer"
                  >
                    <div className="text-xl max-[768px]:mt-2">
                      <div className="relative ">
                        <div className="flex items-center gap-1">
                          <div className="w-[15px]">
                            <img src={akun} alt="" />
                          </div>
                          <div className="text-[12px]">Akun</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {open && (
                    <div
                      className={`absolute top-[40px] ${
                        screenSize <= 919 ? "right-0" : "right-[-40px]"
                      }  z-50`}
                    >
                      <div className="bg-white shadow-lg py-[20px] px-[9.5px] rounded-sm border border-[#BCE3C9]">
                        <div className="pt-[5px] px-[9.5px]">
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img src={akun} alt="" />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Profile
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img
                                      src={require("../assets/images/location.png")}
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Lacak Pesanan
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img
                                      src={require("../assets/images/voucher.png")}
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Voucher
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img
                                      src={require("../assets/images/wishlist.png")}
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Wishlist
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img
                                      src={require("../assets/images/setting.png")}
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Setting
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img
                                      src={require("../assets/images/logout.png")}
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Logout
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex md:order-2 gap-2">
                  <div className="text-xl max-[768px]:mt-2">
                    <div className="relative ">
                      <Link to="/keranjang">
                        <div className="flex items-center gap-1">
                          <div className="w-[15px]">
                            <img src={bandingkan} alt="" />
                          </div>
                          <div className="text-[12px]">Bandingkan</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex md:order-2 gap-2">
                  <div className="text-xl max-[768px]:mt-2">
                    <div className="relative ">
                      <Link to="/keranjang">
                        <div className="flex items-center gap-1">
                          <div className="w-[15px]">
                            <img src={wishlist} alt="" />
                          </div>
                          <div className="text-[12px]">Wishlist</div>
                        </div>
                        <div className="absolute flex justify-center items-center text-[10px] top-[-10px] left-2 bg-[#3BB77E] text-white rounded-full w-6 h-6 pt-[0.08rem] px-1 overflow-ellipsis overflow-hidden">
                          {items > 99 ? "99+" : items}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex md:order-2 gap-2">
                  <div className="text-xl max-[768px]:mt-2">
                    <div className="relative">
                      <Link to="/keranjang">
                        <div className="flex items-center gap-1">
                          <SlBasket className="text-[15px]" />
                          <div className="text-[12px]">Keranjang</div>
                        </div>
                        <div className="absolute flex justify-center items-center text-[12px] top-[-10px] left-3 bg-[#3BB77E] text-white rounded-full w-6 h-6 pt-[0.08rem] px-1 overflow-ellipsis overflow-hidden">
                          {items > 99 ? "99+" : items}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <div className="relative">
                  <div
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex md:order-2 gap-2 cursor-pointer"
                  >
                    <div className="text-xl max-[768px]:mt-2">
                      <div className="flex items-center gap-1">
                        <div className="w-[15px]">
                          <img src={akun} alt="" />
                        </div>
                        <div className="text-[12px]">Akun</div>
                      </div>
                    </div>
                  </div>
                  {open && (
                    <div
                      className={`absolute top-[40px] ${
                        screenSize <= 919 ? "right-0" : "right-[-40px]"
                      }  z-50`}
                    >
                      <div className="bg-white shadow-lg py-[20px] px-[9.5px] rounded-sm border border-[#BCE3C9]">
                        <div className="pt-[5px] px-[9.5px]">
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img src={akun} alt="" />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Profile
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img
                                      src={require("../assets/images/location.png")}
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Lacak Pesanan
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img
                                      src={require("../assets/images/voucher.png")}
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Voucher
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img
                                      src={require("../assets/images/wishlist.png")}
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Wishlist
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img
                                      src={require("../assets/images/setting.png")}
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Setting
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="text-xl max-[768px]:mt-2 border border-[#F2F3F4] py-1 ps-1 pe-5">
                            <div className="relative ">
                              <Link to="/keranjang">
                                <div className="flex items-center gap-3">
                                  <div className="w-[15px]">
                                    <img
                                      src={require("../assets/images/logout.png")}
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-[12px] whitespace-nowrap">
                                    Logout
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <div
                    onClick={onClickHamburger}
                    className="flex flex-col md:order-2 gap-2 cursor-pointer"
                  >
                    <div className="text-xl max-[768px]:mt-2">
                      <div className="relative ">
                        <div className="flex items-center">
                          <div className="w-[15px]">
                            <GiHamburgerMenu className="w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="relative max-[573px]:hidden min-[574px]:block min-[1025px]:hidden w-full mt-3 shadow-lg">
              <button
                type="button"
                onClick={onSubmitSearch}
                className="absolute top-[0.20rem] right-[0.13rem] py-2 px-3"
              >
                <AiOutlineSearch className="text-sm " />
              </button>
              <div className="flex items-center">
                <div className="w-[30%]">
                  <Select
                    components={{
                      DropdownIndicator: () => null,
                      IndicatorSeparator: () => null,
                    }}
                    options={options}
                    noOptionsMessage={() => "Data not found"}
                    styles={customeStyles}
                    placeholder="Semua Kategori"
                    required
                  />
                </div>
                <div className="w-full">
                  <form onSubmit={onSubmitSearch} className="forma">
                    <input
                      className="text-slate-900 ps-[20px] rounded-sm border border-slate-300 w-full h-[38px] text-sm"
                      type="text"
                      placeholder="Cari produk"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>
          </Navbar>

          <hr className="mt-[38.42px]" />
          <div className="flex items-center justify-between min-[920px]:mx-16 pt-[16.48px] pb-[16.48px] max-[1275px]:hidden">
            <div className="flex items-center gap-[22.84px] text-[12px]">
              <div className="relative flex items-center justify-between rounded-md bg-[#3BB77E] text-white py-[13.75px] ps-[18.7px] pe-[115px]">
                <div className="flex items-center gap-[9.19px]">
                  <div className="w-[12px]">
                    <img
                      src={require("../assets/images/kategori.png")}
                      alt=""
                    />
                  </div>
                  <div className="font-bold leading-[20px]">
                    Kategori
                  </div>
                </div>
                <div className="absolute right-[18.51px] w-[12px]">
                  <img src={require("../assets/images/arrowDown.png")} alt="" />
                </div>
              </div>
              <div className="flex items-center gap-[8.25px]">
                <div className="w-[12px]">
                  
                </div>
                <div className="font-bold leading-[20px]">
                  Promo Hari Ini
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[40px] max-[1343px]:gap-[20px] font-bold text-[12px] leading-[20px]">
              <div className="">Home</div>
              <div className="flex items-center gap-1">
                <div>Sembako</div>
                <div className="w-[12px]">
                  <img
                    src={require("../assets/images/arrowDownBlack.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>Makanan</div>
                <div className="w-[12px]">
                  <img
                    src={require("../assets/images/arrowDownBlack.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>Minuman</div>
                <div className="w-[12px]">
                  <img
                    src={require("../assets/images/arrowDownBlack.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>Peralatan</div>
                <div className="w-[12px]">
                  <img
                    src={require("../assets/images/arrowDownBlack.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>Lainnya</div>
                <div className="w-[12px]">
                  <img
                    src={require("../assets/images/arrowDownBlack.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[13.01px]">
              <div className="">
                <img src={require("../assets/images/support.png")} alt="" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-[20px] leading-[28px] text-[#3BB77E]">
                  08123456789
                </div>
                <div className="font-[400] text-[8px] leading-[14px]">
                  24/7 Support Center
                </div>
              </div>
            </div>
          </div>
          <hr className="" />
        </div>

        <div className="max-[919px]:mx-3 min-[920px]:mx-16 z-0">{children}</div>
      </div>
    </>
  );
};

export default NavbarComponent;
