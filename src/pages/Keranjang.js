import { Checkbox, Table } from "flowbite-react";
import NavbarComponent from "../components/NavbarComponent";
import { Link } from "react-router-dom";

const Keranjang = () => {
  let subTotal = 0;
  const nominal = 10000000;
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
  const array = [1, 2];
  return (
    <>
      <div className="min-[750px]:min-h-screen min-[750px]:relative">
        <NavbarComponent>
          <div className="pt-5">
            <div className="font-roboto text-xl mb-3">Keranjang</div>
            <div className="">
              <div className="max-[750px]:hidden overflow-x-auto">
                <Table hoverable>
                  <Table.Head>
                    <Table.HeadCell className="p-4">
                      <Checkbox />
                    </Table.HeadCell>
                    <Table.HeadCell>Product name</Table.HeadCell>
                    <Table.HeadCell>Harga</Table.HeadCell>
                    <Table.HeadCell>Kuantitas</Table.HeadCell>
                    <Table.HeadCell>Total Harga</Table.HeadCell>
                    <Table.HeadCell>Aksi</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {array.map((i) => (
                      <Table.Row
                        key={i}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="p-4">
                          <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          <div className="flex gap-2">
                            <div className="w-[100px]">
                              <img
                                alt={unsplashimg.alt}
                                src={unsplashimg.src}
                                className="object-cover"
                              />
                            </div>
                            <div>Nescafe Coffee</div>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <div>Rp.{numberWithCommas(nominal)}</div>
                          <div className="hidden">{nominal}</div>
                        </Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center max-[751px]:mt-10 max-[363px]:text-sm max-[334px]:text-xs">
                            <div>
                              <button className="py-0 h-8 px-2 bg-slate-200 rounded-sm">
                                -
                              </button>
                            </div>

                            <div className="border">
                              <input
                                type="number"
                                min="1"
                                className="text-center border border-slate-300"
                                value="1"
                                style={{ width: "60px", height: "30px" }}
                              />
                            </div>

                            <div>
                              <button className="py-0 h-8 px-2 bg-slate-200 rounded-sm">
                                +
                              </button>
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <div>Rp.{numberWithCommas(nominal)}</div>
                          <div className="hidden">{nominal}</div>
                          <div className="hidden">{(subTotal += nominal)}</div>
                        </Table.Cell>
                        <Table.Cell>
                          <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/tables"
                          >
                            <p>Edit</p>
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
              <div>
                <div className="max-[749px]:block min-[750px]:hidden p-3 bg-slate-100 rounded-sm shadow-sm">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <img alt={unsplashimg.alt} src={unsplashimg.src} />
                    </div>
                    <div className="flex flex-col font-roboto">
                      <div>Nescafe Coffe</div>
                      <div className="text-[#219ebc]">
                        Rp.{numberWithCommas(nominal)}
                      </div>
                      <div className="text-[#219ebc] hidden">{nominal}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-7">
                    <div className="flex items-center max-[363px]:text-sm max-[334px]:text-xs">
                      <div>
                        <button className="py-0 h-8 px-2 bg-slate-200 rounded-sm">
                          -
                        </button>
                      </div>

                      <div className="border">
                        <input
                          type="number"
                          min="1"
                          className="text-center border border-slate-300"
                          value="1"
                          style={{ width: "50px", height: "30px" }}
                        />
                      </div>

                      <div>
                        <button className="py-0 h-8 px-2 bg-slate-200 rounded-sm">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-red-400">Tersisa 1000 buah</div>
                  </div>
                </div>
                <div className="mt-4 max-[749px]:block min-[750px]:hidden p-3 bg-slate-100 rounded-sm shadow-sm">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <img alt={unsplashimg.alt} src={unsplashimg.src} />
                    </div>
                    <div className="flex flex-col font-roboto">
                      <div>Nescafe Coffe</div>
                      <div className="text-[#219ebc]">
                        Rp.{numberWithCommas(nominal)}
                      </div>
                      <div className="text-[#219ebc] hidden">{nominal}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-7">
                    <div className="flex items-center max-[363px]:text-sm max-[334px]:text-xs">
                      <div>
                        <button className="py-0 h-8 px-2 bg-slate-200 rounded-sm">
                          -
                        </button>
                      </div>

                      <div className="border">
                        <input
                          type="number"
                          min="1"
                          className="text-center border border-slate-300"
                          value="1"
                          style={{ width: "50px", height: "30px" }}
                        />
                      </div>

                      <div>
                        <button className="py-0 h-8 px-2 bg-slate-200 rounded-sm">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-red-400">Tersisa 1000 buah</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 sticky bottom-0 ">
            <div className="flex max-[528px]:flex-col max-[528px]:items-end justify-end items-center gap-5 w-full bg-[#fa5a96] p-10 text-white font-bold">
              <div className="flex gap-5">
                <div className="">Total</div>
                <div className="">:</div>
                <div className="">Rp.{numberWithCommas(subTotal)}</div>
              </div>

              <Link to="/checkout">
                <div className="bg-orange-400 p-2 px-5 text-white rounded-sm">
                  Checkout
                </div>
              </Link>
            </div>
          </div>
        </NavbarComponent>
        {/* <Footer className="bg-blue-400 min-[750px]:absolute min-[750px]:bottom-0 min-[750px]:left-0 min-[750px]:right-0 " /> */}
      </div>
    </>
  );
};

export default Keranjang;
