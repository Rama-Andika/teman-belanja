import { Table } from "flowbite-react";
import { MdLocationPin } from "react-icons/md";
import NavbarComponent from "../components/NavbarComponent";
import { keranjang } from "../data/dummy";
import { useEffect } from "react";
import { useState } from "react";
import ApiPayment from "../api/ApiPayment";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const [id, setId] = useState([]);
  const [qty, setQty] = useState([]);
  const [subTotal, setSubTotal] = useState(new Array(keranjang.length).fill(0));
  const [datas, setDatas] = useState(keranjang);

  const [token, setToken] = useState("");
  const navigate = useNavigate();

  let grandSubTotal = 0;
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

  const getToken = async () => {
    await ApiPayment.post(`/33`)
      .then((response) => {
        setToken(response.data.data);
      })
      .catch((error) => {
        alert("Payment Failed!");
      });
  };

  const onClickPesanan = () => {
    if (token !== "") {
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          alert("payment success!");
          console.log(result);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          alert("wating your payment!");
          console.log(result);
        },
        onError: function (result) {
          /* You may add your own implementation here */
          alert("payment failed!");
          console.log(result);
        },
        onClose: function () {
          navigate(location.pathname)
        },
      });
    }
  };

  useEffect(() => {
    console.log(location.pathname)
    getToken();

    const subTotal_copy = [...subTotal];
    const qty_copy = [...qty];
    const id_copy = [...id];

    const localStorageId = JSON.parse(localStorage.getItem("id"));
    const localStorageQty = JSON.parse(localStorage.getItem("qty"));
    const localStorageSubTotal = JSON.parse(localStorage.getItem("sub_total"));
    const localStorageDatas = JSON.parse(localStorage.getItem("data"));

    if (localStorageId !== null) {
      // eslint-disable-next-line array-callback-return
      localStorageId.map((data, i) => {
        if (data === null) {
          id_copy[i] = undefined;
        } else {
          id_copy[i] = data;
        }
      });
      setId(id_copy);
    }

    if (localStorageQty !== null) {
      // eslint-disable-next-line array-callback-return
      localStorageQty.map((data, i) => {
        if (data === "") {
          qty_copy[i] = 0;
        } else {
          qty_copy[i] = data;
        }
      });

      setQty(qty_copy);
    }

    if (localStorageSubTotal !== null) {
      // eslint-disable-next-line array-callback-return
      localStorageSubTotal.map((data, i) => {
        subTotal_copy[i] = data;
      });

      setSubTotal(subTotal_copy);
    }

    if (localStorageDatas !== null) {
      setDatas(localStorageDatas);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-[750px]:min-h-screen min-[750px]:relative">
      <NavbarComponent>
        <div className="pt-5">
          <div className="font-roboto text-xl mb-3 px-5">Checkout</div>

          <div className="">
            <div className="mt-10 mb-10 font-roboto bg-[#fa5a96] text-white p-8">
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
                  <>
                    {datas.map((data) =>
                      id.map(
                        (item, i) =>
                          data.id === item && (
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
                                  <div>{data.name}</div>
                                </div>
                              </Table.Cell>
                              <Table.Cell>
                                <div>Rp.{numberWithCommas(data.price)}</div>
                              </Table.Cell>
                              <Table.Cell>
                                <div className="text-center">
                                  <div className="">{qty[i]}</div>
                                </div>
                              </Table.Cell>
                              <Table.Cell>
                                <div>Rp.{numberWithCommas(subTotal[i])}</div>
                                <div className="hidden">
                                  {" "}
                                  {(grandSubTotal += subTotal[i])}
                                </div>
                              </Table.Cell>
                            </Table.Row>
                          )
                      )
                    )}
                  </>
                </Table.Body>
              </Table>
            </div>
            <div>
              {datas.map((data) =>
                id.map(
                  (item, i) =>
                    data.id === item && (
                      <div
                        key={i}
                        className="max-[749px]:block min-[750px]:hidden p-3 bg-white rounded-sm shadow-sm"
                      >
                        <div className="grid grid-cols-2 gap-5">
                          <div>
                            <img alt={unsplashimg.alt} src={unsplashimg.src} />
                          </div>
                          <div className="flex flex-col font-roboto">
                            <div className="w-full overflow-ellipsis overflow-hidden">
                              {data.name}
                            </div>
                            <div className="text-[#219ebc]">
                              Rp.{numberWithCommas(data.price)}
                            </div>
                            <div className="text-[#219ebc] hidden">
                              {nominal}
                            </div>
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
                    )
                )
              )}
            </div>
          </div>
        </div>
        <div className=" mt-10">
          <div className="flex flex-col justify-end min-[375px]:items-end w-full bg-white p-5 text-[12px] font-semibold">
            <div className="flex gap-5 justify-center max-[320px]:justify-between">
              <div className="">Sub Total</div>

              <div className="max-[375px]:w-[150px] w-[178.94px] text-right text-slate-400 text-[14px]">
                Rp.{numberWithCommas(grandSubTotal)}
              </div>
            </div>
            <div className="flex max-[320px]:justify-between max-[320px]:items-end max-[320px]:gap-1 gap-5 mt-2 justify-center">
              <div className="">Ongkos kirim</div>

              <div className="max-[375px]:w-[150px] w-[178.94px] text-right text-slate-400 text-[14px]">
                Rp.{numberWithCommas(200000)}
              </div>
            </div>
            <div className="flex max-[320px]:justify-between gap-5 items-center">
              <div className="">Total</div>

              <div className="max-[375px]:w-[150px] max-[320px]:w-[200px] w-[178.94px] text-[28px] text-[#fa5a96] text-right">
                Rp.{numberWithCommas(grandSubTotal + 10000)}
              </div>
            </div>

            <div
              onClick={onClickPesanan}
              className="bg-[#fa5a96] py-2 px-5 text-white rounded-sm mt-10 cursor-pointer text-center"
            >
              Buat Pesanan
            </div>
          </div>
        </div>
      </NavbarComponent>
      {/* <Footer className="bg-blue-400 min-[750px]:absolute min-[750px]:bottom-0 min-[750px]:left-0 min-[750px]:right-0 " /> */}
    </div>
  );
};

export default Checkout;
