<template>
 <div class="wrapper">
    <DashboardNavbar />
    <DashboardSidebar />
  
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <router-view @setData="getData"></router-view>
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2020 <a href="#">Your Site</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 0.0.0
    </div>
  </footer>

  
</div>
<!-- ./wrapper -->
</template>
<script>
import DashboardSidebar from './Dashboard/partials/Sidebar.vue'
import DashboardNavbar from './Dashboard/partials/Navbar.vue'
  export default {
    name: 'DashboardLayout',
    components: {
        DashboardSidebar,
        DashboardNavbar,
    },
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
