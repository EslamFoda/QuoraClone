<template>
<div class="black-overlay" v-if="showAsk">
    <transition name="overlay" appear>
      <div class="overlay-container ask-overlay">
          <span @click="showAsk = false"  class="material-icons-outlined closeSpace">close</span>
          <div class="ask-form-container">
              <div class="tips">
              <h4>Tips on getting good answers quickly</h4>
              <ul>
                  <li>Make sure your question has not been asked already</li>
                  <li>Keep your question short and to the point</li>
                  <li>Double-check grammar and spelling</li>
              </ul>
              </div>
                <div v-if="user" class="ask-user-flex form-ask-user">
          <div class="profile-img-container">
              <img src="../assets/user.jpg" alt="">
          </div>
          <span>{{user.displayName}} asked</span>
          <div class="public">
          <span class="material-icons-outlined public-icon">people</span>
          <span>Puplic</span>
          </div>
      </div>
                
          <form @submit.prevent="AddQuestion">
              <input class="space-input" type="text" placeholder="Start your question with 'What','How','Why',etc." required v-model="question">
              <input @change="handleChange" class="file" type="file">
              <div class="btn-container">
              <button v-if="isPending" class="ask-btn" disabled>Creat post...</button>
              <div v-else>
              <button  class="ask-btn">Add question</button>
              <button  @click="showAsk = false" class="space-button cancel-button">Cancel</button>
              </div>
              <div class="error">{{fileError}}</div>
              </div>
          </form>
          </div>
      </div>
    </transition>
  </div>
<div class="space-container">
  <div @click="showAsk = true" class="ask-container">
      <div class="ask">
      <div v-if="user" class="ask-user-flex">
          <div class="profile-img-container">
              <img src="../assets/user.jpg" alt="">
          </div>
          <span>{{user.displayName}}</span>
      </div>
      <h3>What is your question or link?</h3>
      </div>
  </div>

</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import useStorage from '../composables/useStorage'
import useCollection from '../composables/useCollection'
import {timestamp} from '../firebase/config'
export default {
    setup(props) {
        const {addDoc,docId} = useCollection('post')
        const {error, url , filePath,uploadImagePost} = useStorage()
        const {user} = getUser()
        const isPending = ref(false)
        const showAsk = ref(false)
        const question = ref('')
        const file = ref(null)
        const fileError = ref(null)
        const AddQuestion = async()=>{
            isPending.value = true
            if(!fileError.value){
                isPending.value = true
                await uploadImagePost(file.value)
                await addDoc({
                    question: question.value,
                    userId: user.value.uid,
                    userName: user.value.displayName,
                    filePath: filePath.value,
                    imgUrl: url.value,
                    createdAt: timestamp(),
                    comments: []
                })
                isPending.value = false
            } 
            question.value = ''
            isPending.value = false
            showAsk.value = false
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


     return{user,showAsk,question,AddQuestion,handleChange,fileError,isPending}
    }

}
</script>

<style>
.ask-container{
    background-color: white;
    width: 100%;
    padding: .5rem;
    border: 1px solid rgba(128, 128, 128, 0.2);
    cursor: pointer;
}
.ask-container:hover{
    border-color: rgba(128, 128, 128, 0.433);

}
.profile-img-container{
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .5rem;
}
.profile-img-container img {
    height: 100%;
    width: 100%;
}
.ask-user-flex{
    display: flex;
    align-items: center;
}
.ask-user-flex span{
    color: rgba(0, 0, 0, 0.474);
    font-size: small;
}
.ask h3 {
    margin: .4rem 0;
    font-weight: bolder;
    color: #939598;
}
.ask-form-container{
    padding: 1.5rem 1rem;
}
.tips{
    background-color: #ebf0ff;
    padding: 1rem;
}
.tips h4{
    color: #2e69ff;
}
.tips ul li{
    color: #6e97ff;
    margin: .3rem;
    
}
.form-ask-user{
    margin: 1rem 0;
}
.public{
    background-color: rgba(128, 128, 128, 0.172);
    margin-left: .5rem;
    padding: .1rem .5rem;
    border-radius: 10px;
    border: 1px solid rgba(128, 128, 128, 0.255);
    display: flex;
    align-items: center;
    cursor: pointer;
}
.public:hover{
        background-color:rgba(128, 128, 128, 0.289);
}
.public-icon{
    margin-right: .2rem;
}
.ask-overlay form input:focus{
    border-bottom: 1px solid rgb(32, 175, 226);
}
 .cancel-button{
     background-color: white;
     color: rgba(0, 0, 0, 0.638);
     margin-left: .5rem;
 }
 .cancel-button:hover{
     background-color: rgba(128, 128, 128, 0.07);
 }
 .btn-container{
     margin-top: 2rem;
 }
</style>