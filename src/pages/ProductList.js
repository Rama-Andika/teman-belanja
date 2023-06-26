import { Link } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import { Tabs } from "flowbite-react";
import Footer from "../components/Footer";

const ProductList = () => {
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };

  const arrayCategory = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <NavbarComponent>
        <div className="pt-5 font-roboto">
          <div className="grid grid-cols-10">
            <div className="col-span-2 ms-5">
                <div>FILTER</div>
            </div>
            <div className="col-span-8">
              <Tabs.Group aria-label="Tabs with underline">
                <Tabs.Item disabled title="Urutkan">
                  <p>Urutkan</p>
                </Tabs.Item>
                <Tabs.Item className="text-red-500" active title="Terkait">
                  <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 min-[1170px]:grid-cols-5 gap-2 ">
                    {arrayCategory.map((i) => (
                      <Link key={i} to="/product-detail/nescafe-coffee/4">
                        <div className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] bg-white">
                          <img
                            alt=""
                            src={unsplashimg.src}
                            className="h-[200px] object-cover"
                          />
                          <div className="text-left max-[434px]:text-sm ">
                            Nescafe Coffee
                          </div>
                          <div className="text-left mt-5 font-bold text-[#fa5a96] max-[434px]:text-sm">
                            Rp. 10.000.000
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Terbaru">
                  <p>
                    This is
                    <span className="font-medium text-gray-800 dark:text-white">
                      Dashboard tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </Tabs.Item>
                <Tabs.Item title="Terlaris">
                  <p>
                    This is
                    <span className="font-medium text-gray-800 dark:text-white">
                      Settings tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </Tabs.Item>
                <Tabs.Item title="Harga">
                  <p>
                    This is
                    <span className="font-medium text-gray-800 dark:text-white">
                      Contacts tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </Tabs.Item>
              </Tabs.Group>
            </div>
          </div>
        </div>
      </NavbarComponent>
      <Footer className=" mt-10 border-t-4 border-[#fa5a96]" />
    </>
  );
};

export default ProductList;
