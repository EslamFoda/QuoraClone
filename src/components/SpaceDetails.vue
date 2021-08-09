<template>
<div class="navit">
<Navbar/>
</div>
<transition name="details" appear>
<section v-if="space" class="details">
  <div class="details-hero">
    <div class="detail-img-container">
      <img :src="space.imgUrl">
      <div class="small-img-container">
      <img class="small-img" :src="space.imgUrl">
      </div>
    </div>
    <div class="container-detail">
    <div class="description">
      <div class="left-des">
      <h2>{{space.name}}</h2>
      <p class="just-margin">{{space.description}}</p>
      <p>Created By {{space.userName}}</p>
      </div>
      <div class="right-des">
        <div class="round-icon">
          <span class="material-icons-outlined icona">verified_user</span>
          <span>Admin</span>
        </div>
        <div class="round-icon">
          <span class="material-icons-outlined icona">person_add</span>
          <span>Invite</span>
        </div>
        <div class="tooltip-post">
        <span class="material-icons-outlined icons">notifications_active</span>
         <span class="tooltiptext-post">notifications</span>
        </div>
         <div v-if="ownerShip" class="tooltip-post">
        <span @click="handleDelete(space.filePath)" class="material-icons-outlined del">delete</span>
         <span class="tooltiptext-post">Delete</span>
        </div>
        <div class="tooltip-post">
        <span class="material-icons-outlined icon">more_horiz</span>
         <span class="tooltiptext-post">More</span>
        </div>
      </div>
    </div>
    </div>
  </div>


  <div class="post-section">
    <div class="container-detail">
    <div class="post-section-grid">
      <div class="post-left">
        <span class="dash-head">About</span>
        <span class="dash-head active">Posts</span>
        <div class="line"></div>
        <div class="dashboard">
          <div class="dash-flex">
          <span>Admin dashboard</span>
          <span class="material-icons-outlined">keyboard_arrow_right</span>
          </div>
          <div>
          <span class="border-bottom">Continue setting up your Space</span>
          </div>
          <div class="dash-flex-two">
            <div class="sec-dash-flex">
<span class="material-icons-outlined check">check_circle_outline</span>
          <span>Edit visuals of your Space</span>
            </div>
            <span class="material-icons-outlined">keyboard_arrow_down</span>
          </div>
          <div class="dash-flex-two">
            <div class="sec-dash-flex">
<span class="material-icons-outlined check">check_circle_outline</span>
          <span>Add your first piece of content</span>
            </div>
            <span class="material-icons-outlined">keyboard_arrow_down</span>
          </div>
          <div class="dash-flex-two">
            <div class="sec-dash-flex">
<span class="material-icons-outlined check">check_circle_outline</span>
          <span>Invite people to follow your Space</span>
            </div>
            <span class="material-icons-outlined">keyboard_arrow_down</span>
          </div>
          <div class="dash-flex-two">
            <div class="sec-dash-flex">
