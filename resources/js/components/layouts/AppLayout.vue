<template>
        <div>
            <Header />
            <Navbar />
            <router-view></router-view>
            <Footer />
        </div>
</template>
<script>
    import Navbar from './frontend/partials/Navbar.vue'
    import Header from './frontend/partials/Header.vue'
    import Footer from './frontend/partials/Footer.vue'
    export default {
        name: 'AppLayout',
        components : {
            Navbar,
            Header,
            Footer
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
