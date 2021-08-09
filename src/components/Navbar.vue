<template>
  <nav>
      <div class="container">
          <router-link :to="{name:'Home'}">
      <h1>Blog</h1>
          </router-link>
      <div class="navgation">
          <router-link :to="{name:'Home'}">
          <div class="tooltip">
      <span class="material-icons home">home</span>
      <span class="tooltiptext">Home</span>
          </div>
          </router-link>
          <div class="tooltip">
      <span class="material-icons-outlined">feed</span>
      <span class="tooltiptext">Following</span>
          </div>
          <div class="tooltip">
      <span class="material-icons-outlined">app_registration</span>
         <span class="tooltiptext">Answer</span>
          </div>
          <div class="tooltip">
      <span class="material-icons-outlined">groups</span>
       <span class="tooltiptext">Spaces</span>
          </div>
          <div class="tooltip">
      <span class="material-icons-outlined">notifications</span>
      <span class="tooltiptext">notifications</span>
          </div>
      </div>
      <div class="search">
      <input type="text" placeholder="Search Blog">
      <span class="material-icons magnifying">search</span>
      </div>
      <div class="spread">
      <div class="profile-pic">
          <img src="../assets/user.jpg">
      </div>
      <span class="material-icons language">language</span>
      <button @click="handleLogout">SignOut</button>
      </div>
      </div>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import useLogout from '../composables/useLogout'
export default {
    setup(props) {
        const router = useRouter()
        const {logout} = useLogout()
        const handleLogout = async()=>{
            await logout()
            router.push({name:'Login'})
        }
     
     

     return{handleLogout}
    }

}
</script>

<style>
.nav-enter-from{
    opacity: 0;
    transform: translateY(-50px);
}
.nav-enter-to{
    opacity: 1;
    transform: translateY(0);
}
.nav-enter-active{
    transition: all .9s ease;
}

.spread{
    display: flex;
    align-items: center;
}
.language{
    color: gray;
    font-size: 30px;
    cursor: pointer;
    padding: .5rem;
    display: block;
    margin: 0 .5rem;
}

.language:hover{
    background: rgba(128, 128, 128, 0.056);
}
.container h1{
    color: rgba(163, 1, 1, 0.823);
}

nav{
    background-color: white;
    padding: .1rem 0;
    position: sticky;
    width: 100%;
    top: 0;
    right: 0;
    box-shadow: 0 0 .2rem rgba(0, 0, 0, 0.138);
    z-index: 546546;
}
body{
    background-color: #f1f2f2;
}
.container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin: auto;
    padding: 0 1rem;
}
.profile-pic{
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}
.profile-pic img{
    width: 100%;
    height: 100%;
}


.search{
    position: relative;
    width: 35%;
   
}
.magnifying{
    position: absolute;
    top: 7px;
    left: 5px;
    opacity: .4;
}
nav input{
    width: 100%;
    border: none;
    border: 1px solid rgba(128, 128, 128, 0.385);
    padding: .5rem 2rem;
    border-radius: 5px;
}
button{
    border: none;
    background-color: rgba(163, 1, 1, 0.823);
    color: white;
    padding: .6rem 1rem;
    cursor: pointer;
    border-radius: 15px;
}
button:hover{
    background-color:rgb(163, 1, 1);
}
.navgation span{
    cursor: pointer;
    font-size: 30px;
    padding: .5rem 1rem;
    display: inline-block;
    border-radius: 3px;
    color: gray;
}
.navgation span:hover{
    background: rgba(128, 128, 128, 0.056);
}
.navgation .home{
    color: rgb(163, 1, 1);
    border-bottom: solid 3px rgb(163, 1, 1);
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 90px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: smaller;
  text-align: center;
  border-radius: 15px;
  border: solid .5px rgba(128, 128, 128, 0.207);
  padding: 5px 5px;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -41px;
  margin-top: 10px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
@media only screen and (max-width: 754px){

.navgation span{
    cursor: pointer;
    font-size: 25px;
    padding: .5rem 1rem;
    display: inline-block;
    border-radius: 3px;
    color: gray;
}
.language{
     font-size: 25px;
}
.search{
    max-width: 25%;

}
}
@media only screen and (max-width: 460px){
    .navgation{
        display: flex;
        align-items: center ;
    }
    
    .container h1{
        display: none;
    }
    .navgation span{
         font-size: 24px;
         padding: .5rem .7rem;
    }
    .profile-pic{
        display: none;

    }
    .language{
     font-size: 24px;
     margin: 0 .3rem;
}
}
@media only screen and (max-width: 350px){
.language{
    display: none;
}
}
</style>