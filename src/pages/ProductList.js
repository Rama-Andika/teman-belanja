import { Link } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Dropdown } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

const ProductList = () => {
  const terkaitPage = useRef();
  const terbaruPage = useRef();
  const [page, setPage] = useState("");
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };

  const arrayCategory = [1, 2, 3, 4, 5, 6];

  const terkaitHandle = () => {
    terkaitPage.current.classList.remove("hidden");
    if (!terbaruPage.current.classList.contains("hidden")) {
      terbaruPage.current.classList.add("hidden");
    }
    if (!terkaitPage.current.classList.contains("hidden")) {
      setPage("Terkait");
    }
  };

  const terbaruHandle = () => {
    terbaruPage.current.classList.remove("hidden");
    if (!terkaitPage.current.classList.contains("hidden")) {
      terkaitPage.current.classList.add("hidden");
    }
    if (!terbaruPage.current.classList.contains("hidden")) {
      setPage("Terbaru");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    terkaitPage.current.classList.remove("hidden");
  }, []);
  return (
    <>
      <NavbarComponent>
        <div className="pt-5 font-roboto">
          <div className="grid grid-cols-1">
            <div className="relative hidden min-[465px]:block">
              <Tabs>
                <TabList>
                  <Tab>Terkait</Tab>
                  <Tab>Terbaru</Tab>
                  <Tab>Terlaris</Tab>
                </TabList>

                <TabPanel>
                  <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 min-[1170px]:grid-cols-5 gap-2 ">
                    {arrayCategory.map((i) => (
                      <Link key={i} to="/product-detail/nescafe-coffee/4">
                        <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white">
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
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
              <div className="absolute top-0 left-60">
                <Dropdown label="Harga" class="btn-harga">
                  <Dropdown.Item className="whitespace-nowrap">
                    Terendah ke tertinggi
                  </Dropdown.Item>
                  <Dropdown.Item>Tertinggi ke terendah</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
            <div className="flex gap-2 min-[465px]:hidden">
              <Dropdown label="Sort" class="btn-sort" placement="right">
                <Dropdown.Item onClick={() => terkaitHandle()}>
                  Terkait
                </Dropdown.Item>
                <Dropdown.Item onClick={() => terbaruHandle()}>
                  Terbaru
                </Dropdown.Item>
                <Dropdown.Item>Terlaris</Dropdown.Item>
              </Dropdown>
              <Dropdown label="Harga" class="btn-harga">
                <Dropdown.Item>Terendah ke tertinggi</Dropdown.Item>
                <Dropdown.Item>Tertinggi ke terendah</Dropdown.Item>
              </Dropdown>
            </div>

            <div ref={terkaitPage} className="hidden min-[465px]:hidden">
              <div className="mt-5">{page}</div>
              <div className=" mt-3 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 min-[1170px]:grid-cols-5 gap-2 ">
                {arrayCategory.map((i) => (
                  <Link key={i} to="/product-detail/nescafe-coffee/4">
                    <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white">
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
            </div>
            <div ref={terbaruPage} className="hidden min-[465px]:hidden">
              <div className="mt-5 border-b-2 border-[#fa5a96]">{page}</div>
              <div className=" mt-3 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 grid-cols-2 max-[375px]:grid-cols-1 min-[1170px]:grid-cols-5 gap-2 ">
                {arrayCategory.map((i) => (
                  <Link key={i} to="/product-detail/nescafe-coffee/4">
                    <div className="transition-all hover:scale-x-[1.01] hover:scale-y-[1.01] bg-white">
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
            </div>
          </div>
        </div>
      </NavbarComponent>
      <Footer className=" mt-10 border-t-4 border-[#fa5a96]" />
    </>
  );
};

export default ProductList;
