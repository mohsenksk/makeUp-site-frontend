import React, { useEffect, useState } from "react";
import "../loginStyle.css";
import { Input, InputGroup, Tooltip, Whisper } from "rsuite";
import SignUp from "../api/signup.api";
import SignIn from "../api/signin.api";

export default function SignInSignUp() {
  useEffect(() => {
    document.querySelector(".img__btn").addEventListener("click", function () {
      document.querySelector(".cont").classList.toggle("s--signup");
    });
  }, []);

  //  const handleChange = () => {
  //  setVisible(!visible);
  // };

  /*states*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false);

  /*form validation*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!name) {
      validationErrors.name = "نام و نام خانوادگی را بنویسید";
    }

    if (!email) {
      validationErrors.email = "ایمیل را ئارد کنید";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "ایمیل را به درستی وارد کنید";
    }

    if (!password) {
      validationErrors.password = "رمز عبور خود را وارد کنید";
    } else if (password.length < 6) {
      validationErrors.password = "رمز عبور حداقل باید 6 کاراکتر داشته باشد";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword =
        "لطفا دوباره رمز عبور خود را وارد کنید";
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword =
        "رمز عبور و تکرار ان با هم برابر نیستند";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const userInfo = {
        userName: name,
        email,
        password,
        confirmPassword,
      };
      SignUp(userInfo)
        .then(async (response) => {
          console.log(response);
          if (response.message === "User created successfully") {
            alert("کاربر با موفقیت ثبت نام گردید");
            return;
          } else {
            alert("error");
          }
        })
        .catch((error) => {
          if (error.response.data.errorEmail) {
            alert("کاربر با ایمیل مشابه یافت شد");
          } else {
            console.log(error);
          }
        });
    }
  };

  const handleSignIn=()=>{
    const isUser = { email: name, password: password };
    SignIn(isUser)
      .then(async (response) => {
        alert(`${isUser.email} kos khol `)
        console.log(response)
      })
      .catch((error) => {
          console.log(error); 
          if (error.response.status===400) {
            alert("نام کاربری یا رمز عبور اشتباه است")
          }
           console.log(error)   
      });
      window.location.reload()
  }

  return (
    <>
      <div className="cont justify-center m-10 mx-auto rounded-lg ">
        <div className="form sign-in ">
          <h2>خوش امدید</h2>
          <label>
            <span>نام کاربری </span>
            <Input
              placeholder="name"
              type="text"
              onChange={(e) => setName(e)}
            />
          </label>
          <label>
            <span>رمز عبور</span>
            <InputGroup inside>
              <Input
                type="password"
                size="md"
                onChange={(e) => setPassword(e)}
              />
            </InputGroup>
          </label>
          <div className="ml-64 mt-4">
            <a className="forgot-pass ">فراموشی رمز عبور?</a>
          </div>
          <button
            type="submit"
            className="submit"
            onClick={() => {    const isUser = { email: name, password: password };
            SignIn(isUser)
              .then(async (response) => {
                alert(`${isUser.email} kos khol `)
                console.log(response)
                window.location.href="/"
              })
              .catch(async(error) => {
                  
                  if (error.response.status===400) {
                    alert("نام کاربری یا رمز عبور اشتباه است")
                    window.location.reload();
                  }
                    console.log(error)   
              });
              }}
          >
            ورود
          </button>
        </div>

        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>اولین بار از سایت دیدن میکنید؟</h2>
              <p>همین الان عضو خانواده بزرگ ارایشی و بهداشتی شوید</p>
            </div>
            <div className="img__text m--in">
              <h2>قبلا عضو شده اید؟</h2>
              <p>از اینجا وارد شوید</p>
            </div>
            <div className="img__btn">
              <span className="m--up">ثبت نام</span>
              <span className="m--in">ورود</span>
            </div>
          </div>

          <form className="form sign-up" onSubmit={handleSubmit}>
            <h2>وقت خرید مطمعنه</h2>
            <label>
              <span>نام و نام خانوادگی</span>
              <Whisper
                trigger="focus"
                speaker={<Tooltip>فارسی وارد کنید</Tooltip>}
              >
                <Input
                  placeholder=""
                  type="text"
                  onChange={(e) => setName(e)}
                />
              </Whisper>
              {errors.name && <p>{errors.name}</p>}
            </label>
            <label>
              <span>ایمیل</span>
              <Input
                placeholder=""
                type="email"
                onChange={(e) => setEmail(e)}
              />
              {errors.email && <p>{errors.email}</p>}
            </label>
            <label>
              <span>رمز عبور</span>
              <Input
                placeholder=""
                type="password"
                onChange={(e) => setPassword(e)}
              />
              {errors.password && <p>{errors.password}</p>}
            </label>
            <label>
              <span>تکرار رمز عبور</span>
              <InputGroup inside>
                <Input
                  type="password"
                  size="md"
                  onChange={(e) => setConfirmPassword(e)}
                />
              </InputGroup>
              {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </label>
            <button type="submit" className="submit">
              ثبت نام
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
