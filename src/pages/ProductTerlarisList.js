import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import { useEffect, useState } from "react";
import { Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
import { useStateContext } from "../contexts/ContextProvider";
import { Dropdown } from "flowbite-react";
import { Rating } from "react-simple-star-rating";

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

const ProductTerlarisList = () => {
  const { screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const arrayCategory = [1, 2, 3, 4, 5, 6];

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
  }, []);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NavbarComponent>
        <div className="mt-5 font-roboto">
          <div className="mb-5 flex justify-center">
            <button className="px-[18px] py-[20px] rounded-lg shadow-sm text-[20px] text-slate-500">
              PRODUK TERLARIS
            </button>
          </div>
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
                        label="Nescafe Coffee"
                        {...a11yProps(0)}
                      />
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Kopi ABC"
                        {...a11yProps(1)}
                      />
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Sampoerna Mild"
                        {...a11yProps(2)}
                      />
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Pop Ice"
                        {...a11yProps(2)}
                      />
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Beras 10 kg"
                        {...a11yProps(2)}
                      />
                      <Tab
                        sx={{
                          width: "10em",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        label="Beras 5 kg"
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
                      label="Nescafe Coffee"
                      {...a11yProps(0)}
                    />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(2)} />
                    <Tab label="Item Five" {...a11yProps(2)} />
                    <Tab label="Item Size" {...a11yProps(2)} />
                  </Tabs>
                  <div className="mt-5">
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
          </div>

          <TabPanel value={value} index={0}>
            <div className="grid grid-cols-1 mt-5">
              <div className="relative">
                <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  grid-cols-2 max-[375px]:grid-cols-1  gap-1 ">
                  {arrayCategory.map((i) => (
                    <>
                      {i <= 6 && (
                        <Link key={i} to="/product-detail/nescafe-coffee/4">
                          <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] relative bg-white w-auto flex flex-col items-center">
                            <img
                              alt=""
                              src={require(`../assets/images/terlaris${i}.jpeg`)}
                              className="w-full h-[230.4px] object-cover "
                            />
                            <div className="absolute text-[12px] top-0 left-0 p-2 text-white bg-orange-400 rounded-sm">
                              TOP
                            </div>
                            <div className="w-full px-3 max-[434px]:text-sm overflow-ellipsis overflow-hidden text-[18px]">
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
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>

          {/* <div className="hidden relative">
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 min-[1170px]:grid-cols-5 gap-1 ">
              {arrayCategory.map((i) => (
                <Link key={i} to="/product-detail/nescafe-coffee/4">
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
          </div> */}
        </div>
      </NavbarComponent>
      <Footer className=" mt-10 border-t-4 border-[#fa5a96]" />
    </>
  );
};

export default ProductTerlarisList;
