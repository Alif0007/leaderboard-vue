<template>
  <div>
    <!-- partial:index.partial.html -->
    <section>
      <div v-if="error" class="alert">Incorrect Email Or Password</div>
      <div class="signin">
        <div class="content">
          <img
            class="logo"
            src="https://lemmesaybd.app/static/media/logo.c70f15d97c74b633084d.png"
            alt=""
          />
          <h2>Sign In</h2>

          <div class="form">
            <div class="inputBox-1">
              <q-input
                ref="inputRef"
                filled
                v-model="email"
                label="Email or Username"
                :rules="[(val) => !!val || 'Field is required']"
              />
            </div>

            <div class="inputBox-1">
              <q-input
                ref="inputRef"
                filled
                type="password"
                v-model="password"
                label="Password"
                :rules="[(val) => !!val || 'Field is required']"
              />
            </div>
            <!-- 
            <div class="links">
              <a href="#">Forgot Password</a> <a href="#">Signup</a>
            </div> -->

            <div class="inputBox">
              <button @click="login" class="login-btn">
                {{ loading ? "Loading..." : "Login" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- partial -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      userInfo: {},
      loading: false,
      error: false,
      apiToken: "",
    };
  },
  methods: {
    async login() {
      if (!this.email && !this.password) {
        return;
      }
      this.loading = true;
      const loginData = new FormData();
      loginData.append("email", this.email);
      loginData.append("password", this.password);

      const config = {
        url: "https://icircles.app/api/auth/login",
        method: "POST",
        data: loginData,
      };
      try {
        const res = await axios(config);
        if (res.status == 200) {
          this.$router.push({ name: "Dashboard" });
        }

        this.userInfo = res.data;
        localStorage.setItem("apiToken", this.userInfo.user.t);
        console.log(this.userInfo.user.t);
      } catch (error) {
        console.log(error);
        this.loading = false;

        this.error = true;
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
.logo {
  width: 100px;
  height: 100%;
}

section {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
  flex-direction: column;
}

/* section .alert {
  position: relative;
  display: block;
  width: calc(6.25vw - 2px);
  height: calc(6.25vw - 2px);
  background: #181818;
} */

section .signin {
  width: 400px;
  background: #cee0e3;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 0px rgba(153, 151, 153, 1);
}
section .signin .content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
section .signin .content h2 {
  font-size: 2em;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
}
section .signin .content .form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
section .signin .content .form .inputBox {
  position: relative;
  width: 100%;
}
section .signin .content .form .inputBox input {
  position: relative;
  width: 100%;
  background: #ffffff;
  border: none;
  outline: none;
  padding: 25px 10px 7.5px;
  border-radius: 4px;
  color: #000000;
  font-weight: 500;
  font-size: 1em;
}
section .signin .content .form .inputBox i {
  position: absolute;
  left: 0;
  padding: 15px 10px;
  font-style: normal;
  color: #aaa;
  transition: 0.5s;
  pointer-events: none;
}
.signin .content .form .inputBox input:focus ~ i,
.signin .content .form .inputBox input:valid ~ i {
  transform: translateY(-7.5px);
  font-size: 0.8em;
  color: #000000;
}
.signin .content .form .links {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.signin .content .form .links a {
  color: #000000 !important;
  text-decoration: none;
}
.signin .content .form .links a:nth-child(2) {
  color: rgb(255, 253, 253);
  font-weight: 600;
}
.login-btn {
  padding: 10px;
  background: #007df2;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.35em;
  letter-spacing: 0.05em;
  cursor: pointer;
  width: 100%;
  border: none;
}
.login-btn:hover {
  background: rgb(51, 147, 231);
}
input[type="submit"]:active {
  opacity: 0.6;
}
.inputBox-1 {
  background-color: white;
  height: 55px;
}
.alert {
  text-align: center;
  color: red;
  font-weight: bold;

  background-color: #ff00002b;
  width: 400px;
  display: inline;
  /* margin-left: 20vw; */
  padding: 20px;
  border-radius: 10px;
}
@media (max-width: 900px) {
  section span {
    width: calc(10vw - 2px);
    height: calc(10vw - 2px);
  }
}
@media (max-width: 600px) {
  section span {
    width: calc(20vw - 2px);
    height: calc(20vw - 2px);
  }
}
</style>
