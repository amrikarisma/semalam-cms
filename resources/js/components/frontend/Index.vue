<template>
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div v-for="(post, index) in posts.data" :key="index">
                    <!-- Post preview-->
                    <div class="post-preview">
                        <router-link :to="{name: 'post.detail', params:{slug: post.slug }}" exact>
                            <h2 class="post-title">{{ post.title }}</h2>
                            <h3 class="post-subtitle">{{ post.content }}</h3>
                        </router-link>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">{{ post.created_by.name }}</a>
                            on {{ post.created_at }}

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
</template>

<script>
    import { onMounted, ref } from 'vue'
    import Http from '../services/http-common'
    export default {
        setup() {

            //reactive state
            let posts = ref([])

            //mounted
            onMounted(() => {

                Http.get('/posts')
                .then(response => {
                    posts.value = response.data

                }).catch(error => {
                    console.log(error.response)
                })

            })

            return {
                posts
            }

        }   
    }
</script>
