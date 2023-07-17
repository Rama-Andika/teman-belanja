import { Checkbox, Table } from "flowbite-react";
import NavbarComponent from "../components/NavbarComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { keranjang } from "../data/dummy";
import { useEffect } from "react";
import { Backdrop, Fade, Modal } from "@mui/material";
import { useStateContext } from "../contexts/ContextProvider";
import { toast } from "react-hot-toast";

const Keranjang = () => {

  const [id, setId] = useState([]);
  const [qty, setQty] = useState([]);
  const [subTotal, setSubTotal] = useState(new Array(keranjang.length).fill(0));
  const [grandTotal, setGrandTotal] = useState(0);
  const [data, setData] = useState(keranjang);

  const { screenSize, setScreenSize } = useStateContext();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const nominal = 20100;
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  const onChangeAllCheckbox = (e, items) => {
    const checbox_all = document.getElementsByName("checkbox_all");

    const listCheckbox = document.getElementsByName("checkbox_item");

    const id_copy = [...id];

    if (e.target.checked) {
      for (let index = 0; index < checbox_all.length; index++) {
        checbox_all[index].checked = true;
      }
      for (let index = 0; index < listCheckbox.length; index++) {
        listCheckbox[index].checked = true;
      }

      items.map((item, i) => (id_copy[i] = item.id));

      setId(id_copy);
      itemCheckout(1, 0);
    } else {
      for (let index = 0; index < checbox_all.length; index++) {
        checbox_all[index].checked = false;
      }
      for (let index = 0; index < listCheckbox.length; index++) {
        listCheckbox[index].checked = false;
      }

      items.map((item, i) => (id_copy[i] = undefined));

      setId(id_copy);
      itemCheckout(-1, 0);
    }
  };

  const onChange = (e, i) => {
    const value = parseInt(e.target.value);
    const checbox_all = document.getElementsByName("checkbox_all");
    for (let index = 0; index < checbox_all.length; index++) {
      checbox_all[index].checked = false;
    }

    const id_copy = [...id];

    if (e.target.checked) {
      id_copy[i] = value;
      setId(id_copy);
      itemCheckout(e.target.value, i);
    } else {
      id_copy[i] = undefined;
      setId(id_copy);
      itemCheckout(undefined, i);
    }
  };

  const onClickMinus = (index, item) => {
    const qty_copy = [...qty];
    const subTotal_copy = [...subTotal];

    if (qty_copy[index] > 1) {
      qty_copy[index] -= 1;
    }

    subTotal_copy[index] = qty_copy[index] * item.price;

    setQty(qty_copy);
    setSubTotal(subTotal_copy);

    if (id[index] !== undefined) {
      itemCheckout(3, index, item.price);
    }
  };

  const onClickPlus = (index, item) => {
    const qty_copy = [...qty];
    const subTotal_copy = [...subTotal];

    qty_copy[index] += 1;
    if (typeof qty_copy[index] === "string") {
      qty_copy[index] = parseInt(qty_copy[index]);
    }
    subTotal_copy[index] = qty_copy[index] * item.price;

    setQty(qty_copy);
    setSubTotal(subTotal_copy);

    if (id[index] !== undefined) {
      itemCheckout(2, index, item.price);
    }
  };

  const onChangeQty = (e, index, item) => {
    const qty_copy = [...qty];
    const subTotal_copy = [...subTotal];

    let value = parseInt(e.target.value);
    if (isNaN(value)) {
      qty_copy[index] = "";
      subTotal_copy[index] = 0;
    } else {
      if (value >= 0) {
        qty_copy[index] = value;
        subTotal_copy[index] = qty_copy[index] * item.price;
      } else {
        subTotal_copy[index] = 0;
      }
    }

    setQty(qty_copy);
    setSubTotal(subTotal_copy);

    if (id[index] !== undefined) {
      itemCheckout(999, index, 0, subTotal_copy[index]);
    }
  };

  const itemCheckout = (id = 0, i, price = 0, valueInputan = 0) => {
    //jika pilih centang semua
    if (id === 1) {
      let totalTemp = 0;
      subTotal.map((total, i) => (totalTemp += subTotal[i]));
      setGrandTotal(totalTemp);

      //jika pilih uncentang semua
    } else if (id === -1) {
      let totalTemp = 0;
      subTotal.map((total, i) => (totalTemp -= subTotal[i]));
      if (totalTemp < 0) {
        setGrandTotal(0);
      } else {
        setGrandTotal(totalTemp);
      }

      //jika click tombol plus
    } else if (id === 2) {
      setGrandTotal((grandTotal) => grandTotal + price);

      //jika click tombol minus
    } else if (id === 3) {
      qty[i] > 1 && setGrandTotal((grandTotal) => grandTotal - price);

      //jika ganti qty dari inputan
    } else if (id === 999) {
      setGrandTotal((grandTotal) => grandTotal - subTotal[i]);
      if (grandTotal < 0) {
        setGrandTotal(0);
      }

      setGrandTotal((grandTotal) => grandTotal + valueInputan);
    }

    //jika pilih centang per item
    else {
      if (id === 0) {
        setGrandTotal((grandTotal) => grandTotal - subTotal[i]);
      } else if (id !== 0) {
        setGrandTotal((grandTotal) => grandTotal + subTotal[i]);
      }
    }
  };

  const onClickCheckout = () => {
    const idLength = id.length;
    let undefinedLength = 0;
    let valids = [];

    const validid = id.filter((valid) => valid !== undefined).length;

    if (id.length <= 0) {
      toast.error("Barang belum dipilih", {
        duration: 1000,
        position: "top-center",
      });
    } else {
      if (validid === 1) {
        // eslint-disable-next-line array-callback-return
        id.map((itemId, i) => {
          if (itemId !== undefined) {
            // eslint-disable-next-line array-callback-return
            qty.map((quantity, z) => {
              if (i === z) {
                if (quantity <= 0 || quantity === "") {
                  toast.error("Jumlah barang tidak boleh kosong", {
                    duration: 1000,
                    position: "top-center",
                  });

                  return "";
                } else {
                  localStorage.setItem("id", JSON.stringify(id));
                  localStorage.setItem("qty", JSON.stringify(qty));
                  localStorage.setItem("sub_total", JSON.stringify(subTotal));
                  localStorage.setItem("grand_total", grandTotal);
                  localStorage.setItem("data", JSON.stringify(data));

                  navigate(`/checkout/state=${makeRandomString(100)}`);
                }
              }
            });
          }
        });
      } else {
        // eslint-disable-next-line array-callback-return
        id.map((item, i) => {
          if (item !== undefined) {
            // eslint-disable-next-line array-callback-return
            qty.map((quantity, z) => {
              if (i === z) {
                if (quantity <= 0 || quantity === "") {
                  toast.error("Jumlah barang tidak boleh kosong", {
                    duration: 1000,
                    position: "top-center",
                  });
                  valids[z] = 0;
                } else {
                  valids[z] = 1;
                }
              }
            });

            // eslint-disable-next-line array-callback-return

            const validLength = valids.filter((valid) => valid === 1).length;
            const validIdLength = id.filter(
              (item) => item !== undefined
            ).length;

            if (validLength === validIdLength) {
              localStorage.setItem("id", JSON.stringify(id));
              localStorage.setItem("qty", JSON.stringify(qty));
              localStorage.setItem("sub_total", JSON.stringify(subTotal));
              localStorage.setItem("grand_total", grandTotal);
              localStorage.setItem("data", JSON.stringify(data));

              navigate(`/checkout/state=${makeRandomString(100)}`);
            }
          } else {
            undefinedLength += 1;
            if (idLength === undefinedLength) {
              toast.error("Barang belum dipilih", {
                duration: 1000,
                position: "top-center",
              });
            }
          }
        });
      }
    }
  };

  const deleteItem = (i) => {
    const data_copy = [...data];
    const qty_copy = [...qty];
    const subTotal_copy = [...subTotal];
    const id_copy = [...id];

    localStorage.removeItem("id");
    localStorage.removeItem("qty");
    localStorage.removeItem("sub_total");
    localStorage.removeItem("grand_total");
    localStorage.removeItem("data");

    if (id[i] !== undefined) {
      setGrandTotal((grandTotal) => grandTotal - subTotal[i]);
      localStorage.setItem("grand_total", grandTotal - subTotal[i]);
    }

    data_copy.splice(i, 1);
    qty_copy.splice(i, 1);
    subTotal_copy.splice(i, 1);
    id_copy.splice(i, 1);

    setQty(qty_copy);
    setSubTotal(subTotal_copy);
    setId(id_copy);
    setData(data_copy);

    localStorage.setItem("id", JSON.stringify(id_copy));
    localStorage.setItem("qty", JSON.stringify(qty_copy));
    localStorage.setItem("sub_total", JSON.stringify(subTotal_copy));
    localStorage.setItem("data", JSON.stringify(data_copy));
  };

  function makeRandomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  useEffect(() => {
    const subTotal_copy = [...subTotal];
    const qty_copy = [...qty];
    const id_copy = [...id];

    const localStorageId = JSON.parse(localStorage.getItem("id"));
    const localStorageQty = JSON.parse(localStorage.getItem("qty"));
    const localStorageSubTotal = JSON.parse(localStorage.getItem("sub_total"));
    const localStorageGrandTotal = localStorage.getItem("grand_total");

    const localStorageData = JSON.parse(localStorage.getItem("data"));

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
    } else {
      // eslint-disable-next-line array-callback-return
      data.map((item, i) => {
        qty_copy[i] = item.qty;
      });
      setQty(qty_copy);
    }

    if (localStorageSubTotal !== null) {
      setSubTotal(localStorageSubTotal);
    } else {
      // eslint-disable-next-line array-callback-return
      data.map((item, i) => {
        subTotal_copy[i] = item.price * item.qty;
      });
      setSubTotal(subTotal_copy);
    }

    if (localStorageGrandTotal !== null) {
      setGrandTotal(parseFloat(localStorageGrandTotal));
    }

    if (localStorageData !== null) {
      setData(localStorageData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                      <Checkbox
                        defaultValue={0}
                        name="checkbox_all"
                        onChange={(e) => onChangeAllCheckbox(e, data)}
                      />
                    </Table.HeadCell>
                    <Table.HeadCell>Product name</Table.HeadCell>
                    <Table.HeadCell>Harga</Table.HeadCell>
                    <Table.HeadCell>Kuantitas</Table.HeadCell>
                    <Table.HeadCell>Total Harga</Table.HeadCell>
                    <Table.HeadCell>Aksi</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {data.map((item, i) => (
                      <>
                        {console.log(localStorage.getItem("grand_total"))}
                        <Table.Row
                          key={i}
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                          <Table.Cell className="p-4">
                            <Checkbox
                              name="checkbox_item"
                              value={item.id}
                              onChange={(e) => onChange(e, i)}
                              checked={id[i] !== undefined ? true : false}
                            />
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
                              <div>{item.name}</div>
                            </div>
                          </Table.Cell>
                          <Table.Cell>
                            <div>Rp.{numberWithCommas(item.price)}</div>
                            <div className="hidden">{nominal}</div>
                          </Table.Cell>
                          <Table.Cell>
                            <div className="flex items-center max-[751px]:mt-10 max-[363px]:text-sm max-[334px]:text-xs">
                              <button
                                onClick={() => onClickMinus(i, item)}
                                className="py-0 h-8 px-2 border border-slate-300 rounded-sm"
                              >
                                -
                              </button>

                              <input
                                type="number"
                                min="0"
                                className="text-center  border-slate-300"
                                value={qty[i]}
                                style={{ width: "60px", height: "30px" }}
                                onChange={(e) => onChangeQty(e, i, item)}
                              />

                              <button
                                onClick={() => onClickPlus(i, item)}
                                className="py-0 h-8 px-2 border border-slate-300 rounded-sm"
                              >
                                +
                              </button>
                            </div>
                          </Table.Cell>
                          <Table.Cell>
                            <div>Rp.{numberWithCommas(subTotal[i])}</div>
                          </Table.Cell>
                          <Table.Cell>
                            {id[i] !== undefined ? (
                              <button
                                type="button"
                                onClick={() => deleteItem(i)}
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 bg-transparent"
                              >
                                <p>Hapus</p>
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => deleteItem(i)}
                                className="font-medium text-slate-400 dark:text-cyan-500 bg-transparent cursor-not-allowed"
                                disabled
                              >
                                <p>Hapus</p>
                              </button>
                            )}
                          </Table.Cell>
                        </Table.Row>
                      </>
                    ))}
                  </Table.Body>
                </Table>
              </div>
              <div>
                {data.map((item, i) => (
                  <div className="max-[749px]:block min-[750px]:hidden p-3 bg-white rounded-sm shadow-sm">
                    <div className="grid grid-cols-2 gap-10">
                      <div className="flex justify-start items-center gap-1">
                        <Checkbox
                          name="checkbox_item"
                          value={item.id}
                          onChange={(e) => onChange(e, i)}
                          checked={id[i] !== undefined ? true : false}
                        />
                        <img alt={unsplashimg.alt} src={unsplashimg.src} />
                      </div>
                      <div className="flex flex-col font-roboto ">
                        <div className="w-full overflow-ellipsis overflow-hidden">
                          Nescafe
                          Coffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        </div>
                        <div className="text-[#fa5a96] font-bold">
                          Rp.{numberWithCommas(item.price)}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                      <div className="flex items-center  max-[363px]:text-sm max-[334px]:text-xs">
                        <button
                          onClick={() => onClickMinus(i, item)}
                          className="py-0 h-8 px-2 border border-slate-300 rounded-sm"
                        >
                          -
                        </button>

                        <input
                          type="number"
                          min="0"
                          className="text-center  border-slate-300"
                          value={qty[i]}
                          style={{ width: "60px", height: "30px" }}
                          onChange={(e) => onChangeQty(e, i, item)}
                        />

                        <button
                          onClick={() => onClickPlus(i, item)}
                          className="py-0 h-8 px-2 border border-slate-300 rounded-sm"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-red-400">Tersisa 1000 buah</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-10 sticky bottom-0 ">
            <div className=" bg-[#fa5a96] relative">
              <div className="flex items-center gap-2 text-white px-5 absolute top-5 left-0">
                <Checkbox
                  defaultValue={0}
                  name="checkbox_all"
                  onChange={(e) => onChangeAllCheckbox(e, data)}
                />
                <div className="whitespace-nowrap">Pilih Semua</div>
              </div>
              <div className="flex max-[528px]:flex-col max-[528px]:items-end justify-end items-center gap-5 w-full py-12  px-10 text-white font-bold">
                <div className="flex gap-5">
                  <div className="">Total</div>
                  <div className="">:</div>
                  <div className="">Rp.{numberWithCommas(grandTotal)}</div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={onClickCheckout}
                    className="bg-orange-400 p-2 px-5 text-white rounded-sm"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <div
                  className={`bg-white py-5 px-7 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-[400px] overflow-y-auto  ${
                    screenSize <= 548 ? "w-[100%]" : "w-[500px]"
                  }`}
                >
                  <div>Error</div>
                </div>
              </Fade>
            </Modal>
          </div>
        </NavbarComponent>
        {/* <Footer className="bg-blue-400 min-[750px]:absolute min-[750px]:bottom-0 min-[750px]:left-0 min-[750px]:right-0 " /> */}
      </div>
    </>
  );
};

export default Keranjang;
