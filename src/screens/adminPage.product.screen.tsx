import {
  Modal,
  Toggle,
  Button,
  ButtonToolbar,
  Placeholder,
  Loader,
} from "rsuite";
import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import creatProductApi from "../api/creatProduct.api";
import deletProductApi from "../api/deletProduct.api";
import EditProductApi from "../api/editProduct.api";
//import UploadApi from "../api/Upload.api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Template from "../components/Template.admin";
import { product } from "../types";
import getProductApi from "../api/getProduct.api";
import PlaceholderParagraph from "rsuite/esm/Placeholder/PlaceholderParagraph";

export default function ProductScreen(product: product) {
  ////////////////////////////////////////////////////////////////////////
  //variable

  let idOfValue: number;
  let data: FormData = new FormData();
  let val;
  /////////////////////////////////////////////////////////////////////////////
  //state
  const [active, setActive] = useState(false);
  const [name, setname] = useState<string>();
  const [description, setdescription] = useState<string>();
  const [image, setImage] = useState<FileList>();
  const [id, setId] = useState<number>();
  const [lan, setLan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setvalue] = useState<string>();
  const [brandId, setBrandId] = useState<number>();
  const [price, setPrice] = useState();
  const [stuck, setstuck] = useState(0);
  const [brandState, setbrandState] = useState([]);

  //////////////////////////////////////////////////////////////////////////////////////
  //hooks
  useEffect(() => {
    if (product) {
      showProduct(product);
    }
  }, [product.product]);
  /////////////////////////////////////////////////////////////////////////////
  //function
  const showProduct = async (product: any) => {
    setLan(product.product);
    setLoading(false);
  };

  const showBrand = async (brand: any) => {
    await setTimeout(() => {
      if (brand) {
        setbrandState(brand);
      }
    }, 3000);
  };
  const get = async () => {
    let res = await getProductApi();
    console.log(res.data);
  };

  const onChooseImage = async () => {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png, image/jpeg, image/jpg";
    input.click();
    input.addEventListener("input", uploadImage);
  };

  const uploadImage = async (e: any) => {
    const pickedImage = e.target.files[0];
    console.log(pickedImage)
    if (pickedImage) {
      const ref = `public/brand`;
      data.append("file", pickedImage, pickedImage.name);
      data.append("ref", ref);
      console.log(data.getAll("file"));
      console.log(data.getAll("ref"));
    }
   // imagePreview(e);
  };
  const imagePreview = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const edit = async () => {
    const Obg: product = { name, description, image, brandId, price };
    let Response = await EditProductApi(Obg);
    if (Response == "done") {
      alert("ویرایش محصول انجام شد");
      window.location.reload();
    } else {
      document.location.href = "/";
    }
    setActive(!active);
  };

  const del = async () => {
    lan.map(async (item: any) => {
      if (item.id == id) {
        console.log(id);
        console.log(true);
        const newArray: object = { id };
        const proResponse = await deletProductApi(newArray);
        if (proResponse == "done") {
          alert("ویرایش محصول انجام شد");
          window.location.reload();
        } else {
          document.location.href = "/";
        }
        setActive(!active);
      }
    });
  };

  const creatProduct = async (img: any) => {
    img.append("name", name);
    img.append("description", description);
    img.append("price", price);
    img.append("brandId", brandId);
    console.log(data.getAll("file"));
     await creatProductApi(img).then(async(response)=>{
      if (response.massage === "done") {
        alert("محصول با موفقیت اضاف شد");
         window.location.reload()
      } else {
        // document.location.href = "/"
      }
    }
    ).catch((err)=>{
      console.log(err)
    })
  };

  const setConst = () => {
    lan.map((el: any) => {
      if (el.__v == idOfValue) {
        setname(el.name);
        setdescription(el.description);
        setImage(el.image);
        //setstuck(el.stuck.amount)
        setPrice(el.price);
      }
    });
  };

  const handleClick = (e: any) => {
    idOfValue = e.currentTarget.getAttribute("id-of-value");
    setId(idOfValue);
    setActive(!active);
    console.log(idOfValue);
    setConst();
  };

  const sum = (indexs: any) => {
    lan.map((el: any, index) => {
      if (indexs == index) {
        el.__v = index;
      }
    });
  };
  if (lan.length === 0) {
    return (
      <div>
        <PlaceholderParagraph rows={8} />
        <Loader backdrop content="loading..." vertical />
      </div>
    );
  }
  return (
    <div>
      {lan.length > 0 ? (
        <Template>
          <div
            className="bg-white flex justify-end"
            style={{ fontFamily: "Lalezar" }}
          >
            <div className="bg-white flex-row p-5 lg:p-10 w-full">
              <p className=" text-center text-2xl p-5">محصولات</p>
              <select
                className="flex mt-6 w-72 lg:w-96 md:w-96 py-2 border-2 text-sm border-green-600  rounded-lg shadow-md"
                onChange={(e) => {
                  val = e.target.value;
                  setvalue(val);
                  console.log(val);
                }}
              >
                <option value="all">نمایش محصولات همه برند ها</option>
                {brandState.map((item: any) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
              <p className="border-b-2 bg-white border-green-500 p-6 text-right">
                افزودن محصولات جدید
              </p>
              <div className="flex flex-col justify-start w-10/12">
                <p className="mt-4 text-sm text-right mr-2">برند</p>
                <select
                  className="flex mt-6 w-72 lg:w-96 md:w-96 py-2 border-2 text-sm border-green-600  rounded-lg shadow-md"
                  onChange={(e: any) => {
                    setBrandId(e);
                    console.log(e);
                  }}
                >
                  <option value={undefined}></option>
                  {brandState.map((item: any) => {
                    return <option value={item.id}>{item.title}</option>;
                  })}
                </select>
                <p className="mt-4 text-sm text-right mr-2">نام محصول:</p>
                <input
                  type="text"
                  className="mt-1 border-2 text-sm border-green-600 w-72 lg:w-96 md:w-96 rounded-lg shadow-md px-6 py-2 duration-500"
                  placeholder="عنوان"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
                <p className="mt-6 text-sm text-right mr-2">توضیحات :</p>
                <textarea
                  className="mt-1 border-2 text-sm border-green-600 w-72 lg:w-96 md:w-96 rounded-lg shadow-md px-6 py-2"
                  placeholder="کپشن"
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                />
                <p className="mt-4 text-sm text-right mr-2">موجودی محصول</p>
                <input
                  type="number"
                  className="mt-1 border-2 text-sm border-green-600 w-72 lg:w-96 md:w-96 rounded-lg shadow-md px-6 py-2 duration-500"
                  placeholder="موجودی"
                  onChange={(e: any) => {
                    setstuck(e.target.value);
                  }}
                />
                <p className="mt-4 text-sm text-right mr-2">قیمت محصول</p>
                <input
                  type="number"
                  className="mt-1 border-2 text-sm border-green-600 w-72 lg:w-96 md:w-96 rounded-lg shadow-md px-6 py-2 duration-500"
                  placeholder="قیمت"
                  onChange={(e: any) => {
                    setPrice(e.target.value);
                  }}
                />
                <p className="mt-6 text-sm text-right mr-2">اپلود عکس محصول</p>
                <div className="flex mt-2 flex-col justify-end w-72 ">
                  <div className="relative h-40 w-60 border-2 border-green-600 rounded-lg shadow-md duration-500">
                    <img className="flex-wrap h-full" src={image}></img>
                  </div>
                </div>
                <button
                  type="submit"
                  className=" mt-2 bg-green-600 w-40 m-1 h-10 text-white rounded-xl hover:bg-green-900 duration-500 shadow-md hover:shadow-xl"
                  onClick={() => {
                    onChooseImage();
                  }}
                >
                  بارگزاری
                </button>
                <button
                  className="bg-green-600 w-72 lg:w-96 md:w-96 mt-8 py-2 text-white rounded-xl hover:bg-green-900 duration-500 shadow-md hover:shadow-xl"
                  onClick={() => {
                    creatProduct(data);
                  }}
                >
                  ثبت
                </button>
              </div>

              <div className="flex flex-col justify-end">
                <p className="mt-20 border-b-2 bg-white border-green-500 p-3 text-right">
                  مدیریت محصولات
                </p>
                <TableContainer component={Paper} className="w-full">
                  <Table
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                    style={{ direction: "rtl", fontFamily: "Lalezar" }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="right" style={{ color: "green" }}>
                          نام محصول
                        </TableCell>
                        <TableCell
                          align="justify"
                          scope="string"
                          style={{ color: "green" }}
                        >
                          توضیحات
                        </TableCell>
                        <TableCell align="right" style={{ color: "green" }}>
                          قیمت
                        </TableCell>
                        <TableCell align="right" style={{ color: "green" }}>
                          عکس
                        </TableCell>
                        <TableCell align="right" style={{ color: "green" }}>
                          عملیات
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {lan.map((item: any, index: any) => (
                        <TableRow
                          key={item.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            align="right"
                            style={{ fontFamily: "Lalezar" }}
                          >
                            {item.name}
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{ fontFamily: "Lalezar" }}
                          >
                            {item.description}
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{ fontFamily: "Lalezar" }}
                          >
                            {item.price}
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{ fontFamily: "Lalezar" }}
                          >
                            
                            <div className="flex mt-2 flex-col justify-end w-full ">
                              <div className="relative h-20 w-60 border-2 border-green-600 rounded-lg shadow-md duration-500">
                                <img
                                  className="flex-wrap h-full"
                                  src={"http://127.0.0.1:3000"+item.image}
                                ></img>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{ fontFamily: "Lalezar" }}
                          >
                            <div className="flex justify-center">
                              <button
                                type="button"
                                className="bg-info px-3 mr-2 text-black bg-slate-700 rounded-xl py-1"
                                id-of-value={index}
                                onClick={(e) => {
                                  sum(index);
                                  handleClick(e);
                                }}
                              >
                                ویرایش
                              </button>

                              <Modal open={active} overflow={true}>
                                <div
                                  className={`relative lg:pb-36 outline-none flex-col justify-end bg-slate-100 backdrop-blur-sm flex flex-wrap text-seyed  content-center inset-x-0  md:inset-y-0`}
                                  style={{
                                    fontFamily: "Lalezar",
                                    direction: "rtl",
                                  }}
                                >
                                  <div className="px-4  flex flex-wrap content-center justify-between">
                                    <AiFillCloseCircle
                                      className="mb-2"
                                      size={20}
                                      style={{ color: "", cursor: "pointer" }}
                                      onClick={() => setActive(!active)}
                                    />
                                  </div>
                                  <p className="text-xl w-20 text-green-900 text-right">
                                    ویرایش
                                  </p>

                                  <p className="mt-1 w-20 text-sm text-right mr-1">
                                    :عنوان
                                  </p>

                                  <input
                                    value={name}
                                    type="text"
                                    className="mt-1 border-2 text-sm text-right border-green-600 w-72 lg:w-96 md:w-96 rounded-lg shadow-md px-3 py-2 duration-500"
                                    placeholder="عنوان"
                                    onChange={(e) => {
                                      setname(e.target.value);
                                    }}
                                  />

                                  <p className="mt-1 text-sm text-right mr-2">
                                    :توضیحات
                                  </p>
                                  <textarea
                                    value={description}
                                    className="mt-1 border-2 text-sm border-green-600 w-72 lg:w-96 md:w-96 rounded-lg shadow-md px-6 py-2"
                                    placeholder="کپشن"
                                    onChange={(e) => {
                                      setdescription(e.target.value);
                                    }}
                                  />
                                  <p className="mt-1 w-20 text-sm text-right mr-1">
                                    :موجودی
                                  </p>
                                  <input
                                    value={stuck}
                                    type="text"
                                    className="mt-1 border-2 text-sm text-right border-green-600 w-72 lg:w-96 md:w-96 rounded-lg shadow-md px-3 py-2 duration-500"
                                    placeholder="عنوان"
                                    onChange={(e: any) => {
                                      setstuck(e.target.value);
                                    }}
                                  />
                                  <p className="mt-1 w-20 text-sm text-right mr-1">
                                    :قیمت
                                  </p>
                                  <input
                                    value={price}
                                    type="text"
                                    className="mt-1 border-2 text-sm text-right border-green-600 w-72 lg:w-96 md:w-96 rounded-lg shadow-md px-3 py-2 duration-500"
                                    placeholder="عنوان"
                                    onChange={(e: any) => {
                                      setPrice(e.target.value);
                                    }}
                                  />
                                  <p className="mt-1 text-sm text-right mr-2">
                                    :اپلود عکس
                                  </p>
                                  <button
                                    type="submit"
                                    className=" mt-1 bg-green-600 w-72 lg:w-96 md:w-96 p-1 h-10 text-white rounded-xl hover:bg-green-900 duration-500 shadow-md hover:shadow-xl"
                                    onClick={() => {
                                      onChooseImage();
                                    }}
                                  >
                                    بارگزاری
                                  </button>
                                  <div className="flex mt-1 flex-col justify-end">
                                    <div className="relative h-40 w-72 lg:w-96 md:w-96 border-2 border-green-600 rounded-lg shadow-md duration-500">
                                      <img className="flex-wrap h-full"></img>
                                    </div>
                                  </div>
                                  <div className="flex flex-row justify-center content-center mt-1">
                                    <button
                                      className="bg-green-600 w-40 lg:w-60 p-1 py-2 text-white rounded-xl hover:bg-green-900 duration-500 shadow-md hover:shadow-xl"
                                      onClick={() => {
                                        edit();
                                      }}
                                    >
                                      ویرایش
                                    </button>
                                    <button
                                      className="bg-danger w-40 lg:w-60 mr-1 text-white rounded-xl "
                                      onClick={(e) => del()}
                                    >
                                      حذف
                                    </button>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </Template>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

{
  /* 
            <table class="table">
              <thead class="bg-green-900 tw-text-white">
                <tr className="tw-bg-green-600">
                  <th scope="col">
                    <p className="tw-text-center">برند</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">نام</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">توضیحات</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">موجودی</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">قیمت</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">عکس</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">عملیات</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                { lan.map((item) => {
                  return (
                    <tr>
                      <td>
                        <p className="tw-text-center">{brandState.map((el)=>{if (el.id==item.brandId) {return (el.title)} })}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.name}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.description}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.stuck.amount}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.price}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.image}</p>
                      </td> */
}
