import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";

// import { loginApi } from "../../api/loginApi";
import swal from "sweetalert";
function Login() {
  //Xử lý sumit form
  /*
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const handleSubmit = () => {
    //Call API 
    console.log({name,email})
  }
  */
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Username: "",
    Password: "",
  });
  const loginUser = async () => {
    // const res = await loginApi(user);
    let res; //tạm
    console.log(res);
    if (!res) return swal("Here's a message!", "Some thing wrong");
    swal("Here's a message!", "Login success");
    navigate("/");
  };

  return (
    <div className="Login">
      <div className="login-form">
        <div className="login-left">
          <div className="content">
            <h3>Logo</h3>
            <p className="welcome">Welcome to <br /> Site Apartment</p>
            <p className="text-introduce">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              nisl tristique, lacinia ipsum tempor, gravida nibh. Mauris odio
              nulla, efficitur tempor velit sed, aliquam dapibus libero.
            </p>
            <div className="icon">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="content">
            <p className="hellothere">Hello there</p>

            <div className="login_form" id="form-1">
              <div className="form-group">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Username/Email"
                  className="form-control"
                  onChange={(e) =>
                    setUser({ ...user, Username: e.target.value })
                  }
                />
                <span className="form-message"></span>
              </div>

              <div className="form-group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={(e) =>
                    setUser({ ...user, Password: e.target.value })
                  }
                />
                <span className="form-message"></span>
              </div>

              <p className="forgot-password">Forgot password?</p>

              <button className="form-submit btn" onClick={() => loginUser()}>
                Login
              </button>
              <p className="sign-up">
                Don't have an Account?{" "}
                <Link className="signup" to="/register">
                  Sign up
                </Link>
              </p>
              <div className="signin-fb-gg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
