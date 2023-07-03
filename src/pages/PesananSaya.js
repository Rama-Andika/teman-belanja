/* eslint-disable react-hooks/exhaustive-deps */

import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";

import User from "../assets/images/user.png";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import { Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import ImagePesanan from "../assets/images/pesananImage.jpeg";

function TabPanel(props) {
  const { children, value, index, text, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const PesananSaya = () => {
  const { image, setImage } = useStateContext();
  const location = useLocation();
  const path = location.pathname.split("/");

  const [value, setValue] = useState(0);
  const { screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#fa5a96",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });

  useEffect(() => {
    if (image === undefined) {
      setImage(User);
    }
  }, []);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  //   useEffect(()=>{
  //     console.log(path[2]==="profile")

  //   },[])
  return (
    <div className="font-roboto">
      <NavbarComponent>
        <div className="mt-5">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 min-[1233px]:col-span-2">
              <div className="min-[1233px]:hidden">
                <Dropdown
                  inline
                  label={
                    <div className="flex justify-start items-center gap-2">
                      <div
                        className="rounded-full w-[50px] h-[50px] bg-center bg-cover"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      ></div>
                      <div className=" text-[14px]">
                        <div className="font-bold">Budi Santoso</div>
                      </div>
                    </div>
                  }
                >
                  <Link to="/account/profile">
                    <Dropdown.Item>
                      <div
                        className={
                          path[2] === "profile" ? "text-[#fa5a96]" : undefined
                        }
                      >
                        Profil
                      </div>
                    </Dropdown.Item>
                  </Link>

                  <Dropdown.Item>
                    <Link to="/account/address">
                      <div
                        className={
                          path[2] === "address" ? "text-[#fa5a96]" : undefined
                        }
                      >
                        Alamat
                      </div>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/user/purchase">
                      <div
                        className={
                          path[2] === "purchase" ? "text-[#fa5a96]" : undefined
                        }
                      >
                        Pesanan Saya
                      </div>
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </div>

              <div className="hidden flex-col min-[1233px]:flex">
                <div className="flex justify-start items-center gap-2">
                  <div
                    className="rounded-full w-[50px] h-[50px] bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  ></div>
                  <div className=" text-[14px]">
                    <div className="font-bold">Budi Santoso</div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[15px] mb-2 mt-10">
                    Akun Saya
                  </div>
                  <div className="ps-2 flex flex-col text-[13px] gap-2">
                    <Link to="/account/profile">
                      <div
                        className={
                          path[2] === "profile" ? "text-[#fa5a96]" : undefined
                        }
                      >
                        Profil
                      </div>
                    </Link>

                    <Link to="/account/address">
                      <div
                        className={
                          path[2] === "address" ? "text-[#fa5a96]" : undefined
                        }
                      >
                        Alamat
                      </div>
                    </Link>
                  </div>
                </div>
                <div>
                  <Link to="/user/purchase">
                    <div
                      className={`font-bold text-[15px] mb-2 mt-2 ${
                        path[2] === "purchase" ? "text-[#fa5a96]" : undefined
                      } `}
                    >
                      Pesanan Saya
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 min-[1233px]:col-span-10">
              <ThemeProvider theme={theme}>
                {screenSize >= 812 ? (
                  <div className="">
                    <Tabs
                      className="bg-white"
                      value={value}
                      onChange={handleChange}
                      textColor="primary"
                      indicatorColor="primary"
                      variant="fullWidth"
                      aria-label="full width tabs example"
                    >
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Semua"
                        {...a11yProps(0)}
                      />
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Belum Bayar"
                        {...a11yProps(1)}
                      />
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Sedang Dikemas"
                        {...a11yProps(2)}
                      />
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Dikirim"
                        {...a11yProps(2)}
                      />
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Selesai"
                        {...a11yProps(2)}
                      />
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Dibatalkan"
                        {...a11yProps(2)}
                      />
                    </Tabs>
                  </div>
                ) : (
                  <>
                    <Tabs
                      className="bg-white"
                      value={value}
                      onChange={handleChange}
                      textColor="primary"
                      indicatorColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="full width tabs example"
                    >
                      <Tab
                        className="border-r-4"
                        label="Semua"
                        {...a11yProps(0)}
                      />
                      <Tab label="Belum Bayar" {...a11yProps(1)} />
                      <Tab label="Sedang Dikemas" {...a11yProps(2)} />
                      <Tab label="Dikirim" {...a11yProps(2)} />
                      <Tab label="Selesai" {...a11yProps(2)} />
                      <Tab label="Dibatalkan" {...a11yProps(2)} />
                    </Tabs>
                  </>
                )}
              </ThemeProvider>
              <TabPanel value={value} index={0}>
                <div className="bg-white p-5">
                  <div
                    className={`flex pt-5 ${
                      screenSize <= 634
                        ? "flex-col gap-2"
                        : "flex-row justify-between items-center"
                    }`}
                  >
                    <div className="flex gap-2">
                      <div
                        style={{ backgroundImage: `url(${ImagePesanan})` }}
                        className="w-[80px] h-[80px] bg-center bg-cover"
                      ></div>
                      <div className="flex flex-col items-end">
                        <div className="w-[200px] min-[470px]:w-[300px] overflow-ellipsis overflow-hidden max-[470px]:text-[12px]">
                          Cosrx Low pH Good Morning gel Cleanser
                        </div>
                        <div className="w-full overflow-ellipsis overflow-hidden">
                          x1
                        </div>
                      </div>
                    </div>
                    <div className="text-[14px]">Rp.10.000.000</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="flex gap-2 items-center">
                      <div className="text-[14px]">Total Pesanan</div>
                      <div className="text-[14px]">:</div>
                      <div className="text-[24px] text-[#fa5a96]">
                        Rp. 10.000.000
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-5">
                    <div>
                      <button className="bg-[#fa5a96] py-[8px] px-[10px] text-white rounded-sm shadow-sm">
                        Pesanan Diterima
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white mt-2 p-5">
                  <div
                    className={`flex pt-5 ${
                      screenSize <= 634
                        ? "flex-col gap-2"
                        : "flex-row justify-between items-center"
                    }`}
                  >
                    <div
                      className="flex gap-2"
                    >
                      <div
                        style={{ backgroundImage: `url(${ImagePesanan})` }}
                        className="w-[80px] h-[80px] bg-center bg-cover"
                      ></div>
                      <div className="flex flex-col items-end">
                        <div className="w-[200px] min-[470px]:w-[300px] overflow-ellipsis overflow-hidden max-[470px]:text-[12px]">
                          Cosrx Low pH Good Morning gel Cleanserffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        </div>
                        <div className="w-full overflow-ellipsis overflow-hidden">
                          x1
                        </div>
                      </div>
                    </div>
                    <div className="text-[14px]">Rp.10.000.000</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="flex gap-2 items-center">
                      <div className="text-[14px]">Total Pesanan</div>
                      <div className="text-[14px]">:</div>
                      <div className="text-[24px] text-[#fa5a96]">
                        Rp. 10.000.000
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-5">
                    <div>
                      <button className="bg-[#fa5a96] py-[8px] px-[10px] text-white rounded-sm shadow-sm">
                        Pesanan Diterima
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </NavbarComponent>
      <Footer className="mt-10 border-t-4 border-[#fa5a96]" />
    </div>
  );
};

export default PesananSaya;
