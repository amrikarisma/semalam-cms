<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Edit Page</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'dashboard.index'}">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'dashboard.page.index'}">Page</router-link>
                    </li>
                    <li class="breadcrumb-item active">Edit Page</li>
                    </ol>
                </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <form @submit.prevent="updatePage">
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="page.title">
                             <div v-if="validation.title" class="mt-2 alert alert-danger">
                                {{ validation.title[0] }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Slug</label>
                            <input type="text" class="form-control" v-model="page.slug">
                             <div v-if="validation.slug" class="mt-2 alert alert-danger">
                                {{ validation.slug[0] }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Content</label>
                            <ckeditor :editor="editor" v-model="page.content"></ckeditor>
                            <div v-if="validation.content" class="mt-2 alert alert-danger">
                                {{ validation.content[0] }}
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div><!-- /.container-fluid -->
        </section>
    </div>
</template>
 


<script>
    import { reactive, ref, onMounted } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import Http from '../../services/http-common';
    import CKEditor from '@ckeditor/ckeditor5-vue'
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
    export default {
        components: {
            // Use the <ckeditor> component in this view.
            ckeditor: CKEditor.component
        },
        data() {
            return {
                editor: ClassicEditor,
            };
        },
        
        setup() {

            const page = reactive({
                title: '',
                slug: '',
                content: ''
            })
            const router = useRouter()
            const route = useRoute()
            const validation = ref([])

            //mounted
            onMounted(() => {
               
                Http.get(`/dashboard/pages/${route.params.id}`)
                .then((res) => {
                    page.title = res.data.title;
                    page.slug = res.data.slug;
                    page.content = res.data.content;
                }).catch(error => {
                    console.log(error.response.data)
                })

            })

            const updatePage = () => {
                Http.put(`/dashboard/pages/${route.params.id}`, page)
                    .then((res) => {
                        router.push({
                            name: 'dashboard.page.index'
                        })
                    }).catch(error => {
                        validation.value = error.response.data
                    })
            }

            return {
                page,
                validation,
                updatePage
            }

        }   
    }
</script>