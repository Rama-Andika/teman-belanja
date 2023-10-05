import CategoryComponent from "../components/CategoryComponent";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import ProductTerpopuler from "./terpopuler/ProductTerpopuler";
import ProductTerlaris from "./terlaris/ProductTerlaris";
import ProductPromo from "./promo/ProductPromo";
import MergeSection from "./MergeSection";

const Home = () => {
  return (
    <div className="font-quicksand">
      <NavbarComponent>
        <div className="pt-[30px]">
          {/* <CarouselComponent autoPlay={true} infiniteLoop={true}>
            <div>
              <img
                alt="coffee"
                src={require("../assets/images/home.png")}
                className="object-cover"
              />
            </div>
          </CarouselComponent>           */}
          <div className="relative">
            <img
              alt="coffee"
              src={require("../assets/images/home.png")}
              className="object-cover w-full"
            />
            <div className="absolute w-[727px] h-[234px] left-[57px] top-[63px] font-bold text-[68px] max-[1461px]:text-[30px] max-[1461px]:w-[522px] max-[1212px]:hidden leading-[78px] overflow-hidden overflow-ellipsis">
              Subscribe dan dapatkan notifikasi harga terbaik
            </div>
            <div className="absolute left-[57px] bottom-[23px] max-[1212px]:top-[40%] max-[986px]:left-[30px] flex flex-col gap-1 font-[400] max-[376px]:hidden ">
              <div className="flex items-center">
                <div className="relative z-10">
                  <input
                    className="rounded-[30px] border-0 text-[12px] font-[400] ps-[57px] pe-[148px] max-[735px]:py-[5px] max-[735px]:pe-[100px] "
                    type="text"
                    placeholder="email anda disini"
                  />
                  <div className="absolute left-[22px] top-[12px]">
                    <img
                      src={require("../assets/images/paperPlane.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="z-20 ms-[-80px] bg-[#3BB77E] rounded-[30px] text-[16px] max-[735px]:text-[12px] py-[8px] px-[36px] max-[735px]:px-[20px] text-white font-bold">
                  Subscribe
                </div>
              </div>

              <div className="text-[30px] max-[1461px]:text-[20px] max-[735px]:text-[12px] font-[400]">
              Daftarkan email anda untuk produk harian terbaik
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-1 font-[400] max-[376px]:block mt-5 min-[377px]:hidden">
                <div className="flex items-center">
                  <div className="relative z-10 w-full">
                    <input
                      className="rounded-[30px] border-1 border-gray-300 text-[12px] font-[400] ps-[57px] pe-[148px] max-[735px]:py-[5px] max-[735px]:pe-[100px] "
                      type="text"
                      placeholder="email anda disini"
                    />
                    <div className="absolute left-[22px] top-[12px]">
                      <img
                        src={require("../assets/images/paperPlane.png")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="z-20 ms-[-80px] bg-[#3BB77E] rounded-[30px] text-[16px] max-[735px]:text-[12px] py-[8px] px-[36px] max-[735px]:px-[20px] text-white font-bold">
                    Subscribe
                  </div>
                </div>

                <div className="text-[10px] font-[400] mt-2">
                  Daftarkan email anda untuk produk harian terbaik
                </div>
              </div>
            </div>
          </div>
        </div>

        <CategoryComponent />
        <ProductTerpopuler />
        <ProductTerlaris />
        <ProductPromo />
        <MergeSection />
        {/* <FlashSalesComponent /> */}
        {/* <ProductPromo /> */}
       
        
      </NavbarComponent>
      <Footer className="mt-10" />
    </div>
  );
};

export default Home;
