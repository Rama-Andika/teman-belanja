import { useEffect, useState } from "react";
import NavbarComponent from "../../components/NavbarComponent";
import {
  Tab,
  Tabs,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Footer from "../../components/Footer";
import ReactImageGallery from "react-image-gallery";
import Keranjang from "../../components/icons/Keranjang";
import Wishlist from "../../components/icons/Wishlist";
import Share from "../../components/icons/Share";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useStateContext } from "../../contexts/ContextProvider";

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

const images = [
  {
    original: require("../../assets/images/181.png"),
    thumbnail: require("../../assets/images/manggaManis.png"),
  },
  {
    original: require("../../assets/images/avocado.png"),
    thumbnail: require("../../assets/images/avocado.png"),
  },
];

const ProductPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { screenSize } = useStateContext();

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#3BB77E",
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
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  return (
    <div className="font-quicksand" onClick={() => open && setOpen(false)}>
      <NavbarComponent>
        <div className="mt-[30px]">
          <div className="flex items-center gap-[15px]">
            <div className="text-[18px] text-[#7E7E7E]">Home</div>
            <div>{">"}</div>
            <div className="text-[18px] text-[#7E7E7E]">Category</div>
            <div>{">"}</div>
            <div className="text-[18px] text-[#3BB77E]">Jeruk</div>
          </div>

          <div className="mt-[23.89px] px-[302px] max-[1849px]:px-[280px] max-[1757px]:px-[200px] max-[1573px]:px-[100px] max-[1341px]:px-[2px] max-[793px]:px-[10px]">
            <div className="flex gap-[120px] max-[1201px]:flex-col">
              <div className="w-[646px] max-[1201px]:w-full">
                <ReactImageGallery
                  items={images}
                  showPlayButton={false}
                  showNav={false}
                  className="w-[646px]"
                />
              </div>
              <div className="">
                <div className="flex justify-between">
                  <div className="text-[14px] text-[#3BB77E] bg-[#DEF9EC] rounded-[2px] px-[11px] py-[5px] font-bold flex items-center">
                    In Stock
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-[5px] p-[17.13px] bg-[#F2F3F4] min-[518px]:hidden">
                      <Wishlist />
                    </div>
                    <div className="rounded-[5px] p-[17.13px] bg-[#F2F3F4] min-[518px]:hidden">
                      <Share color="#B6B6B6" />
                    </div>
                  </div>
                </div>

                <div className="max-w-[486px] max-[1201px]:max-w-full text-[40px] font-bold mt-[51.06px]">
                  Mangga Harum Manis Malang
                </div>
                <div className="max-w-[486px] max-[1201px]:max-w-full text-[32px] max-[548px]:text-[22px] font-bold mt-[51.06px] text-[#B6B6B6] line-through">
                  Rp.120000000
                </div>
                <div className="max-w-[486px] max-[1201px]:max-w-full text-[72px] max-[548px]:text-[52px] max-[396px]:text-[32px] font-bold mt-[20.56px] text-[#3BB77E]">
                  Rp.110.000.000
                </div>
                <div className="max-w-[486px] max-[1201px]:max-w-full text-[18px] font-bold mt-[51.06px] text-[#B6B6B6] line-through">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas doloribus ipsam, dicta vitae nemo, perspiciatis
                  doloremque unde placeat eius commodi earum quas quae
                  praesentium libero nihil neque itaque, officiis quo. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                  doloremque amet, consequuntur hic eligendi ullam dolorum atque
                  aut aspernatur culpa quae, necessitatibus in? Delectus,
                  excepturi consequuntur quo voluptatem odio totam!
                </div>
                <div className="font-bold mt-[51.06px]">
                  <div className="flex gap-[10px] max-[396px]:flex-col max-[396px]:items-start items-center">
                    <div className="relative max-[396px]:w-full">
                      <input
                        className="min-[396px]:max-w-[117.47px] max-[396px]:w-full ps-[35.07px] max-[518px]:ps-[10px] pe-[35.07px]  py-[15px] rounded-[7.01px] border-[#3BB77E] border-[1.7px] focus:border-[#3BB77E] text-center"
                        type="number"
                        name=""
                        id=""
                      />
                      <div className=" absolute right-5 top-[0.6rem] flex flex-col gap-1">
                        <div>
                          <IoIosArrowUp />
                        </div>
                        <div>
                          <IoIosArrowDown />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[15px] text-[16px] rounded-[9px] bg-[#3BB77E] p-[15px] font-bold text-white max-[518px]:w-full ">
                      <div>Masukkan Keranjang</div>
                      <div>
                        <Keranjang color="white" />
                      </div>
                    </div>
                    <div className="rounded-[5px] p-[17.13px] bg-[#F2F3F4] max-[518px]:hidden">
                      <Wishlist />
                    </div>
                    <div className="rounded-[5px] p-[17.13px] bg-[#F2F3F4] max-[518px]:hidden">
                      <Share color="#B6B6B6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[50px] pt-[50px]">
              <div>
                <ThemeProvider theme={theme}>
                  <div className="">
                    <Tabs
                      className="bg-white"
                      value={value}
                      onChange={handleChange}
                      textColor="primary"
                      indicatorColor="secondary"
                      aria-label="full width tabs example"
                      variant={`${(screenSize > 418 && screenSize <= 524) ? "fullWidth" : screenSize <= 418 ? "scrollable" : ""}`}
                    >
                      <Tab
                        sx={{
                          overflow: "hidden",

                          textOverflow: "ellipsis",
                        }}
                        className="p-0"
                        label={
                          <span
                            className={`text-[18px] max-[651px]:text-[8px]  ${
                              value === 0
                                ? "text-[#3BB77E] shadow-md"
                                : "text-[#B6B6B6]"
                            } py-[15px] px-[30px] rounded-[30px]  border `}
                          >
                            Deskripsi
                          </span>
                        }
                        {...a11yProps(0)}
                      />
                      <Tab
                        sx={{
                          overflow: "hidden",

                          textOverflow: "ellipsis",
                        }}
                        label={
                          <span
                            className={`text-[18px] max-[651px]:text-[8px]  ${
                              value === 1
                                ? "text-[#3BB77E] shadow-md"
                                : "text-[#B6B6B6]"
                            } py-[15px] px-[30px] rounded-[30px] border `}
                          >
                            Informasi Tambahan
                          </span>
                        }
                        {...a11yProps(1)}
                      />
                      <Tab
                        sx={{
                          overflow: "hidden",

                          textOverflow: "ellipsis",
                        }}
                        label={
                          <span
                            className={`text-[18px] max-[651px]:text-[8px]  ${
                              value === 2
                                ? "text-[#3BB77E] shadow-md"
                                : "text-[#B6B6B6]"
                            } py-[15px] px-[30px] rounded-[30px]  border `}
                          >
                            Ulasan(5)
                          </span>
                        }
                        {...a11yProps(2)}
                      />
                    </Tabs>
                  </div>
                </ThemeProvider>
              </div>
              <div>
                <TabPanel value={value} index={0}>
                  <div className="mt-[20.26px] ">
                    <div className="text-[16px] text-[#7E7E7E]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nesciunt nihil impedit optio vitae aut, ea est esse. Nisi,
                      fuga labore aliquid excepturi, voluptas quos vero at
                      voluptates distinctio itaque officia! Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Expedita,
                      architecto mollitia asperiores, tempora saepe quasi
                      obcaecati, quas recusandae nobis commodi maxime? Quas
                      officiis voluptatibus, aperiam ea totam molestias ullam
                      natus! Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Minima inventore officia esse sed pariatur
                      reprehenderit explicabo nihil nulla perferendis quam?
                      Recusandae architecto nobis numquam mollitia, culpa
                      repellendus quaerat placeat omnis!
                    </div>
                  </div>
                </TabPanel>
              </div>
            </div>
            <div className="mt-[50px]">
              <div className="text-[32px] text-[#253D4E] text-center font-bold">
                Produk Sejenis
              </div>
              <div className="grid grid-cols-4 max-[1201px]:grid-cols-2 gap-[51.33px] max-[556px]:gap-[10px]">
                <div className="flex flex-col border py-[20px] px-[14px] max-[524px]:p-[10px] relative rounded-[20px]">
                  <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                    <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                      sale
                    </div>
                  </div>
                  <div className="h-[200px] flex justify-center ">
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti assumenda veniam doloremque quos quod et
                    aspernatur, esse accusamus iusto minima animi voluptatibus
                    nihil facilis excepturi sit quaerat vero ducimus incidunt!
                    lore
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
                <div className="flex flex-col border py-[20px] px-[14px] max-[524px]:p-[10px] relative rounded-[20px]">
                  <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                    <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                      sale
                    </div>
                  </div>
                  <div className="h-[200px] flex justify-center ">
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti assumenda veniam doloremque quos quod et
                    aspernatur, esse accusamus iusto minima animi voluptatibus
                    nihil facilis excepturi sit quaerat vero ducimus incidunt!
                    lore
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
                <div className="flex flex-col border py-[20px] px-[14px] max-[524px]:p-[10px] relative rounded-[20px]">
                  <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                    <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                      sale
                    </div>
                  </div>
                  <div className="h-[200px] flex justify-center ">
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti assumenda veniam doloremque quos quod et
                    aspernatur, esse accusamus iusto minima animi voluptatibus
                    nihil facilis excepturi sit quaerat vero ducimus incidunt!
                    lore
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
                <div className="flex flex-col border py-[20px] px-[14px] max-[524px]:p-[10px] relative rounded-[20px]">
                  <div className="absolute top-[27px] left-0 rounded-r-[30px] bg-[#F6C851] w-[50px] h-[32px]">
                    <div className="text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                      sale
                    </div>
                  </div>
                  <div className="h-[200px] flex justify-center ">
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti assumenda veniam doloremque quos quod et
                    aspernatur, esse accusamus iusto minima animi voluptatibus
                    nihil facilis excepturi sit quaerat vero ducimus incidunt!
                    lore
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
          </div>
          <div className="mt-[122.28px]">
            <div className="ps-[78.21px] max-[866px]:px-5 py-[72.87px] bg-[#d8f1e5] relative ">
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
        </div>
      </NavbarComponent>
      <Footer className="mt-10" />
    </div>
  );
};

export default ProductPage;
