import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";

import Banner from "/assets/images/banner.png";

const Register = () => {
  const navigate = useNavigate();

  const name = useRef();
  const userName = useRef();
  const email = useRef();
  const mobile = useRef();

  const removeErrorStyles = () => {
    name.current.style.border = "0px solid #F00";
    userName.current.style.border = "0px solid #F00";
    email.current.style.border = "0px solid #F00";
    mobile.current.style.border = "0px solid #F00";
  };

  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    isAgreed: false,
  });

  const [error, setError] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    isAgreed: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    removeErrorStyles();
    e.preventDefault();
    setError((prev) => {
      return {
        ...prev,
        name: "",
        userName: "",
        email: "",
        mobile: "",
        isAgreed: "",
      };
    });
    let isValid = true;
    if (!formData.name.trim().length) {
      setError((prev) => {
        return {
          ...prev,
          name: "Name Field is Required !",
        };
      });
      name.current.style.border = "1px solid #F00";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      setError((prev) => {
        return {
          ...prev,
          name: "Name should contain only letters and spaces !",
        };
      });
      name.current.style.border = "1px solid #F00";
      isValid = false;
    }
    if (!formData.userName.trim().length) {
      setError((prev) => {
        return {
          ...prev,
          userName: "UserName Field is Required !",
        };
      });
      userName.current.style.border = "1px solid #F00";
      isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.userName)) {
      setError((prev) => {
        return {
          ...prev,
          userName: "Username should contain only letters and numbers !",
        };
      });
      userName.current.style.border = "1px solid #F00";
      isValid = false;
    }

    if (!formData.email.trim().length) {
      setError((prev) => {
        return {
          ...prev,
          email: "Email Field is Required !",
        };
      });
      email.current.style.border = "1px solid #F00";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError((prev) => {
        return {
          ...prev,
          email: "Email is not valid !",
        };
      });
      email.current.style.border = "1px solid #F00";
      isValid = false;
    }

    if (!formData.mobile.trim().length) {
      setError((prev) => {
        return {
          ...prev,
          mobile: "Mobile Number Field is Required !",
        };
      });
      mobile.current.style.border = "1px solid #F00";
      isValid = false;
    } else if (!/^[1-9]\d{9}$/.test(formData.mobile)) {
      setError((prev) => {
        return {
          ...prev,
          mobile: "Mobile number should be a 10-digit number starting with a non-zero digit !",
        };
      });
      mobile.current.style.border = "1px solid #F00";
      isValid = false;
    }

    if (!formData.isAgreed) {
      toast.error("Kindly Check The Box!", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      setError((prev) => {
        return {
          ...prev,
          isAgreed: "Please Check The Box !",
        };
      });
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
  };

  function handleTandC() {
    toast.error("T&C ! Not Updated Yet !", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  }
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.container}>
        <div className={styles.register_banner}>
          <img src={Banner} alt="banner" />
          <h2 className={styles.register_banner_title}>
            Discover new things on Popcorn Buzz
          </h2>
        </div>
        <div className={styles.form_container}>
          <div className={styles.form_header}>Popcorn Buzz</div>
          <p className={styles.form_header_two}>Create your new account</p>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.form_input_name}
              onChange={handleChange}
              ref={name}
            />
            {error.name ? (
              <p className={styles.error_text}>{error.name}</p>
            ) : (
              <></>
            )}
            <input
              type="text"
              name="userName"
              placeholder="UserName"
              className={styles.form_input_userName}
              onChange={handleChange}
              ref={userName}
            />
            {error.userName ? (
              <p className={styles.error_text}>{error.userName}</p>
            ) : (
              <></>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.form_input_email}
              onChange={handleChange}
              ref={email}
              required
            />
            {error.email ? (
              <p className={styles.error_text}>{error.email}</p>
            ) : (
              <></>
            )}
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              className={styles.form_input_tel}
              onChange={handleChange}
              ref={mobile}
            />
            {error.mobile ? (
              <p className={styles.error_text}>{error.mobile}</p>
            ) : (
              <></>
            )}
            <div className={styles.form_header_isAgreed}>
              <input
                type="checkbox"
                name="isAgreed"
                onClick={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.checked,
                  });
                }}
              />

              <p className={styles.form_isAgreed_text}>
                Share my Registration data with Popcorn Buzz
              </p>
            </div>

            <Button
              onClick={(e) => {
                handleSubmit(e);
              }}
              name="Sign Up"
            />
          </form>
          <div className={styles.footer}>
            <p className={styles.term_condition}>
              By clicking on Sign Up. you agree to Popcorn Buzz{" "}
              <span className={styles.tandc_text} onClick={handleTandC}>
                Terms and Conditions of Use
              </span>
            </p>
            <p className={styles.term_condition}>
              To learn more about how Popcorn Buzz collects, uses, shares and
              protects your personal data please head Popcorn Buzz{" "}
              <span className={styles.tandc_text} onClick={handleTandC}>
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
