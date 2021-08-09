<template>
 <div class="black-overlay" v-if="toggleCreate">
     <transition name="overlay" appear>
      <div class="overlay-container">
          <span @click="toggleCreate = false" class="material-icons-outlined closeSpace">close</span>
          <h2>Create a Space</h2>
          <p>Create a Space to share your interests, curate content, host discussions, and more.</p>
          <form class="space-form" @submit.prevent="createSpace">
              <label>Name</label>
              <input class="space-input" type="text" placeholder="Enter a name for your Space" required v-model="name">
              <label>Description</label>
              <input class="space-input" type="text" placeholder="1-line description of your Space" required v-model="description">
              <input @change="handleChange" class="file" type="file">
              <button v-if="isPending" disabled class="space-button-sec">Loading..</button>
              <button v-else class="space-button-sec">Create</button>
              <div v-if="fileError" class="error">{{fileError}}</div>
          </form>
      </div>
     </transition>
  </div>
        <div class="space-container sec">
            <div @click="toggleCreate = true" class="create-space">
           <span class="material-icons-outlined createSpace">add</span>
           <span>Create Space</span>
            </div>
            <div v-if="documents" class="All-spaces">
                <div v-for="doc in documents" :key="doc.id">
                    <router-link :to="{name:'Details',params:{id:doc.id}}">
                  <Singlespace :doc='doc'/>
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script>
import Singlespace from '../components/Singlespace'
import { ref } from 'vue'
import useStorage from '../composables/useStorage'
import useCollection from '../composables/useCollection'
import getUser from '../composables/getUser'
import getCollection from '../composables/getCollection'
import {timestamp} from '../firebase/config'

export default {
    components:{Singlespace},
    setup(props) {
        const {documents} = getCollection('spaces')
        const isPending = ref(false)
        const {user} = getUser()
        const {error, url , filePath, uploadImage} = useStorage()
        const {addDoc} = useCollection('spaces')
        const toggleCreate = ref(false)
        const name = ref('')
        const file = ref(null)
        const description = ref('')
        const fileError = ref('')
        const createSpace = async()=>{
            isPending.value = true
            if(!fileError.value){
                isPending.value = true
                await uploadImage(file.value)
                await addDoc({
                    name: name.value,
                    description: description.value,
                    filePath: filePath.value,
                    userId: user.value.uid,
                    userName: user.value.displayName,
                    imgUrl: url.value,
                    post:[],
                    createdAt: timestamp()
                })
                isPending.value = false
            }
            name.value = ''
            description.value = ''
            isPending.value = false
            toggleCreate.value = false
        }

        const type = ["image/jpeg","image/png"]
        const handleChange = (e)=>{
            fileError.value = null
            const selected = e.target.files[0]
            if(selected && type.includes(selected.type)){
                fileError.value = null
                file.value = selected
            } else {
                fileError.value = 'please select png or jpg image'
            }

        }

      return{toggleCreate,name,description,createSpace,handleChange,fileError,documents,isPending}
    }

}
</script>

<style>
a{
    text-decoration: none;
}
.text-wrap{
    max-width: 8rem;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.583);
    overflow: hidden;
}
.space-container{
    padding:1rem 0;
    overflow: hidden;
}
.create-space{
    display: flex;
    align-items: center;
    background-color: #e4e6e6bd;
    font-size: small;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.583);
}
.createSpace{
    margin-right: 5px;
    background-color: rgba(128, 128, 128, 0.124);
    border-radius: 5px;
    
}
.create-space:hover{
    background-color: rgba(128, 128, 128, 0.131);
}
.space-img{
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
    border-radius: 5px;
    overflow: hidden;
}
.space-img img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.space{
    display: flex;
    align-items: center;
    margin: .5rem 0;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
}


.black-overlay{
    position: fixed;
    z-index: 654546546546545;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #383838dc;
    padding: 1rem;
}
.overlay-container{
    background-color: white;
    max-width: 600px;
    min-width: 300px;
    margin: 2rem auto;
    border-radius: 10px;
    padding: 1rem;
}
h2{
    padding: .5rem 0;
}
.closeSpace{
   padding: .2rem;
   color: rgba(0, 0, 0, 0.323);
   cursor: pointer;
}
.closeSpace:hover{
    background-color: rgba(128, 128, 128, 0.056);
    border-radius: 50%;
}
.space-form label{
    display: block;
    margin: 2rem 0;
}
.space-input{
    border: none;
    border-bottom: 1px solid rgba(128, 128, 128, 0.316);
    width: 100%;
    padding-bottom: 1rem;
    font-size: 15px;
}
.space-button{
    margin-top: 1rem; 
}
.space-button-sec{
    margin-top: 1rem; 
    display: block;
}

.file{
    margin: 1rem 0;
}
.space:hover{
    background-color: rgba(128, 128, 128, 0.131);
}
button:disabled{
    cursor: not-allowed;
    opacity: .5;
}

.overlay-enter-from{
    opacity: 0;
    transform: translateY(-100px);
}
.overlay-enter-to{
    opacity: 1;
    transform: translateY(0);
}
.overlay-enter-active{
    transition: all .5s ease;
}
.overlay-leave-from{
    opacity: 1;
    transform: translateY(0);
}
.overlay-leave-to{
    opacity: 0;
    transform: translateY(-100px);
}
.overlay-leave-active{
    transition: all .5s ease;
}
</style>