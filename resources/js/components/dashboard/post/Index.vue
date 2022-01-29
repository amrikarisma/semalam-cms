<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Post</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'dashboard.index'}">Home</router-link>
                    </li>
                    <li class="breadcrumb-item active">Post</li>
                    </ol>
                </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <section class="content">
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col">
                            <router-link :to="{name: 'dashboard.post.create'}" class="btn btn-outline-primary">Add</router-link>
                        </div>
                    </div>
                </div>
                <div class="card-body">

                    <table class="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <!-- <th>Actions</th> -->
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="post in posts" :key="post.id">
                            <td>{{ post.id }}</td>
                            <td>{{ post.title }}</td>
                            <td>{{ post.content }}</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <router-link :to="{name: 'dashboard.post.edit', params: { id: post.id }}" class="btn btn-success">Edit</router-link>
                                    <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div><!-- /.container-fluid -->
        </section>
    </div>
</template>
 
<script>
    import { onMounted, ref } from 'vue'
    import Http from '../../services/http-common';
    export default {
        
        setup() {

            //reactive state
            let posts = ref([])

            //mounted
            onMounted(() => {
               
                Http.get('/dashboard/posts')
                .then(response => {
                    posts.value = response.data
                }).catch(error => {
                    console.log(error.response)
                })

            })

            const deletePage = (id) => {
            
            Http.delete(`/dashboard/posts/${id}`)
            .then(() => {
                        
                posts.value.splice(posts.value.indexOf(id), 1);

                }).catch(error => {
                    console.log(error.response)
                })

            }

            return {
                posts,
                deletePage
            }

        }   
    }
</script>