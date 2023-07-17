import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import { useEffect, useState } from "react";
import { Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
import { useStateContext } from "../contexts/ContextProvider";
import { Dropdown } from "flowbite-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Rating } from "react-simple-star-rating";
import P1 from "../assets/images/p1.jpeg";

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

const ProductBySearch = () => {
  const { screenSize, setScreenSize } = useStateContext();
  const [search, setSearch] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const arrayCategory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };
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
    window.scrollTo(0, 0);
    setSearch(location.search.split("=")[1]);
  }, [location]);
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NavbarComponent>
        <div className="mt-5 font-roboto">
          {search !== "" ? (
            <>
              {screenSize >= 1100 ? (
                <div className="grid grid-cols-12 justify-center items-start">
                  <div className="col-span-2"></div>
                  <div className="col-span-10">
                    <div>Pencarian berkaitan dengan : {search} </div>
                  </div>
                </div>
              ) : (
                <div>Pencarian berkaitan dengan : {search} </div>
              )}
              <div className={`${screenSize >= 1100 ? "block" : "hidden"}`}>
                <div className="grid grid-cols-12 justify-center items-start mt-5">
                  <div className="col-span-2 mt-3">
                    <div className="flex items-center gap-1">
                      <div>
                        <GiHamburgerMenu />
                      </div>
                      <div className="font-bold">Semua Kategori</div>
                    </div>

                    <div className="text-[14px] flex flex-col mt-5 gap-2 font-semibold">
                      <div className="w-full overflow-ellipsis overflow-hidden">
                        Komputer & Aksesoris
                      </div>
                      <div className="w-full overflow-ellipsis overflow-hidden">
                        Desktop
                      </div>
                      <div className="w-full overflow-ellipsis overflow-hidden">
                        Monitor
                      </div>
                      <div className="w-full overflow-ellipsis overflow-hidden">
                        Komponen Dekstop & Laptop
                      </div>
                      <div className="w-full overflow-ellipsis overflow-hidden">
                        Penyimpanan Data
                      </div>
                      <div className="w-full overflow-ellipsis overflow-hidden">
                        Komponen Network
                      </div>
                      <div className="w-full overflow-ellipsis overflow-hidden">
                        Software
                      </div>

                      <div className="w-full overflow-ellipsis overflow-hidden text-[16px] mt-2">
                        Batas Harga
                      </div>
                      <div className="flex gap-2 justify-between items-center pe-5 h-[20px] mt-5">
                        <div>
                          <input
                            type="number"
                            placeholder="Rp.MIN"
                            className="w-full text-[12px] h-full border border-slate-300"
                          />
                        </div>
                        <div className="text-center text-[20px] text-slate-400">
                          -
                        </div>
                        <div>
                          <input
                            type="number"
                            placeholder="Rp.MAX"
                            className="w-full text-[12px] h-full border border-slate-300"
                          />
                        </div>
                      </div>
                      <div className="w-full overflow-ellipsis overflow-hidden text-[14px] mt-2 text-white pe-5">
                        <button
                          type="button"
                          className="bg-[#fa5a96] px-4 py-1 w-full rounded-sm shadow-sm"
                        >
                          TERAPKAN
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-10">
                    <ThemeProvider theme={theme}>
                      {screenSize >= 812 ? (
                        <div className="grid grid-cols-12">
                          <div className="col-span-10">
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
                                disabled
                                label="Urutkan"
                                {...a11yProps(0)}
                              />
                              <Tab
                                sx={{
                                  width: "10em",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                }}
                                label="Terkait"
                                {...a11yProps(1)}
                              />
                              <Tab
                                sx={{
                                  width: "10em",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                }}
                                label="Terbaru"
                                {...a11yProps(2)}
                              />
                              <Tab
                                sx={{
                                  width: "10em",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                }}
                                label="Terlaris"
                                {...a11yProps(2)}
                              />
                            </Tabs>
                          </div>

                          <div className="col-span-2">
                            <Dropdown label="Lainnya" class="btn-lainnya">
                              <div className="grid grid-cols-2">
                                <div>
                                  <Dropdown.Item>ABC</Dropdown.Item>
                                  <Dropdown.Item>Nescafe</Dropdown.Item>
                                </div>
                                <div>
                                  <Dropdown.Item>Sampoerna</Dropdown.Item>
                                  <Dropdown.Item>Mie</Dropdown.Item>
                                </div>
                              </div>
                            </Dropdown>
                          </div>
                        </div>
                      ) : (
                        <Tabs
                          className="bg-white whitespace-nowrap"
                          value={value}
                          onChange={handleChange}
                          textColor="primary"
                          indicatorColor="primary"
                          variant="scrollable"
                          scrollButtons="auto"
                          aria-label="full width tabs example"
                        >
                          <Tab disabled label="Urutkan" {...a11yProps(0)} />
                          <Tab label="Terkait" {...a11yProps(1)} />
                          <Tab label="Terbaru" {...a11yProps(2)} />
                        </Tabs>
                      )}
                    </ThemeProvider>
                    <TabPanel value={value} index={0}>
                      <div className="grid grid-cols-1 mt-5">
                        <div className="relative">
                          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 min-[1170px]:grid-cols-5 gap-1 ">
                            {arrayCategory.map((i) => (
                              <Link
                                key={i}
                                to="/product-detail/nescafe-coffee/4"
                              >
                                <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white h-[283.65px] w-auto flex flex-col items-center">
                                  <img
                                    alt=""
                                    src={unsplashimg.src}
                                    className="min-[640px]:h-[190.05px] min-[640px]:w-[190.05px] object-cover "
                                  />
                                  <div className="w-full p-3 text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
                                    Nescafe Coffee
                                  </div>
                                  <div className="w-full p-3 mt-5 font-bold text-[#fa5a96] max-[434px]:text-sm whitespace-nowrap overflow-ellipsis overflow-hidden">
                                    Rp. 10.000.000
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <div className="grid grid-cols-1 mt-5">
                        <div className="relative">
                          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 max-[375px]:grid-cols-1 gap-1 ">
                            {arrayCategory.map((i) => (
                              <Link
                                key={i}
                                to="/product-detail/nescafe-coffee/4"
                              >
                                <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white w-auto flex flex-col items-center">
                                  <img
                                    alt=""
                                    src={unsplashimg.src}
                                    className="w-full object-cover h-[188px]"
                                  />
                                  <div className="w-full p-3 text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
                                    Nescafe Coffee
                                  </div>
                                  <div className="w-full px-3 mt-3 font-bold text-[#fa5a96] max-[434px]:text-sm whitespace-nowrap overflow-ellipsis overflow-hidden">
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

                                    <div className="text-slate-500 mt-1">
                                      100 Terjual
                                    </div>
                                  </div>
                                  <div className="w-full p-3 text-[#000000A6] text-[12px] whitespace-nowrap overflow-ellipsis overflow-hidden">
                                    KOTA DENPASAR
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </div>
              <div className={`${screenSize < 1100 ? "block" : "hidden"}`}>
                <div className="grid grid-cols-1 justify-center items-start mt-5">
                  <div className="">
                    <ThemeProvider theme={theme}>
                      {screenSize >= 812 ? (
                        <div className="grid grid-cols-12">
                          <div className="col-span-10">
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
                                disabled
                                label="Urutkan"
                                {...a11yProps(0)}
                              />
                              <Tab
                                sx={{
                                  width: "10em",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                }}
                                label="Terkait"
                                {...a11yProps(1)}
                              />
                              <Tab
                                sx={{
                                  width: "10em",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                }}
                                label="Terbaru"
                                {...a11yProps(2)}
                              />
                              <Tab
                                sx={{
                                  width: "10em",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                }}
                                label="Terlaris"
                                {...a11yProps(2)}
                              />
                            </Tabs>
                          </div>

                          <div className="col-span-2">
                            <Dropdown label="Lainnya" class="btn-lainnya">
                              <div className="grid grid-cols-2">
                                <div>
                                  <Dropdown.Item>ABC</Dropdown.Item>
                                  <Dropdown.Item>Nescafe</Dropdown.Item>
                                </div>
                                <div>
                                  <Dropdown.Item>Sampoerna</Dropdown.Item>
                                  <Dropdown.Item>Mie</Dropdown.Item>
                                </div>
                              </div>
                            </Dropdown>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Tabs
                            className="bg-white whitespace-nowrap"
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="full width tabs example"
                          >
                            <Tab disabled label="Urutkan" {...a11yProps(0)} />
                            <Tab label="Terkait" {...a11yProps(1)} />
                            <Tab label="Terbaru" {...a11yProps(2)} />
                          </Tabs>
                          <div className="mt-2">
                            <Dropdown label="Lainnya" class="btn-lainnya">
                              <div className="grid grid-cols-2">
                                <div>
                                  <Dropdown.Item>ABC</Dropdown.Item>
                                  <Dropdown.Item>Nescafe</Dropdown.Item>
                                </div>
                                <div>
                                  <Dropdown.Item>Sampoerna</Dropdown.Item>
                                  <Dropdown.Item>Mie</Dropdown.Item>
                                </div>
                              </div>
                            </Dropdown>
                          </div>
                        </>
                      )}
                    </ThemeProvider>
                    <TabPanel value={value} index={0}>
                      <div className="grid grid-cols-1 mt-5">
                        <div className="relative">
                          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 min-[1170px]:grid-cols-5 gap-1 ">
                            {arrayCategory.map((i) => (
                              <Link
                                key={i}
                                to="/product-detail/nescafe-coffee/4"
                              >
                                <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white h-[283.65px] w-auto flex flex-col items-center">
                                  <img
                                    alt=""
                                    src={P1}
                                    className="min-[640px]:h-[190.05px] min-[640px]:w-[190.05px] object-cover "
                                  />
                                  <div className="w-full p-3 text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
                                    Nescafe Coffee
                                  </div>
                                  <div className="w-full p-3 mt-5 font-bold text-[#fa5a96] max-[434px]:text-sm whitespace-nowrap overflow-ellipsis overflow-hidden">
                                    Rp. 10.000.000
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <div className="grid grid-cols-1 mt-5">
                        <div className="relative">
                          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 max-[375px]:grid-cols-1  gap-1 ">
                            {arrayCategory.map((i) => (
                              <Link
                                key={i}
                                to="/product-detail/nescafe-coffee/4"
                              >
                                <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white w-auto flex flex-col items-center">
                                  <img
                                    alt=""
                                    src={unsplashimg.src}
                                    className="w-full object-cover h-[188px]"
                                  />
                                  <div className="w-full p-3 text-left max-[434px]:text-sm overflow-ellipsis overflow-hidden">
                                    Nescafe Coffee
                                  </div>
                                  <div className="w-full px-3 mt-3 font-bold text-[#fa5a96] max-[434px]:text-sm whitespace-nowrap overflow-ellipsis overflow-hidden">
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

                                    <div className="text-slate-500 mt-1">
                                      100 Terjual
                                    </div>
                                  </div>
                                  <div className="w-full p-3 text-[#000000A6] text-[12px] whitespace-nowrap overflow-ellipsis overflow-hidden">
                                    KOTA DENPASAR
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                  
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-20">BARANG TIDAK DITEMUKAN</div>
          )}
        </div>
      </NavbarComponent>
      <Footer className="mt-10 border-t-4 border-[#fa5a96]" />
    </>
  );
};

export default ProductBySearch;
