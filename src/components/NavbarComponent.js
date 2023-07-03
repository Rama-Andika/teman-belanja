"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const NavbarComponent = ({ children }) => {
  const {image} = useStateContext();
  
  
  return (
    <>
      <div className="">
        <div className="bg-[#fa5a96]">
          <div className="min-[920px]:mx-28 px-4 text-[10px] text-white flex flex-col min-[547px]:flex-row justify-between items-center ">
            <div className="flex items-center gap-3 mt-2">
              <div>Seller centre</div>
              <div>|</div>
              <div>Download</div>
              <div>|</div>
              <div>Ikuti kami di</div>
              <div className="flex gap-1 ms-1">
                <div className="text-[14px]">
                  <AiFillInstagram />
                </div>
                <div className="text-[14px] ">
                  <AiFillFacebook />
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="flex items-center gap-1">
                <div>
                  <IoMdNotificationsOutline className="text-[14px]" />
                </div>
                <div>Notifikasi</div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <BiHelpCircle className="text-[14px]" />
                </div>
                <div>Bantuan</div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <TfiWorld className="text-[12px]" />
                </div>
                <div>Bahasa</div>
              </div>
              <div className="flex md:order-2 gap-2">
                <Dropdown
                  inline
                  label={
                    <Avatar alt="User settings" img={image} rounded size="xs" />
                  }
                >
                  <Dropdown.Item>
                    <Link to="/account/profile">Akun Saya</Link>
                  </Dropdown.Item>

                  <Dropdown.Item>Pesanan Saya</Dropdown.Item>
                  <Dropdown.Item>Log Out</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
          <Navbar
            fluid
            rounded
            className="bg-[#fa5a96] min-[920px]:mx-28 text-white mt-5"
          >
            <Navbar.Brand href="/">OXYSYSTEM</Navbar.Brand>

            <div className="flex md:order-2 gap-2">
              <div className="text-xl max-[768px]:mt-2">
                <div className="relative max-[768px]:me-5">
                  <Link to="/keranjang">
                    <div>
                      <SlBasket />
                    </div>
                    <div className="absolute flex justify-center text-[14px] top-[-15px] right-[-25px] bg-white text-[#fa5a96] rounded-full w-7 h-7 pt-[0.08rem]  overflow-ellipsis overflow-hidden">
                      2
                    </div>
                  </Link>
                </div>
              </div>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="text-white">
              <div className="relative w-full min-[768px]:w-[500px] min-[1100px]:w-[800px]">
                <i className="absolute top-[0.13rem] right-[0.13rem] py-2 px-3  bg-[#fa5a96]">
                  <AiOutlineSearch className="text-sm text-white" />
                </i>
                <input
                  className="text-slate-900 ps-8 rounded-sm border border-slate-300 w-full h-[34px] text-sm "
                  type="text"
                  placeholder="Cari barang..."
                />
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className="max-[919px]:mx-3 min-[920px]:mx-28">{children}</div>
      </div>
    </>
  );
};

export default NavbarComponent;
