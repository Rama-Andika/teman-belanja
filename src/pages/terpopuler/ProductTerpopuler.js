import { Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";

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

const ProductTerpopuler = () => {
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
            Terpopuler
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
                      label={<span className="text-[10px]">All</span>}
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{
                        overflow: "hidden",

                        textOverflow: "ellipsis",
                      }}
                      label={<span className="text-[10px]">Minuman</span>}
                      {...a11yProps(1)}
                    />
                    <Tab
                      sx={{
                        overflow: "hidden",

                        textOverflow: "ellipsis",
                      }}
                      label={<span className="text-[10px]">Makanan</span>}
                      {...a11yProps(2)}
                    />
                    <Tab
                      sx={{
                        overflow: "hidden",

                        textOverflow: "ellipsis",
                      }}
                      label={<span className="text-[10px]">Sayuran</span>}
                      {...a11yProps(2)}
                    />
                    <Tab
                      sx={{
                        overflow: "hidden",

                        textOverflow: "ellipsis",
                      }}
                      label={<span className="text-[10px]">Daging</span>}
                      {...a11yProps(2)}
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
                  label={<span className="text-[10px]">All</span>}
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    overflow: "hidden",

                    textOverflow: "ellipsis",
                  }}
                  label={<span className="text-[10px]">Minuman</span>}
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    overflow: "hidden",

                    textOverflow: "ellipsis",
                  }}
                  label={<span className="text-[10px]">Makanan</span>}
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{
                    overflow: "hidden",

                    textOverflow: "ellipsis",
                  }}
                  label={<span className="text-[10px]">Sayuran</span>}
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{
                    overflow: "hidden",

                    textOverflow: "ellipsis",
                  }}
                  label={<span className="text-[10px]">Daging</span>}
                  {...a11yProps(2)}
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
                  label={<span className="text-[10px]">All</span>}
                  {...a11yProps(0)}
                />
                <Tab
                  label={<span className="text-[10px]">Minuman</span>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<span className="text-[10px]">Makanan</span>}
                  {...a11yProps(2)}
                />
                <Tab
                  label={<span className="text-[10px]">Sayuran</span>}
                  {...a11yProps(2)}
                />
                <Tab
                  label={<span className="text-[10px]">Daging</span>}
                  {...a11yProps(2)}
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
              <div className="grid grid-cols-5 gap-5 max-[1414px]:grid-cols-4 max-[1205px]:grid-cols-3 max-[754px]:grid-cols-2 max-[376px]:grid-cols-1 ">
                <div className="flex flex-col border py-5 px-4 relative">
                  <div className="absolute top-[20px] left-[4px] rounded-r-[30px] bg-[#3BB77E] w-[50px] h-[32px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">20%</div>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/images/mangga.png")}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <img
                        src={require("../../assets/images/rating.png")}
                        alt=""
                      />
                    </div>
                    <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-[12px] text-[#3BB77E]">Buah</div>
                    <div className="text-[14px] text-[#3BB77E] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti assumenda veniam doloremque quos quod et aspernatur, esse accusamus iusto minima animi voluptatibus nihil facilis excepturi sit quaerat vero ducimus incidunt!
                      lore
                    </div>
                    <div className="text-[12px] text-[#3BB77E] ">
                      <span className="text-black">By</span> OxyFood
                    </div>
                  </div>
                  <div className="flex flex-col mt-10">
                    <div className="text-[10px] relative w-fit line-through">
                      Rp. 28.0000
                    </div>
                    <div className="text-[16px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                      <div className="font-bold">Rp. 25.000.000</div>
                      <div><input id="add-item" type="number" className="border border-[#3BB77E] w-[67px] h-[29px] focus:border-[#3BB77E]" /></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col border py-5 px-4 relative">
                  <div className="absolute top-[20px] left-[4px] rounded-r-[30px] bg-[#3BB77E] w-[50px] h-[32px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">20%</div>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/images/mangga.png")}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <img
                        src={require("../../assets/images/rating.png")}
                        alt=""
                      />
                    </div>
                    <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-[12px] text-[#3BB77E]">Buah</div>
                    <div className="text-[14px] text-[#3BB77E] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti assumenda veniam doloremque quos quod et aspernatur, esse accusamus iusto minima animi voluptatibus nihil facilis excepturi sit quaerat vero ducimus incidunt!
                      lore
                    </div>
                    <div className="text-[12px] text-[#3BB77E] ">
                      <span className="text-black">By</span> OxyFood
                    </div>
                  </div>
                  <div className="flex flex-col mt-10">
                    <div className="text-[10px] relative w-fit line-through">
                      Rp. 28.0000
                    </div>
                    <div className="text-[16px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                      <div className="font-bold">Rp. 25.000.000</div>
                      <div><input id="add-item" type="number" className="border border-[#3BB77E] w-[67px] h-[29px] focus:border-[#3BB77E]" /></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col border py-5 px-4 relative">
                  <div className="absolute top-[20px] left-[4px] rounded-r-[30px] bg-[#3BB77E] w-[50px] h-[32px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">20%</div>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/images/mangga.png")}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <img
                        src={require("../../assets/images/rating.png")}
                        alt=""
                      />
                    </div>
                    <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-[12px] text-[#3BB77E]">Buah</div>
                    <div className="text-[14px] text-[#3BB77E] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti assumenda veniam doloremque quos quod et aspernatur, esse accusamus iusto minima animi voluptatibus nihil facilis excepturi sit quaerat vero ducimus incidunt!
                      lore
                    </div>
                    <div className="text-[12px] text-[#3BB77E] ">
                      <span className="text-black">By</span> OxyFood
                    </div>
                  </div>
                  <div className="flex flex-col mt-10">
                    <div className="text-[10px] relative w-fit line-through">
                      Rp. 28.0000
                    </div>
                    <div className="text-[16px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                      <div className="font-bold">Rp. 25.000.000</div>
                      <div><input id="add-item" type="number" className="border border-[#3BB77E] w-[67px] h-[29px] focus:border-[#3BB77E]" /></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col border py-5 px-4 relative">
                  <div className="absolute top-[20px] left-[4px] rounded-r-[30px] bg-[#3BB77E] w-[50px] h-[32px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">20%</div>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/images/mangga.png")}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <img
                        src={require("../../assets/images/rating.png")}
                        alt=""
                      />
                    </div>
                    <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-[12px] text-[#3BB77E]">Buah</div>
                    <div className="text-[14px] text-[#3BB77E] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti assumenda veniam doloremque quos quod et aspernatur, esse accusamus iusto minima animi voluptatibus nihil facilis excepturi sit quaerat vero ducimus incidunt!
                      lore
                    </div>
                    <div className="text-[12px] text-[#3BB77E] ">
                      <span className="text-black">By</span> OxyFood
                    </div>
                  </div>
                  <div className="flex flex-col mt-10">
                    <div className="text-[10px] relative w-fit line-through">
                      Rp. 28.0000
                    </div>
                    <div className="text-[16px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                      <div className="font-bold">Rp. 25.000.000</div>
                      <div><input id="add-item" type="number" className="border border-[#3BB77E] w-[67px] h-[29px] focus:border-[#3BB77E]" /></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col border py-5 px-4 relative">
                  <div className="absolute top-[20px] left-[4px] rounded-r-[30px] bg-[#3BB77E] w-[50px] h-[32px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">20%</div>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/images/mangga.png")}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <img
                        src={require("../../assets/images/rating.png")}
                        alt=""
                      />
                    </div>
                    <div className="text-[12px] text-[#7E7E7E]">500 gram</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-[12px] text-[#3BB77E]">Buah</div>
                    <div className="text-[14px] text-[#3BB77E] font-bold h-[47px] overflow-hidden overflow-ellipsis ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti assumenda veniam doloremque quos quod et aspernatur, esse accusamus iusto minima animi voluptatibus nihil facilis excepturi sit quaerat vero ducimus incidunt!
                      lore
                    </div>
                    <div className="text-[12px] text-[#3BB77E] ">
                      <span className="text-black">By</span> OxyFood
                    </div>
                  </div>
                  <div className="flex flex-col mt-10">
                    <div className="text-[10px] relative w-fit line-through">
                      Rp. 28.0000
                    </div>
                    <div className="text-[16px] text-[#3BB77E] flex max-[1020px]:flex-col max-[1020px]:items-start max-[1020px]:gap-2 justify-between items-center">
                      <div className="font-bold">Rp. 25.000.000</div>
                      <div><input id="add-item" type="number" className="border border-[#3BB77E] w-[67px] h-[29px] focus:border-[#3BB77E]" /></div>
                    </div>
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

export default ProductTerpopuler;
