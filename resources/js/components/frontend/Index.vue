<template>
<div>
    <header class="masthead" style="background-image: url('assets/img/home-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>Clean Blog</h1>
                        <span class="subheading">A Blog Theme by Start Bootstrap</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div  v-for="page in pages.data" :key="page.id">
                    <!-- Post preview-->
                    <div class="post-preview">
                        <a href="post.html">
                            <h2 class="post-title">{{ page.title }}</h2>
                            <h3 class="post-subtitle">{{ page.content }}</h3>
                        </a>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on {{ page.created_at | displayDate }}

                        </p>
                    </div>
                    <!-- Divider-->
                    <hr class="my-4" />
                </div>

                <!-- Pager-->
                <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older
                        Posts →</a></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                pages: []
            }
        },
        created() {
            axios.defaults.headers.common['Content-Type'] = 'application/json'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')
 
            this.axios
                .get('/api/pages')
                .then(response => {
                    console.log(response);
                    this.pages = response.data;
                });
        },
        methods: {
            deletePage(id) { 
                this.axios
                    .delete(`/api/pages/${id}`)
                    .then(response => {
                        let i = this.pages.map(data => data.id).indexOf(id);
                        this.pages.splice(i, 1)
                    });
            }
        }
    }
</script>
