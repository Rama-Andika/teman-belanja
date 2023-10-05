import { Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

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

const ProductTerlaris = () => {
  const { screenSize } = useStateContext();
  const [value, setValue] = useState(0);

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#000000",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#ffffff",
      },
    },
    labelContainer: {
      padding: 0,
    },
  });

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <>
      <div className="mt-[30px] bg-white rounded-sm font-quicksand text-[14px] ">
        <div className="flex items-center justify-between">
          <div className="max-[252px]:text-[12px] min-[760px]:text-[32px] font-bold">
            Terlaris
          </div>
          <div>
            <ThemeProvider theme={theme}>
              {screenSize >= 1190 && (
                <div className="">
                  <Tabs
                    className="bg-white"
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="secondary"
                    aria-label="full width tabs example"
                  >
                    <Tab
                      sx={{
                        overflow: "hidden",

                        textOverflow: "ellipsis",
                      }}
                      className="p-0"
                      label={<span className="text-[10px]">Daging</span>}
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{
                        overflow: "hidden",

                        textOverflow: "ellipsis",
                      }}
                      label={<span className="text-[10px]">Sayur</span>}
                      {...a11yProps(1)}
                    />
                    <Tab
                      sx={{
                        overflow: "hidden",

                        textOverflow: "ellipsis",
                      }}
                      label={<span className="text-[10px]">Buah</span>}
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </div>
              )}
            </ThemeProvider>
          </div>
        </div>
        <div className="max-[1191px]:block min-[1192px]:hidden mt-5">
          <ThemeProvider theme={theme}>
            {screenSize > 748 ? (
              <Tabs
                className="bg-white"
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="secondary"
                aria-label="full width tabs example"
                variant="fullWidth"
              >
                <Tab
                  sx={{
                    overflow: "hidden",

                    textOverflow: "ellipsis",
                  }}
                  className="p-0"
                  label={<span className="text-[10px]">Daging</span>}
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    overflow: "hidden",

                    textOverflow: "ellipsis",
                  }}
                  label={<span className="text-[10px]">Sayur</span>}
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    overflow: "hidden",

                    textOverflow: "ellipsis",
                  }}
                  label={<span className="text-[10px]">Buah</span>}
                  {...a11yProps(2)}
                />
              </Tabs>
            ) : (
              <Tabs
                className="bg-white"
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="full width tabs example"
              >
                <Tab
                  className="border-r-4"
                  label={<span className="text-[10px]">Daging</span>}
                  {...a11yProps(0)}
                />
                <Tab
                  label={<span className="text-[10px]">Sayur</span>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<span className="text-[10px]">Buah</span>}
                  {...a11yProps(2)}
                />
              </Tabs>
            )}
          </ThemeProvider>
        </div>

        <div>
          <TabPanel value={value} index={0}>
            <div className="bg-white mt-5">
              <div className="grid grid-cols-6 gap-5 max-[1371px]:grid-cols-5 max-[1149px]:grid-cols-4 max-[754px]:grid-cols-3 max-[556px]:grid-cols-2 ">
                <div className="flex flex-col border relative col-span-2 h-[551.77px] bg-[#3BB77E] ">
                  <img
                    src={require("../../assets/images/sayur_op.png")}
                    alt=""
                    className="h-[551.77px] object-cover"
                  />
                  <div className="w-full px-5 absolute top-0 text-white py-7">
                    <div className="text-[45px] h-[202px] overflow-hidden overflow-ellipsis">
                      Produk harian segar siap diantar ke rumah anda
                    </div>
                  </div>
                  <div className="w-full px-5 absolute bottom-0 text-white py-7">
                    <button className="bg-[#FDC040] py-3 px-5 rounded-[9px] w-[170px] font-bold flex items-center gap-2 whitespace-nowrap justify-center">
                      Lihat Sekarang{" "}
                      <span>
                        <img
                          src={require("../../assets/images/lineArrowRight.png")}
                          alt=""
                          className="invert-[100%] sepia-[0%] saturate-[100%] hue-rotate-[280deg] brightness-[0%] contrast-[101%]"
                        />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col border pt-14 px-4 relative">
                  <div className="absolute top-[20px] left-0 rounded-r-[30px] bg-[#FD6E6E] w-[82px] h-[32px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[12px] whitespace-nowrap">
                      Save 25%
                    </div>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/images/mangga.png")}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col gap-1 mt-[33.97px]">
                    <div className="text-[12px]">Buah</div>
                    <div className="font-bold h-[47px] text-[14px] overflow-hidden overflow-ellipsis ">
                      Timun Bali Lokal, sudah dicuci dan diwrap plastik
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <img
                        src={require("../../assets/images/rating.png")}
                        alt=""
                      />
                    </div>
                    <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <div className="text-[10px] relative w-fit line-through">
                      Rp. 28.0000
                    </div>
                    <div className="text-[20px] max-[376px]:text-[15px]  text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                      <div className="font-bold">Rp. 25.000.000</div>
                    </div>
                  </div>
                  <div>
                    <ProgressBar
                      completed={50}
                      bgColor="#3BB77E"
                      height="4px"
                      isLabelVisible={false}
                      labelColor="#e80909"
                      maxCompleted={100}
                    />
                  </div>
                  <div className="text-[12px] pt-[6px]">Terjual 90/100</div>
                  <div className="pt-[23px] pb-3">
                    <button className="bg-[#3BB77E] text-[14px] max-[376px]:text-[10px] text-white font-bold w-full py-2 flex items-center justify-center gap-2">
                      <span>
                        <img
                          src={require("../../assets/images/cart.png")}
                          alt=""
                        />
                      </span>{" "}
                      Add to chart
                    </button>
                  </div>
                </div>
                <div className="flex flex-col border pt-14 px-4 relative">
                  <div className="absolute top-[20px] left-0 rounded-r-[30px] bg-[#FD6E6E] w-[82px] h-[32px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[12px] whitespace-nowrap">
                      Save 25%
                    </div>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/images/mangga.png")}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col gap-1 mt-[33.97px]">
                    <div className="text-[12px]">Buah</div>
                    <div className="font-bold h-[47px] text-[14px] overflow-hidden overflow-ellipsis ">
                      Timun Bali Lokal, sudah dicuci dan diwrap plastik
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <img
                        src={require("../../assets/images/rating.png")}
                        alt=""
                      />
                    </div>
                    <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <div className="text-[10px] relative w-fit line-through">
                      Rp. 28.0000
                    </div>
                    <div className="text-[20px] max-[376px]:text-[15px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                      <div className="font-bold">Rp. 25.000.000</div>
                    </div>
                  </div>
                  <div>
                    <ProgressBar
                      completed={50}
                      bgColor="#3BB77E"
                      height="4px"
                      isLabelVisible={false}
                      labelColor="#e80909"
                      maxCompleted={100}
                    />
                  </div>
                  <div className="text-[12px] pt-[6px]">Terjual 90/100</div>
                  <div className="pt-[23px] pb-3">
                    <button className="bg-[#3BB77E] text-[14px] max-[376px]:text-[10px] text-white font-bold w-full py-2 flex items-center justify-center gap-2">
                      <span>
                        <img
                          src={require("../../assets/images/cart.png")}
                          alt=""
                        />
                      </span>{" "}
                      Add to chart
                    </button>
                  </div>
                </div>
                <div className="flex flex-col border pt-14 px-4 relative">
                  <div className="absolute top-[20px] left-0 rounded-r-[30px] bg-[#FD6E6E] w-[82px] h-[32px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[12px] whitespace-nowrap">
                      Save 25%
                    </div>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/images/mangga.png")}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col gap-1 mt-[33.97px]">
                    <div className="text-[12px]">Buah</div>
                    <div className="font-bold h-[47px] text-[14px] overflow-hidden overflow-ellipsis ">
                      Timun Bali Lokal, sudah dicuci dan diwrap plastik
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <img
                        src={require("../../assets/images/rating.png")}
                        alt=""
                      />
                    </div>
                    <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <div className="text-[10px] relative w-fit line-through">
                      Rp. 28.0000
                    </div>
                    <div className="text-[20px] max-[376px]:text-[15px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                      <div className="font-bold">Rp. 25.000.000</div>
                    </div>
                  </div>
                  <div>
                    <ProgressBar
                      completed={50}
                      bgColor="#3BB77E"
                      height="4px"
                      isLabelVisible={false}
                      labelColor="#e80909"
                      maxCompleted={100}
                    />
                  </div>
                  <div className="text-[12px] pt-[6px]">Terjual 90/100</div>
                  <div className="pt-[23px] pb-3">
                    <button className="bg-[#3BB77E] text-[14px] max-[376px]:text-[10px] text-white font-bold w-full py-2 flex items-center justify-center gap-2">
                      <span>
                        <img
                          src={require("../../assets/images/cart.png")}
                          alt=""
                        />
                      </span>{" "}
                      Add to chart
                    </button>
                  </div>
                </div>
                <div className="flex flex-col border pt-14 px-4 relative">
                  <div className="absolute top-[20px] left-0 rounded-r-[30px] bg-[#FD6E6E] w-[82px] h-[32px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[12px] whitespace-nowrap">
                      Save 25%
                    </div>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/images/mangga.png")}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col gap-1 mt-[33.97px]">
                    <div className="text-[12px]">Buah</div>
                    <div className="font-bold h-[47px] text-[14px] overflow-hidden overflow-ellipsis ">
                      Timun Bali Lokal, sudah dicuci dan diwrap plastik
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <img
                        src={require("../../assets/images/rating.png")}
                        alt=""
                      />
                    </div>
                    <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <div className="text-[10px] relative w-fit line-through">
                      Rp. 28.0000
                    </div>
                    <div className="text-[20px] max-[376px]:text-[15px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                      <div className="font-bold">Rp. 25.000.000</div>
                    </div>
                  </div>
                  <div>
                    <ProgressBar
                      completed={50}
                      bgColor="#3BB77E"
                      height="4px"
                      isLabelVisible={false}
                      labelColor="#e80909"
                      maxCompleted={100}
                    />
                  </div>
                  <div className="text-[12px] pt-[6px]">Terjual 90/100</div>
                  <div className="pt-[23px] pb-3">
                    <button className="bg-[#3BB77E] text-[14px] max-[376px]:text-[10px] text-white font-bold w-full py-2 flex items-center justify-center gap-2">
                      <span>
                        <img
                          src={require("../../assets/images/cart.png")}
                          alt=""
                        />
                      </span>{" "}
                      Add to chart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="bg-white mt-5">Halo2</div>
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default ProductTerlaris;
