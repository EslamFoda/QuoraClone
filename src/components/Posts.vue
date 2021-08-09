<template>
  <div v-if="posts" class="posts">
      <div v-for="post in posts" :key="post.id">
          <div class="single">
              <div class="top-post">
              <div class="user-flex-post">
          <div class="post-img-container">
              <img src="../assets/user.jpg" alt="">
          </div>
          <span>{{post.userName}}</span>
          <span class="follow">Follow</span>
              <span class="date">{{post.createdAt.toDate()}}</span>
              </div>
              <router-link class="question-router" :to="{name:'PostDetails', params:{id:post.id}}">
          <h3 class="question">{{post.question}}</h3>
              </router-link>
              </div>
          <div class="img-container-post">
              <img :src="post.imgUrl">
          </div>
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
                      <div class="tooltip-post">
                          <router-link :to="{name:'PostDetails', params:{id:post.id}}">
                      <span  class="material-icons-outlined">chat_bubble_outline</span>
                          </router-link>
                       <span class="tooltiptext-post">Comments</span>
                      </div>
                      <p>{{post.comments.length}}</p>
                  </div>
                  <div class="right-bottom-post">
                      <div v-if="user && user.uid == post.userId" @click="handleDelete(post.id,post.filePath)" class="tooltip-post">
                      <span class="material-icons-outlined">delete</span>
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
</template>

<script>
import getCollection from '../composables/getCollection'
import {projectFirestore} from '../firebase/config'
import useStorage from '../composables/useStorage'
import getUser from '../composables/getUser'
import useDocument from '../composables/useDocument'

import { computed, onUpdated, ref } from 'vue'
export default {

    setup(props) {
        const {user} = getUser()
        const {deleteImage} = useStorage()
         const {documents:posts} = getCollection('post')
         const handleDelete = async(id,filePath)=>{
             await projectFirestore.collection('post').doc(id).delete()
             await deleteImage(filePath)
         }
        
        

         


         return{posts,handleDelete,user}
    }

}
</script>

<style>
.post{
    width: 100%;
}
.top-post{
    padding: .5rem;
}
.tooltip-post{
    position: relative;
  display: inline-block;
}
.tooltip-post .tooltiptext-post{
 visibility: hidden;
  max-width: 80px;
  min-width: 60px;
  background-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
  font-size: smaller;
  text-align: center;
  border-radius: 3px;
  border: solid .5px rgba(128, 128, 128, 0.207);
  padding: 5px 5px;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: -100%;
  left: 50%;
  margin-left: -30px;
  margin-top: -.2rem;
}
.tooltip-post::after{
    content: '';
    position: absolute;
    top: -6px;
    bottom: 0;
    left: 1rem;
    clip-path: polygon(100% 0, 0 0, 47% 100%);
    background-color: rgb(68, 68, 68);
    width: 1rem;
    height: .5rem;
    visibility: hidden;
    

}

.tooltip-post:hover .tooltiptext-post  {
  visibility: visible;
}
.tooltip-post:hover::after{
    visibility: visible;
}
.post-bottom-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left-bottom-post{
    display: flex;
    align-items: center;
}
.left-bottom-post span,.right-bottom-post span{
    margin:0 .7rem;
    font-size: 1rem;
    color: rgb(111, 108, 108);
    padding: .4rem;
    border-radius: 30px;
    cursor: pointer;
}
.right-bottom-post span{
font-size: 1.2rem;
}
.right-bottom-post span:hover{
     background: rgba(128, 128, 128, 0.056);
}
.left-bottom-post span:hover{
    background: rgba(128, 128, 128, 0.056);
}
.left-bottom-post p {
    color: rgb(111, 108, 108);
    font-size: 1rem;
}
.single{
    background-color: white;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.2);
    margin: .4rem 0;
    box-shadow: 0 0 .1rem rgba(0, 0, 0, 0.097);
}
.single:hover{
    background-color: #F7F7F7;
    
}
.post-img-container{
    width: 2rem;
    height: 2rem;
     margin-right: .5rem;
}
.post-img-container img{
    height: 100%;
    width: 100%;
}
.user-flex-post {
display: flex;
align-items: center;
margin-bottom: .5rem;
}
.user-flex-post span{
    color: rgba(0, 0, 0, 0.474);
    font-size: small;
}
.user-flex-post .follow {
    color: rgb(0, 132, 255);
    margin: 0 .5rem;
    cursor: pointer;
}
.follow:hover{
    text-decoration: underline;
}
.date{
    color: rgba(0, 0, 0, 0.474);
    font-size: small;
}
.img-container-post{
    width: 100%;
    height: auto;
}
.img-container-post img{
    width: 100%;
    height: 100%;
}
.question{
    margin: 1rem 0;
    font-size: 1rem;
}
.question-router{
    color: black;
    display: inline-block;
}
.question-router:hover{
    text-decoration: underline;
}
.comment-btn{
    background-color: rgba(45, 45, 233, 0.837);
    font-size: .8rem;
}
.comment-section {
    background-color: #f7f7f8;
}
.comment-form{
  width: 100%;
  background: #f7f7f8;
  padding: .5rem;
   border-bottom:1px solid rgba(128, 128, 128, 0.296);
}
.comment-form input{
    width: 100%;
    border: none;
    padding: .7rem 1rem;
    border-radius: 8px;
    background-color: #ffffff;
}
.comment-user{
    height: 1.8rem;
    width: 2rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .5rem;
}
.comment-user img{
    height: 100%;
    width: 100%;
}

@media only screen and (max-width: 1062px){
   html{
       font-size: 76%;
   }
   .magnifying{
       top: 3px;
   }

}


</style>