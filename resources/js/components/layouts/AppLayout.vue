<template>
        <div>
              <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div class="container px-4 px-lg-5">
                    <router-link :to="{ name: 'index' }" class="navbar-brand" >Logo</router-link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        
                            <template v-if="!isLoggedIn">
                                <li class="nav-item">
                                <router-link :to="{ name: 'login' }" class="nav-link px-lg-3 py-3 py-lg-4" >Login</router-link>
                                </li>
                                <li class="nav-item">
                                <router-link :to="{ name: 'register' }" class="nav-link px-lg-3 py-3 py-lg-4">Register</router-link>
                                </li>
                            </template>
                            <template v-if="isLoggedIn">
                                <li class="nav-item">
                                    <a href="/dashboard/profile" class="nav-link">{{user.name}}</a>
                                <!-- <router-link :to="{url: '/dashboard', params: { userId: user.id}}" class="nav-link">{{user.name}}</router-link> -->
                                </li>
                                <li class="nav-item">
                                <a class="nav-link"  @click="logout"> Logout</a>
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
            </nav>
            <router-view @setData="getData"></router-view>
                <footer class="border-top">
                    <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5 justify-content-center">
                            <div class="col-md-10 col-lg-8 col-xl-7">
                                <ul class="list-inline text-center">
                                    <li class="list-inline-item">
                                        <a href="#!">
                                            <span class="fa-stack fa-lg">
                                                <i class="fas fa-circle fa-stack-2x"></i>
                                                <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#!">
                                            <span class="fa-stack fa-lg">
                                                <i class="fas fa-circle fa-stack-2x"></i>
                                                <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#!">
                                            <span class="fa-stack fa-lg">
                                                <i class="fas fa-circle fa-stack-2x"></i>
                                                <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="small text-center text-muted fst-italic">Copyright &copy; Your Website 2021</div>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
</template>
<script>
  export default {
    name: 'AppLayout',
    data(){
        return { 
         user: null,
         isLoggedIn: null, 
        }
    },
    beforeMount() {
      this.getData()   
    }, 
    methods : {  
      getData(){  
          this.isLoggedIn = localStorage.getItem('jwt') !== null; 
          this.user = JSON.parse(localStorage.getItem('user')) 
      },
      logout(){
          localStorage.removeItem('jwt')
          localStorage.removeItem('user')
          this.getData()  
          this.$router.push('/')
      }
    }
  }
</script>
