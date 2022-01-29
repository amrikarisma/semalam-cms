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
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'dashboard.post.index'}">Post</router-link>
                    </li>
                    <li class="breadcrumb-item active">Post</li>
                    </ol>
                </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <form @submit.prevent="addPost">
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="post.title">
                        </div>
                        <div class="form-group">
                            <label>Content</label>
                            <ckeditor :editor="editor" v-model="post.content"></ckeditor>
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
    import { reactive, ref } from 'vue'
    import { useRouter} from 'vue-router'
    import Http from '../../services/http-common'
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

            const post = reactive({
                title: '',
                content: ''
            })
            const router = useRouter()
            const validation = ref([])

            const addPost = () => {
                Http.post('/dashboard/posts', post)
                 .then((res) => {
                        router.push({
                            name: 'dashboard.post.index'
                        })
                    }).catch(error => {
                        validation.value = error.response.data
                    })
            }


            return {
                post,
                addPost
            }

        }   
    }
</script>