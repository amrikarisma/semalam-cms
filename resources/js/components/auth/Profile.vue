<template>
  <div>
    <div class="container">
      <div class="card">
        <h5 class="card-header"></h5>
        <div class="card-body">
          <h1 class="card-title">{{user.name}}</h1>
          <p class="card-text">{{user.email}}</p>
          <a href="#" class="btn btn-primary">Follow</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      data(){
          return {
              user : '', 
          }
      },
      onMounted(){ 
          axios.defaults.headers.common['Content-Type'] = 'application/json'
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')
          this.axios.get(`/api/dashboard/users/${this.$route.params.userId}`)
          .then(response => { 
              this.user = response.data 
          })
          .catch(error => {
              console.error(error);
          }) 
      }
  }
</script>
