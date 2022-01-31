<template>
    <div class="container">
        <div v-html="post.content"></div>
    </div>
    <frontend-header>
        All of this will be inside the layout
    </frontend-header>
</template>
<script>
    import { onMounted, ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import Http from '../services/http-common'
    export default {
        setup() {

            //reactive state
            let post = ref([])
            const route = useRoute()

            //mounted
            onMounted(() => {

                Http.get(`/posts/${route.params.slug}`)
                .then(response => {
                    post.value = response.data

                }).catch(error => {
                    console.log(error.response)
                })

            })

            return {
                post
            }

        }   
    }
</script>