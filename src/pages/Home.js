import CarouselComponent from "../components/CarouselComponent";
import CategoryComponent from "../components/CategoryComponent";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import ProductComponent from "../components/ProductComponent";
import FlashSalesComponent from "../components/FlashSalesComponent";
import BestSelling from "../components/BestSelling";
import ProductPromo from "../components/ProductPromo";
import { Link } from "react-router-dom";
import PromoImage from "../assets/images/promo.png";
import PromoImage2 from "../assets/images/promo1.png";
import PromoImage3 from "../assets/images/promo2.png";

const Home = () => {
  return (
    <div className="font-roboto">
      <NavbarComponent>
        <div className="pt-5">
          <div className="hidden min-[700px]:grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <CarouselComponent autoPlay={true} infiniteLoop={true}>
                <div>
                  <img
                    alt="coffee"
                    src={PromoImage}
                    className="object-cover h-[237.3px] max-[400px]:h-[240px]"
                  />
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
                        src={PromoImage2}
                        className="object-cover h-[115px]"
                      />
                    </div>
                  </CarouselComponent>
                </div>
                <div>
                  <CarouselComponent autoPlay={true} infiniteLoop={true}>
                    <div>
                      <img
                        alt="coffee"
                        src={PromoImage3}
                        className="object-cover h-[115px]"
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
                  <img
                    alt="coffee"
                    src={PromoImage}
                    className="object-cover w-full"
                  />
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
            to="/product-rekomendasi-list"
            className="bg-[#fa5a96] text-white py-3 px-[60px] rounded-lg hover:bg-[#ffafcc] shadow-lg "
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
