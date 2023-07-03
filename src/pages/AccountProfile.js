/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import { AiFillCalendar } from "react-icons/ai";
import DatePicker from "react-date-picker";
import User from "../assets/images/user.png";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";

const AccountProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [gender, setGender] = useState("");
  const [startDate, setStartDate] = useState();
  const { image, setImage } = useStateContext();
  const location = useLocation();
  const path = location.pathname.split("/");

  const changeDate = (e) => {
    setStartDate(e);
  };

  const submit = (e) => {
    e.preventDefault();
  };

  const changeImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    setName("Budi Santoso");
    setEmail("budisantoso@gmail.com");
    setNoTelp("082235252525");
    setGender("0");
    setStartDate(new Date());

    if (image === undefined) {
      setImage(User);
    }
  }, []);

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
                    <div className={`font-bold text-[15px] mb-2 mt-2 ${path[2] === "purchase" ? "text-[#fa5a96]" : undefined}`}>
                      Pesanan Saya
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 min-[1233px]:col-span-10 bg-white p-5 ">
              <div className="hidden min-[1130px]:grid grid-cols-3 gap-5 items-center ">
                <div className="col-span-2">
                  <div className="font-bold">Profil Saya</div>
                  <div className="text-[14px]">
                    Kelola informasi profil Anda untuk mengontrol, melindungi
                    dan mengamankan akun
                  </div>
                  <div className="text-[14px] mt-10 ps-24">
                    <form onSubmit={submit} className="flex flex-col gap-5">
                      <div className="flex gap-2 items-center ">
                        <label className="w-[130px]">Username</label>
                        <input
                          disabled
                          type="text"
                          readOnly
                          value="budi.santoso"
                          className="border-none w-full"
                        />
                      </div>
                      <div className="flex gap-2 items-center ">
                        <label htmlFor="name" className="w-[130px]">
                          Nama
                        </label>
                        <input
                          name="name"
                          className="input border outline-0 border-slate-300 w-full"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2 items-center ">
                        <label htmlFor="email" className="w-[130px]">
                          Email
                        </label>
                        <input
                          name="email"
                          className="input border outline-0 border-slate-300 w-full"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2 items-center ">
                        <label htmlFor="noTelp" className="w-[130px]">
                          Nomor Telepon
                        </label>
                        <input
                          name="noTelp"
                          className="input border outline-0 border-slate-300 w-full"
                          type="text"
                          value={noTelp}
                          onChange={(e) => setNoTelp(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="w-[110px]">Jenis Kelamin</label>
                        <div className="flex gap-2 items-center">
                          <label htmlFor="" className="">
                            Laki-laki
                          </label>
                          <input
                            name="gender"
                            className="input border outline-0 border-slate-300 focus:bg-[#fa5a96] text-[#fa5a96]"
                            type="radio"
                            value="0"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "0" && true}
                          />
                        </div>
                        <div className="flex gap-2 items-center ms-2">
                          <label htmlFor="" className="">
                            Perempuan
                          </label>
                          <input
                            name="gender"
                            className="input border outline-0 border-slate-300 focus:bg-[#fa5a96] text-[#fa5a96]"
                            type="radio"
                            value="1"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "1" && true}
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 items-center ">
                        <label htmlFor="tglLahir" className="w-[130px]">
                          Tanggal Lahir
                        </label>
                        <DatePicker
                          className="w-full"
                          format="MM-dd-y"
                          clearIcon={null}
                          calendarIcon=<AiFillCalendar />
                          onChange={(e) => {
                            changeDate(e);
                          }}
                          value={startDate}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="bg-[#fa5a96] py-2 px-5 text-white rounded-sm shadow-sm"
                        >
                          Simpan
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex justify-end me-10">
                  <div className="flex flex-col gap-2 items-center">
                    <div
                      className="rounded-full w-[100px] h-[100px] bg-center bg-cover"
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    ></div>
                    <div className="mt-5">
                      <label
                        className="border border-slate-300 py-3 px-5 cursor-pointer"
                        htmlFor="image-upload"
                      >
                        Pilih Gambar
                      </label>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        max="1000"
                        onChange={(e) => changeImage(e)}
                        className="hidden"
                      />
                    </div>
                    <div className="mt-5 text-slate-400 text-[14px]">
                      <div>Ukuran Gambar: maks. 1MB</div>
                      <div>Format Gambar: JPEG, PNG, JPG</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden max-[1130px]:flex flex-col ">
                <div className="">
                  <div className="font-bold">Profil Saya</div>
                  <div className="text-[14px]">
                    Kelola informasi profil Anda untuk mengontrol, melindungi
                    dan mengamankan akun
                  </div>
                  <div className="flex justify-center mt-10">
                    <div className="flex flex-col gap-2 items-center">
                      <div
                        className="rounded-full w-[100px] h-[100px] bg-center bg-cover"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      ></div>
                      <div className="mt-5">
                        <label
                          className="border border-slate-300 py-3 px-5"
                          htmlFor="image-upload"
                        >
                          Pilih Gambar
                        </label>
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/png, image/jpeg, image/jpg"
                          max="1000"
                          onChange={(e) => changeImage(e)}
                          className="hidden"
                        />
                      </div>
                      <div className="mt-5 text-slate-400 text-[14px]">
                        <div>Ukuran Gambar: maks. 1MB</div>
                        <div>Format Gambar: JPEG, PNG, JPG</div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden min-[500px]:block text-[14px] mt-10">
                    <form onSubmit={submit} className="flex flex-col gap-5 ">
                      <div className="flex gap-2 items-center ">
                        <label className="w-[130px]">Username</label>
                        <input
                          disabled
                          type="text"
                          readOnly
                          value="budi.santoso"
                          className="border-none w-full text-[12px] min-[500px]:text-[14px]"
                        />
                      </div>
                      <div className="flex gap-2 items-center ">
                        <label htmlFor="name" className="w-[130px]">
                          Nama
                        </label>
                        <input
                          name="name"
                          className="input border outline-0 border-slate-300 w-full text-[12px] min-[500px]:text-[14px]"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2 items-center ">
                        <label htmlFor="email" className="w-[130px]">
                          Email
                        </label>
                        <input
                          name="email"
                          className="input border outline-0 border-slate-300 w-full text-[12px] min-[500px]:text-[14px]"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2 items-center ">
                        <label htmlFor="noTelp" className="w-[130px]">
                          Nomor Telepon
                        </label>
                        <input
                          name="noTelp"
                          className="input border outline-0 border-slate-300 w-full text-[12px] min-[500px]:text-[14px]"
                          type="text"
                          value={noTelp}
                          onChange={(e) => setNoTelp(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="w-[130px]">Jenis Kelamin</label>
                        <div className="flex gap-2 items-center">
                          <label htmlFor="" className="">
                            Laki-laki
                          </label>
                          <input
                            name="gender"
                            className="input border outline-0 border-slate-300 focus:bg-[#fa5a96] text-[#fa5a96] "
                            type="radio"
                            value="0"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "0" && true}
                          />
                        </div>
                        <div className="flex gap-2 items-center ms-2">
                          <label htmlFor="" className="">
                            Perempuan
                          </label>
                          <input
                            name="gender"
                            className="input border outline-0 border-slate-300 focus:bg-[#fa5a96] text-[#fa5a96]"
                            type="radio"
                            value="1"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "1" && true}
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 items-center ">
                        <label htmlFor="tglLahir" className="w-[130px]">
                          Tanggal Lahir
                        </label>
                        <DatePicker
                          className="w-full"
                          format="MM-dd-y"
                          clearIcon={null}
                          calendarIcon=<AiFillCalendar />
                          onChange={(e) => {
                            changeDate(e);
                          }}
                          value={startDate}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="bg-[#fa5a96] py-2 px-5 text-white rounded-sm shadow-sm"
                        >
                          Simpan
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="hidden max-[500px]:block text-[14px] mt-10">
                    <form onSubmit={submit} className="flex flex-col gap-5 ">
                      <div className="flex flex-col gap-2 items-start ">
                        <label className="w-[130px] font-bold">Username</label>
                        <input
                          disabled
                          type="text"
                          readOnly
                          value="budi.santoso"
                          className="border-none w-full text-[14px] text-left ps-0"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start ">
                        <label htmlFor="name" className="w-[130px] font-bold">
                          Nama
                        </label>
                        <input
                          name="name"
                          className="input border outline-0 border-slate-300 w-full text-[14px] "
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start">
                        <label htmlFor="email" className="w-[130px] font-bold">
                          Email
                        </label>
                        <input
                          name="email"
                          className="input border outline-0 border-slate-300 w-full  text-[14px] "
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start ">
                        <label htmlFor="noTelp" className="w-[130px] font-bold">
                          Nomor Telepon
                        </label>
                        <input
                          name="noTelp"
                          className="input border outline-0 border-slate-300 w-full text-[14px] "
                          type="text"
                          value={noTelp}
                          onChange={(e) => setNoTelp(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start">
                        <label className="w-[130px] font-bold">
                          Jenis Kelamin
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-2 items-center text-[14px]">
                            <label htmlFor="" className="">
                              Laki-laki
                            </label>
                            <input
                              name="gender"
                              className="input border outline-0 border-slate-300 focus:bg-[#fa5a96] text-[#fa5a96] "
                              type="radio"
                              value="0"
                              onChange={(e) => setGender(e.target.value)}
                              checked={gender === "0" && true}
                            />
                          </div>
                          <div className="flex gap-2 items-center ms-2">
                            <label htmlFor="" className="">
                              Perempuan
                            </label>
                            <input
                              name="gender"
                              className="input border outline-0 border-slate-300 focus:bg-[#fa5a96] text-[#fa5a96]"
                              type="radio"
                              value="1"
                              onChange={(e) => setGender(e.target.value)}
                              checked={gender === "1" && true}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 items-start ">
                        <label
                          htmlFor="tglLahir"
                          className="w-[130px] font-bold"
                        >
                          Tanggal Lahir
                        </label>
                        <DatePicker
                          className="w-full"
                          format="MM-dd-y"
                          clearIcon={null}
                          calendarIcon=<AiFillCalendar />
                          onChange={(e) => {
                            changeDate(e);
                          }}
                          value={startDate}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="bg-[#fa5a96] py-2 px-5 text-white rounded-sm shadow-sm"
                        >
                          Simpan
                        </button>
                      </div>
                    </form>
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

export default AccountProfile;
