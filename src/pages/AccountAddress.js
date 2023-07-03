/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";

import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { useStateContext } from "../contexts/ContextProvider";
import {
  Backdrop,
  Fade,
  Modal,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useEffect } from "react";
import ApiDataWilayahIndonesia from "../api/ApiDataWilayahIndonesia";
import Select from "react-select";
import User from "../assets/images/user.png";

const AccountAddress = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const path = location.pathname.split("/");
  const { image, setImage } = useStateContext();
  const [provinsi, setProvinsi] = useState({});
  const [kabupaten, setKabupaten] = useState({});
  const [kecamatan, setKecamatan] = useState({});
  const [kelurahan, setKelurahan] = useState({});
  const [optionProvinsi, setOptionProvinsi] = useState([]);
  const [optionKabupaten, setOptionKabupaten] = useState([]);
  const [optionKecamatan, setOptionKecamatan] = useState([]);
  const [optionKelurahan, setOptionKelurahan] = useState([]);

  const { screenSize, setScreenSize } = useStateContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const customeStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "white",
      border: state.isFocused ? "1px solid #fa5a96" : "1px solid #999999",
      outline: state.isFocused && "1px solid #fa5a96",

      "&:hover": {
        border: "1px solid #fa5a96",
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
      backgroundColor: state.isSelected
        ? "#fa5a96"
        : state.isFocused && "#fff0f3",
    }),
  };

  const fetchProvince = async () => {
    await ApiDataWilayahIndonesia.get("provinces.json").then((response) => {
      const provinsiValue = response.data.map((item, i) => {
        const provinsiCopy = [...optionProvinsi];
        return (provinsiCopy[i] = {
          value: item.id,
          label: item.name,
          key: item.id,
        });
      });

      setOptionProvinsi(provinsiValue);
    });
  };

  const fetchKabupaten = async (id) => {
    await ApiDataWilayahIndonesia.get(`regencies/${id}.json`).then(
      (response) => {
        const optionsValue = response.data.map((item, i) => {
          const optionCopy = [...optionKabupaten];
          return (optionCopy[i] = {
            value: item.id,
            label: item.name,
            key: item.id,
          });
        });

        setOptionKabupaten(optionsValue);
      }
    );
  };

  const fetchKecamatan = async (id) => {
    await ApiDataWilayahIndonesia.get(`districts/${id}.json`).then(
      (response) => {
        const optionsValue = response.data.map((item, i) => {
          const optionCopy = [...optionKecamatan];
          return (optionCopy[i] = {
            value: item.id,
            label: item.name,
            key: item.id,
          });
        });

        setOptionKecamatan(optionsValue);
      }
    );
  };

  const fetchKelurahan = async (id) => {
    await ApiDataWilayahIndonesia.get(`villages/${id}.json`).then(
      (response) => {
        const optionsValue = response.data.map((item, i) => {
          const optionCopy = [...optionKelurahan];
          return (optionCopy[i] = {
            value: item.id,
            label: item.name,
            key: item.id,
          });
        });

        setOptionKelurahan(optionsValue);
      }
    );
  };

  const changeProvinsi = (item) => {
    if (provinsi.value !== item.value) {
      setProvinsi(item);
      setKabupaten({});
      setKecamatan({});
      setKelurahan({});

      fetchKabupaten(item.value);
    }
  };

  const changeKabupaten = (item) => {
    if (kabupaten.value !== item.value) {
      setKabupaten(item);
      setKecamatan({});
      setKelurahan({});

      fetchKecamatan(item.value);
    }
  };

  const changeKecamatan = (item) => {
    if (kabupaten.value !== item.value) {
      setKecamatan(item);
      setKelurahan({});

      fetchKelurahan(item.value);
    }
  };

  const changeKelurahan = (item) => {
    if (kabupaten.value !== item.value) {
      setKelurahan(item);
    }
  };

  useEffect(() => {
    fetchProvince();
    if (image === undefined) {
      setImage(User);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                  <Dropdown.Item>
                    <Link to="/account/profile">
                      <div
                        className={
                          path[2] === "profile" ? "text-[#fa5a96]" : undefined
                        }
                      >
                        Profil
                      </div>
                    </Link>
                  </Dropdown.Item>

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
                      }`}
                    >
                      Pesanan Saya
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 min-[1233px]:col-span-10 bg-white p-5 ">
              <div className="">
                <div className="">
                  <div className="font-bold">Alamat Saya</div>
                  <div className="text-slate-500 mt-10 ">Alamat</div>
                  <div className="">
                    <div className={`mt-5 flex gap-2  ${screenSize <= 498 ? "flex-col justify-start items-start" : "flex-row justify-between items-center"} `}>
                      <div className="flex gap-2 flex-col min-[433px]:flex-row">
                        <div className="w-[200px] overflow-ellipsis overflow-hidden whitespace-nowrap">I Putu Rama Andika Putra</div>
                        <div className="hidden min-[433px]:block text-slate-400">|</div>
                        <div className="text-slate-400">082345245245</div>
                      </div>
                      <div>
                        <div
                          className="cursor-pointer text-blue-500 text-[14px]"
                          onClick={handleOpen}
                        >
                          Ubah
                        </div>
                      </div>
                    </div>
                    <div className=" text-slate-400 text-[14px] mt-2 w-full min-[646px]:w-[500px]">
                      jalan Tukad Citarum Gg. O No.7B, Panjer, Denpasar Selatan
                      (Kmr no 9, lt 2(kiri)) DENPASAR SELATAN, KOTA DENPASAR,
                      BALI, ID, 80225
                    </div>
                  </div>
                  <div>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          timeout: 500,
                        },
                      }}
                    >
                      <Fade in={open}>
                        <div
                          className={`bg-white py-5 px-7 absolute top-[40%] left-1/2 translate-x-[-50%] translate-y-[-50%] h-[400px] overflow-y-auto  ${
                            screenSize <= 548 ? "w-[100%]" : "w-[500px]"
                          }`}
                        >
                          <div className="text-[20px] mb-5 font-semibold">
                            Ubah Alamat
                          </div>
                          <form className="relative">
                            <div
                              className={`flex gap-2 justify-between ${
                                screenSize <= 943 && "flex-col"
                              }`}
                            >
                              <div>
                                <ThemeProvider theme={theme}>
                                  <TextField
                                    id="outlined-basic"
                                    fullWidth
                                    label="Nama Lengkap"
                                    variant="outlined"
                                    color="primary"
                                  />
                                </ThemeProvider>
                              </div>

                              <div className={`${screenSize <= 943 && "mt-2"}`}>
                                <ThemeProvider theme={theme}>
                                  <TextField
                                    id="outlined-basic"
                                    fullWidth
                                    label="Nomer Telepon"
                                    variant="outlined"
                                    color="primary"
                                  />
                                </ThemeProvider>
                              </div>
                            </div>
                            <div className="mt-4">
                              <ThemeProvider theme={theme}>
                                <TextField
                                  fullWidth
                                  id="outlined-multiline-flexible"
                                  label="Alamat"
                                  color="primary"
                                  multiline
                                  maxRows={4}
                                />
                              </ThemeProvider>
                            </div>
                            <div className="mt-4">
                              <label className="font-semibold">Provinsi</label>
                              <div className="mt-2">
                                <Select
                                  onChange={changeProvinsi}
                                  value={provinsi}
                                  options={optionProvinsi}
                                  noOptionsMessage={() => "Data not found"}
                                  styles={customeStyles}
                                  placeholder="Pilih Provinsi..."
                                  required
                                />
                              </div>
                            </div>

                            {Object.keys(provinsi).length !== 0 && (
                              <div className="mt-4">
                                <label className="font-semibold">
                                  kabupaten
                                </label>
                                <div className="mt-2">
                                  <Select
                                    onChange={changeKabupaten}
                                    value={kabupaten}
                                    options={optionKabupaten}
                                    noOptionsMessage={() => "Data not found"}
                                    styles={customeStyles}
                                    placeholder="Pilih Kabupaten..."
                                    required
                                  />
                                </div>
                              </div>
                            )}

                            {Object.keys(provinsi).length !== 0 &&
                              Object.keys(kabupaten).length !== 0 && (
                                <div className="mt-4">
                                  <label className="font-semibold">
                                    Kecamatan
                                  </label>
                                  <div className="mt-2">
                                    <Select
                                      onChange={changeKecamatan}
                                      value={kecamatan}
                                      options={optionKecamatan}
                                      noOptionsMessage={() => "Data not found"}
                                      styles={customeStyles}
                                      placeholder="Pilih Kabupaten..."
                                      required
                                    />
                                  </div>
                                </div>
                              )}

                            {Object.keys(provinsi).length !== 0 &&
                              Object.keys(kabupaten).length !== 0 &&
                              Object.keys(kecamatan).length !== 0 && (
                                <div className="mt-4">
                                  <label className="font-semibold">
                                    kelurahan
                                  </label>
                                  <div className="mt-2">
                                    <Select
                                      onChange={changeKelurahan}
                                      value={kelurahan}
                                      options={optionKelurahan}
                                      noOptionsMessage={() => "Data not found"}
                                      styles={customeStyles}
                                      placeholder="Pilih Kabupaten..."
                                      required
                                    />
                                  </div>
                                </div>
                              )}

                            {Object.keys(provinsi).length !== 0 &&
                              Object.keys(kabupaten).length !== 0 &&
                              Object.keys(kecamatan).length !== 0 &&
                              Object.keys(kelurahan).length !== 0 && (
                                <div className="mt-4">
                                  <ThemeProvider theme={theme}>
                                    <TextField
                                      fullWidth
                                      id="outlined-basic"
                                      label="Kode Pos"
                                      variant="outlined"
                                      color="primary"
                                      className="z-0"
                                    />
                                  </ThemeProvider>
                                </div>
                              )}

                            <div className="mt-4 flex justify-end">
                              <button
                                type="submit"
                                className="py-2 px-10 bg-[#fa5a96] text-white shadow-sm rounded-sm"
                              >
                                OK
                              </button>
                            </div>
                          </form>
                        </div>
                      </Fade>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavbarComponent>
      <Footer className="mt-10 border-t-4 border-[#fa5a96]" />
    </div>
  );
};

export default AccountAddress;
