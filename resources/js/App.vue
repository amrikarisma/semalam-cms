<template>
      <router-view></router-view>
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
