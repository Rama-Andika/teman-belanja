import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="mx-3 min-[850px]:mx-16 h-full ">
        <div className="flex justify-between gap-[64.73px] h-full">
          <div className="h-full max-[489px]:text-[14px] ">
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
            <div className="text-[16px] mt-4">
              Pellentesque posuere orci lobortis
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex gap-2">
                <div
                  className="w-[15.78px] h-[18px] bg-no-repeat bg-cover mt-[0.2rem]"
                  style={{
                    backgroundImage: `url(${require("../assets/images/locationGreen.png")})`,
                  }}
                ></div>

                <div className="w-[304.46px] max-[48px] overflow-hidden overflow-ellipsis">
                  <span className="font-bold">Alamat:</span> Jl. Gatot Subroto
                  Barat No.108 Denpasar Bali
                </div>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-[15.78px] h-[18px] bg-no-repeat bg-cover mt-[0.2rem]"
                  style={{
                    backgroundImage: `url(${require("../assets/images/locationGreen.png")})`,
                  }}
                ></div>

                <div className="w-[304.46px] max-h-[48px] overflow-hidden overflow-ellipsis">
                  <span className="font-bold">Telp:</span> (+81) - 123-456-789
                </div>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-[15.78px] h-[18px] bg-no-repeat bg-cover mt-[0.2rem]"
                  style={{
                    backgroundImage: `url(${require("../assets/images/locationGreen.png")})`,
                  }}
                ></div>

                <div className="w-[304.46px] max-h-[48px] overflow-hidden overflow-ellipsis">
                  <span className="font-bold">Email:</span>{" "}
                  contact@ruangbelanja.com
                </div>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-[15.78px] h-[18px] bg-no-repeat bg-cover mt-[0.2rem]"
                  style={{
                    backgroundImage: `url(${require("../assets/images/locationGreen.png")})`,
                  }}
                ></div>

                <div className="w-[304.46px] max-h-[48px] overflow-hidden overflow-ellipsis">
                  <span className="font-bold">Hours:</span> 09:00 - 17:00, Mon -
                  Sat
                </div>
              </div>
              <div className="max-[1155px]:block min-[1156px]:hidden mt-7 ">
                <div className="font-bold text-[20px] whitespace-nowrap ">
                  App & Pembayaran
                </div>
                <div className="flex flex-col gap-2 mt-10">
                  <div className="text-[14px] max-[489px]:text-[12px] w-full overflow-hidden overflow-ellipsis">
                    Install Aplikasi Ruang Belanja melalui App Store atau Google
                    Play
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 max-[1521px]:grid-cols-3 max-[1366px]:grid-cols-2 gap-[64.73px] max-[650px]:hidden min-[651px]:grid ">
            <div className="max-w-[180.35px] w-[180.35px] min-[1522px]:col-span-3">
              <div className="font-bold text-[20px] whitespace-nowrap ">
                Tentang Kami
              </div>
              <div className="flex flex-col gap-2 mt-10">
                <div className="text-[14px] whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
              </div>
            </div>
            <div className="max-w-[180.35px] w-[180.35px] min-[1522px]:col-span-3">
              <div className="font-bold text-[20px] whitespace-nowrap ">
                Kategori
              </div>
              <div className="flex flex-col gap-2 mt-10">
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
              </div>
            </div>
            <div className="max-w-[180.35px] w-[180.35px] min-[1522px]:col-span-3">
              <div className="font-bold text-[20px] whitespace-nowrap ">
                Akun
              </div>
              <div className="flex flex-col gap-2 mt-10">
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
              </div>
            </div>
            <div className="max-w-[180.35px] w-[180.35px] min-[1522px]:col-span-3">
              <div className="font-bold text-[20px] whitespace-nowrap ">
                Informasi
              </div>
              <div className="flex flex-col gap-2 mt-10">
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
                <div className="text-[14px] w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Tata cara Pengembalian
                </div>
              </div>
            </div>
          </div>
          <div className="max-[1155px]:hidden min-[1156px]:block">
            <div className="font-bold text-[20px] whitespace-nowrap ">
              App & Pembayaran
            </div>
            <div className="flex flex-col gap-2 mt-10">
              <div className="text-[14px] w-full  overflow-hidden overflow-ellipsis">
                Install Aplikasi Ruang Belanja melalui App Store atau Google
                Play
              </div>
            </div>
          </div>
        </div>
        <div className="text-[16px] max-[489px]:text-[12px] mt-32 pb-5 ">
          © 2023, <span className="text-[#3BB77E]">Ruang Belanja</span> -
          Belanja Online Kebutuhan Harian
        </div>
      </div>
    </footer>
  );
};

export default Footer;