<span class="material-icons-outlined check">check_circle_outline</span>
          <span>Share your Space to feed</span>
            </div>
            <span class="material-icons-outlined">keyboard_arrow_down</span>
          </div>
          <div class="dashboard-options">
            <div class="option">
              <div class="circle">
              <span class="material-icons-outlined dash-icon">person_add</span>
              </div>
              <p>Invite</p>
            </div>
            <div class="option">
              <div class="circle">
              <span class="material-icons-outlined dash-icon">people</span>
              </div>
              <p>People</p>
            </div>
            <div class="option">
              <div class="circle">
              <span class="material-icons dash-icon">attach_money</span>
              </div>
              <p>Earnings</p>
            </div>
            <div class="option">
              <div class="circle">
              <span class="material-icons dash-icon">schedule</span>
              </div>
              <p>Queue</p>
            </div>
            <div class="option">
              <div class="circle">
              <span class="material-icons-outlined dash-icon">settings</span>
              </div>
              <p>Settings</p>
            </div>
            <div class="option">
              <div class="circle">
              <span class="material-icons-outlined dash-icon">format_list_bulleted</span>
              </div>
              <p>log</p>
            </div>
          </div>
        </div>
        <form @submit.prevent="handleSubmit" class="dashboard-form">
          <div class="form-flex">
            <div class="span-img-container dash-prof">
        <img src="../assets/user.jpg" alt="">
      </div>
          <input type="text" placeholder="write your post " v-model="comment">
            
            <div @click="handleSubmit" class="inbox-flex">
          <span class="material-icons-outlined">inbox</span>
          <p>inbox</p>
            </div>
            
          </div>
        </form>
        <div class="chat">
          <div v-for="comment in space.post" :key="comment.id">
          <div class="single">
              <div class="user-flex-post">
          <div class="post-img-container">
              <img src="../assets/user.jpg" alt="">
          </div>
          <span>{{comment.name}}</span>
          <span class="follow">Follow</span>
              </div>
          <h3 class="question-details">{{comment.post}}</h3>
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
      </div>
      <div class="post-right">
        <div class="feed">
    <div class="feed-header secondary-feed">
    <h5>1 contributor</h5>
    </div>
    <div class="feed-span">
      <div class="feed-span-flex">
        <div class="feed-span-left">
      <div class="span-img-container">
        <img src="../assets/user.jpg" alt="">
      </div>
      <h5>{{space.userName}}</h5>
      <span class="material-icons-outlined icona">verified_user</span>
        </div>
        <div class="feed-span-right">
          <span class="material-icons-outlined">edit</span>
        </div>
      </div>
    </div>
  </div>
  <Feeds/>
      </div>
    </div>

    </div>
  </div>
</section>
</transition>
</template>

<script>
import useStorage from '../composables/useStorage'
import getUser from '../composables/getUser'
import getDocument from '../composables/getDocument'
import Feeds from '../components/Feeds.vue'
import useDocument from '../composables/useDocument'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import Navbar from '../components/Navbar'
export default {
  components:{Feeds,Navbar},
  props:['id','doc'],
  setup(props) {
    const comment = ref('')
    const router = useRouter()
    const {deleteImage} = useStorage()
    const {deleteDoc,updateDoc} = useDocument('spaces',props.id)
    const { error, document : space} = getDocument('spaces',props.id)
    const {user} = getUser()
    const handleDelete = async(filePath)=>{
      await deleteImage(filePath)
      await deleteDoc()
      router.push({name:'Home'})

    }
    const ownerShip = computed(()=>{
      return space.value && user.value && user.value.uid == space.value.userId
    })
    const handleSubmit = async()=>{
      const post = {
        name:user.value.displayName,
        post:comment.value,
        id: Math.floor(Math.random() * 100000000000000),
        userId:user.value.uid
      }
      await updateDoc({
        post:[...space.value.post, post]
      })
      comment.value = ''
    }


    const deleteComment = async(id)=>{
      const post = space.value.post.filter(p=> p.id != id)
       await updateDoc({post})

    }



    return{space,user,handleDelete,ownerShip,comment,handleSubmit,deleteComment}
    
  }

}
</script>

<style>

.details-enter-from{
  opacity:0;
}
.details-enter-to{
  opacity:1;
}
.details-enter-active{
  transition: all .6s ease;
}
.container-detail{
  max-width: 1000px;
margin: auto;
padding: 0 1rem;
}
.del{
  cursor: pointer;
}

.details-hero{
  background-color: rgba(56, 6, 1, 0.727);
  color: white;
  padding: 0 1rem;
}
.detail-img-container{
  max-width: 1050px;
  height: 200px;
  min-width: 250px;
  margin: auto;
  position: relative;
  border: 1px solid rgba(128, 128, 128, 0.693);
  border-top: none;
}
.detail-img-container img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.small-img-container{
  position: absolute;
  bottom: -2rem;
  left: 1.5rem;
  width: 7rem;
  height: 7rem;
  overflow: hidden;
  border-radius: 30px;
  border: 1px solid rgba(128, 128, 128, 0.693);
}
.small-img-container img {
  width: 100%;
  height: 100%;
}
.description{
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
}
.right-des{
  display: flex;
  align-items: center;
}
.round-icon{
  display: flex;
  align-items: center;
  margin: 0 .5rem;
  border: 1px solid white;
  padding: .4rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: .9rem;
}
.round-icon span {
  margin: 0 .2rem;
}
.icons , .icon{
  margin: 0  .9rem;
  cursor: pointer;
}
.icona{
  font-size: 1.2rem;
}

