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
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'dashboard.page.index'}">Page</router-link>
                    </li>
                    <li class="breadcrumb-item active">Page</li>
                    </ol>
                </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <form @submit.prevent="addPage">
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="page.title">
                        </div>
                        <div class="form-group">
                            <label>Content</label>
                            <textarea class="form-control" v-model="page.content" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
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
                page: {}
            }
        },
        methods: {
            addPage() {
                             axios.defaults.headers.common['Content-Type'] = 'application/json'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')
 
                this.axios
                    .post('/api/dashboard/pages', this.page)
                    .then(response => (
                        this.$router.push({ name: 'dashboard.page.index' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>