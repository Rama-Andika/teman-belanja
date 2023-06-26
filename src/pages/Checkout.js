import { Table } from "flowbite-react";
import { MdLocationPin } from "react-icons/md";
import NavbarComponent from "../components/NavbarComponent";

const Checkout = () => {
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
            <div className="font-roboto text-xl mb-3">
              Checkout
            </div>

            <div className="">
              <div className="mt-10 mb-10 font-roboto bg-[#8ecae6] text-white p-8">
                <div className="mb-2 flex gap-2 items-center font-semibold ">
                  <div>
                    <MdLocationPin />
                  </div>
                  <div>Alamat Pengiriman</div>
                </div>
                <div className="text-sm">
                  <b>Indah (08234259525)</b> Jl Karang Anyar 55 Bl B/17 Karang
                  Anyar, Dki Jakarta
                </div>
              </div>
              <div className="max-[750px]:hidden overflow-x-auto ">
                <Table hoverable className="bg-slate-400">
                  <Table.Head>
                    <Table.HeadCell>Product name</Table.HeadCell>
                    <Table.HeadCell>Harga</Table.HeadCell>
                    <Table.HeadCell>Kuantitas</Table.HeadCell>
                    <Table.HeadCell>Total Harga</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {array.map((i) => (
                      <Table.Row
                        key={i}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
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
                          <div className="text-center">
                            <div className="">1</div>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <div>Rp.{numberWithCommas(nominal)}</div>
                          <div className="hidden">{nominal}</div>
                          <div className="hidden">{(subTotal += nominal)}</div>
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
                    <div className="max-[363px]:text-sm max-[334px]:text-xs">
                      <div className="">1</div>
                    </div>
                    <div className="text-red-400">
                      Rp.{numberWithCommas(nominal)}
                    </div>
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
                    <div className="max-[363px]:text-sm max-[334px]:text-xs">
                      <div className="text-center">1</div>
                    </div>
                    <div className="text-red-400">
                      Rp.{numberWithCommas(nominal)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10">
            <div className="flex flex-col max-[528px]:items-end justify-end items-end w-full bg-[#8ecae6] p-5 text-white text-[12px] font-semibold">
              <div className="flex gap-5">
                <div className="">Sub Total</div>
                <div className="">:</div>
                <div className="">Rp.{numberWithCommas(subTotal)}</div>
              </div>
              <div className="flex gap-5">
                <div className="">Total ongkos kirim</div>
                <div className="">:</div>
                <div className="">Rp.{numberWithCommas(subTotal)}</div>
              </div>
              <div className="flex gap-5">
                <div className="">Total</div>
                <div className="">:</div>
                <div className="">Rp.{numberWithCommas(subTotal)}</div>
              </div>

              <div className="bg-orange-400 p-2 px-5 text-white rounded-sm mt-2">
                Buat Pesanan
              </div>
            </div>
          </div>
        </NavbarComponent>
        {/* <Footer className="bg-blue-400 min-[750px]:absolute min-[750px]:bottom-0 min-[750px]:left-0 min-[750px]:right-0 " /> */}
      </div>
    </>
  );
};

export default Checkout;