.post-section-grid{
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 1rem 0;
}
.dash-head{
  margin-right: 1rem;
  font-size: small;
  
}
.dash-head.active{
  border-bottom: 2px solid rgba(56, 6, 1, 0.727);
  
}
.line{
  margin-top: 2px;
  width: 100%;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.296);
  margin-bottom: .3rem;
}
.post-left{
  width: 670px;

}
.dash-flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.296);
}
.dash-flex-two{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.296);
  cursor: pointer;
}
.sec-dash-flex{
  display:flex;
  align-items: center;
}
.border-bottom{
  border-bottom:  1px solid rgba(128, 128, 128, 0.296);
  display: block;
  padding: .5rem 0;
  color: rgba(56, 6, 1, 0.727);
}
.dashboard{
  background-color: white;
  border:1px solid rgba(128, 128, 128, 0.296);
  padding: .5rem;
  color: rgba(0, 0, 0, 0.727);
  border-radius: 5px;
  
}
.check{
  color: #6a4642;
  margin-right: .5rem;
  font-size: 1.3rem;
}
.dashboard-options{
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: small;
}
.circle{
  background-color: #efefef;
  border-radius: 50%;
  padding: .5rem;
  margin-bottom: .5rem;
  display: inline-block;
}
.option{
  width: 100%;
  height: 100%;
  padding: .5rem 0 0 0;
  border-radius: 5px;
  cursor: pointer;
}
.option:hover{
  background-color: #f7f7f7;
}
.secondary-feed{
  background: white;
}
.span-img-container{
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
}
.span-img-container img{
  width: 100%;
  height: 100%;
}
.feed-span-flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.feed-span-left{
  display: flex;
  align-items: center;
}
.feed-span-flex h5{
  margin: 0 .4rem;
}

.just-margin{
  margin: .5rem 0;
}
.dashboard-form{
  margin: 1rem 0;
  border-radius: 15px;
  width: 100%;
  background: white;
  padding: .5rem;
   border:1px solid rgba(128, 128, 128, 0.296);
}
.dashboard-form input{
  width: 100%;
    border: none;
    padding: .7rem 1rem;
    border-radius: 8px;
    background-color: #f7f7f7;
}
.form-flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inbox-flex{
  display: flex;
  align-items: center;
  cursor: pointer;
  color: gray;
  margin-left: .3rem;
  padding: .4rem .5rem;
  border-radius: 15px;
}
.inbox-flex:hover{
 background-color: #f7f7f7;
}

.dash-prof{
  margin-right: .5rem;
  height: 2.5rem;
  width: 2.5rem;
}
@media only screen and (max-width: 900px){
 .post-section-grid{
 grid-template-columns: 2fr 1fr;
 gap:1rem;
 }
 .post-left{
   width: auto;
 }
 .post-right{
   width: auto;
 }
}
@media only screen and (max-width: 612px){
  .detail-img-container{
    height: 140px;
  }
  .post-section-grid{
    grid-template-columns: 1fr;
  }
  .post-right{
    display: none;
  }
  .post-left{
   width: 100%;
 }
 .text-wrap{
   max-width:100% ;

 }
 .icons , .icon{
   font-size: 1.2rem;
   margin: 0 .5rem;
 }
 .del{
  font-size: 1.2rem;
}
 .small-img-container{
   width: 5rem;
   height: 5rem;
   border-radius: 15px;
 }
 .description{
   flex-wrap: wrap;
 }
 .left-des{
   margin-bottom: 1rem;
 }
}
@media only screen and (max-width: 399px){
  .dash-icon{
    font-size: 1.4rem;
  }
  .dashboard-options{
    font-size: smaller;
  }
  .container-detail{
    padding: 0 .5rem;
  }
}
</style>