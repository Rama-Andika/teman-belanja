import CarouselComponent from "../components/CarouselComponent";
import CategoryComponent from "../components/CategoryComponent";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import ProductComponent from "../components/ProductComponent";
import Coffee from "../assets/images/coffee.jpg";
import FlashSalesComponent from "../components/FlashSalesComponent";
import BestSelling from "../components/BestSelling";
import ProductPromo from "../components/ProductPromo";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavbarComponent>
        <div className="pt-5">
          <div className="hidden min-[700px]:grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <CarouselComponent autoPlay={true} infiniteLoop={true}>
                <div>
                  <img alt="coffee" src={Coffee} className="object-cover h-[308px]"/>
                </div>
                <div>
                  <img alt="coffee" src={Coffee} className="object-cover h-[308px]"/>
                </div>
              </CarouselComponent>
            </div>
            <div>
              <div className="grid grid-rows-2 gap-2">
                <div>
                  <CarouselComponent autoPlay={true} infiniteLoop={true}>
                    <div>
                      <img
                        alt="coffee"
                        src={Coffee}
                        className="object-cover h-[150px]"
                      />
                    </div>
                  </CarouselComponent>
                </div>
                <div>
                  <CarouselComponent autoPlay={true} infiniteLoop={true}>
                    <div>
                      <img
                        alt="coffee"
                        src={Coffee}
                        className="object-cover h-[150px]"
                      />
                    </div>
                  </CarouselComponent>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden max-[700px]:grid grid-cols-1">
            <div>
              <CarouselComponent autoPlay={true} infiniteLoop={true}>
                <div>
                  <img alt="coffee" src={Coffee} className="object-cover h-[308px]"/>
                </div>
                <div>
                  <img alt="coffee" src={Coffee} className="object-cover h-[308px]"/>
                </div>
              </CarouselComponent>
            </div>
            
          </div>
        </div>

        <CategoryComponent />
        <FlashSalesComponent />
        <ProductPromo />
        <BestSelling />
        <ProductComponent />
        <div className="text-center mt-5 mb-2">
          <Link
            // to="/product-list"
            className="bg-[#fa5a96] text-white p-2 rounded-sm hover:bg-[#ffafcc] shadow-lg "
          >
            Lihat Lainnya
          </Link>
        </div>
      </NavbarComponent>
      <Footer className=" mt-10 border-t-4 border-[#fa5a96]" />
    </div>
  );
};

export default Home;
