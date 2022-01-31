<template>
<div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

            <form @submit.prevent="submit">
        <div class="input-group mb-3">
                <input type="email" v-model="email" class="form-control" required>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
                <input type="password"  v-model="password" class="form-control" required>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>
      <!-- /.social-auth-links -->

      <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p class="mb-0">
        <a href="register.html" class="text-center">Register a new membership</a>
      </p>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>

  <!-- <div class="container ">
    <div class="row justify-content-center">
      <div class="col-md-6 mb-4">
        <div class="card card-default">
          <div class="card-header">Login</div>
          <div v-if="error">
            <div class="alert bg-danger text-white m-4">
              {{ error }}
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="submit">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password"  v-model="password" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary">
              Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
  export default {

      data() {
          return {
              email: "",
              password: "",
              error: "",
          }
      },
      methods: {
          submit() { 
              axios.post('/api/login', {
                  email: this.email,
                  password: this.password
                })
                .then(response => { 
                  let data = response.data; 
                  console.log(data);
                  localStorage.setItem('user',JSON.stringify(data.user))
                  localStorage.setItem('jwt',data.token)
                  this.$emit('setData') 
                   
                  this.$router.push({ name: 'user', params: { userId: data.user.id } });
                })
               .catch(error => { 
                  this.error = error.response.data.error;
                });
          }
               
      }
  }
</script>
