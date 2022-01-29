<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Page</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'dashboard.index'}">Home</router-link>
                    </li>
                    <li class="breadcrumb-item active">Page</li>
                    </ol>
                </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <section class="content">
        <div class="container-fluid">
            <div class="card">
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
                        <tr v-for="page in pages" :key="page.id">
                            <td>{{ page.id }}</td>
                            <td>{{ page.title }}</td>
                            <td>{{ page.content }}</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <router-link :to="{name: 'dashboard.page.edit', params: { id: page.id }}" class="btn btn-success">Edit</router-link>
                                    <button class="btn btn-danger" @click="deletePage(page.id)">Delete</button>
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
                .get('/api/dashboard/pages/')
                .then(response => {
                    this.pages = response.data;
                });
        },
        methods: {
            deletePage(id) { 
                this.axios
                    .delete(`/api/dashboard/pages/${id}`)
                    .then(response => {
                        let i = this.pages.map(data => data.id).indexOf(id);
                        this.pages.splice(i, 1)
                    });
            }
        }
    }
</script>