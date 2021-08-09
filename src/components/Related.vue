<template>
<Navbar/>
<transition name="related">

  <div v-if="document" class="main-container post-contain">
      <div class="post-grid">
          <div class="left-post-grid">
              <div class="single">
              <div class="top-post">
              <div class="user-flex-post">
          <div class="post-img-container">
              <img src="../assets/user.jpg" alt="">
          </div>
          <span>{{document.userName}}</span>
          <span class="follow">Follow</span>
              <span class="date">{{document.createdAt.toDate()}}</span>
              </div>
              
          <h3 class="question">{{document.question}}</h3>
            
              </div>
          <div class="img-container-post">
              <img :src="document.imgUrl">
          </div>
          </div>
           <form @submit.prevent="handleSubmit" class="dashboard-form">
          <div class="form-flex">
            <div class="span-img-container dash-prof">
        <img src="../assets/user.jpg" alt="">
      </div>
          <input type="text" placeholder="write your comment " v-model="comment">
            
            <div @click="handleSubmit" class="inbox-flex">
          <span class="material-icons-outlined">inbox</span>
          <p>inbox</p>
            </div>
            
          </div>
        </form>
        <div v-for="comment in document.comments" :key="comment.id">
          <div class="single">
              <div class="user-flex-post">
          <div class="post-img-container">
              <img src="../assets/user.jpg" alt="">
          </div>
          <span>{{comment.userName}}</span>
          <span class="follow">Follow</span>
              </div>
          <h3 class="question-details">{{comment.comment}}</h3>
          <div class="post-bottom">
              <div class="post-bottom-flex">
                  <div class="left-bottom-post">
                      <div class="tooltip-post">
                      <span class="material-icons-outlined">thumb_up</span>
                      <span class="tooltiptext-post">Like</span>
                      </div>
                      <div class="tooltip-post">
                      <span class="material-icons-outlined">thumb_down</span>
                       <span class="tooltiptext-post">Dislike</span>
                      </div>
                      <div class="tooltip-post">
                      <span class="material-icons-outlined">share</span>
                       <span class="tooltiptext-post">Share</span>
                      </div>
                  </div>
                  <div class="right-bottom-post">
                      <div v-if="comment && user && user.uid == comment.userId"  class="tooltip-post">
                      <span @click="deleteComment(comment.id)" class="material-icons-outlined">delete</span>
                       <span class="tooltiptext-post">Delete</span>
                      </div>
                      <div class="tooltip-post">
                      <span class="material-icons-outlined">more_horiz</span>
                       <span class="tooltiptext-post">More</span>
                      </div>
                  </div>

              </div>

          </div>
          </div>
      </div>    
          </div>
          <div v-if="documents" class="right-post-grid">
              <p class="related-head">Related Questions</p>
              <div v-for="doc in documents" :key="doc.id">
                  <div class="single-Question">
                      <router-link class="related" :to="{name:'PostDetails',params:{id:doc.id}}">
                          <p>{{doc.question}}</p>
                      </router-link>
                  </div>
              </div>
          </div>
      </div>
  </div>
</transition>
</template>

<script>
import Navbar from '../components/Navbar'
import getDocument from '../composables/getDocument'
import getCollection from '../composables/getCollection'
import getUser from '../composables/getUser'
import useDocument from '../composables/useDocument'
import { ref } from '@vue/reactivity'
export default {
    components:{Navbar},
    props:['id'],
    setup(props) {
        const {user} = getUser()
        const {documents} = getCollection('post')
        const {error, document} = getDocument('post',props.id)
        const {deleteDoc,updateDoc} = useDocument('post',props.id)
        const comment = ref('')
        const handleSubmit = async()=>{
            const comments = {
                comment:comment.value,
                userName: user.value.displayName,
                id: Math.floor(Math.random() * 1000000000000),
                userId: user.value.uid
            }
            await updateDoc({
                comments:[...document.value.comments, comments]
            })
            comment.value = ''
        }

        const deleteComment = async(id)=>{
      const comments = document.value.comments.filter(p=> p.id != id)
       await updateDoc({comments})

    }



        return{document,documents,comment,handleSubmit,user,deleteComment}
    }

}
</script>
<style>
 .related-enter-from{
    opacity: 0;
    transform: translateX(-100px);
}
.related-enter-to{
    opacity: 1;
    transform: translateX(0);
}
.related-enter-active{
    transition: all .6s ease;
}
</style>
