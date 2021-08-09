<template>
<Navbar/>
   <div class="main-container">
   <div class="home-grid">
     <transition name="space-left" appear>
     <div class="left-grid">
    <Space/>
     </div>
     </transition>
     <transition name="mid" appear>
     <div class="mid-grid">
       <Ask/>
       <Posts/>
     </div>
     </transition>
     <transition name="right" appear>
     <div class="right-grid">
       <Feeds/>
     </div>
     </transition>
   </div>
   </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Space from '../components/Space'
import Ask from '../components/Ask'
import Posts from '../components/Posts'
import Feeds from '../components/Feeds.vue'
import { onUpdated, ref } from 'vue'
export default {
  components:{Space,Ask,Posts,Feeds,Navbar},
  setup(props) {
   
    
  }
 
}
</script>
<style>
  .main-container{
    max-width: 1000px;
    margin: auto;
    padding: 0 1rem;
  }
  .home-grid{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 2rem;
  }
@media only screen and (max-width: 612px){  
.search{
    display: none;
}
.home-grid{
  gap: 1rem;
  grid-template-columns: repeat(1,1fr);
}

.right-grid{
  display: none;
}

}
.mid-enter-from{
  opacity: 0;
  transform: scale(.9);
}
.mid-enter-to{
 opacity: 1;
 transform: scale(1);
}
.mid-enter-active{
  transition: all .9s ease;
}
.right-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.right-enter-to{
  opacity: 1;
  transform: translateX(0);
}
.right-enter-active{
  transition:  all .9s ease;
}
.space-left-enter-from{
    opacity: 0;
    transform: translateX(-100px);
}
.space-left-enter-to{
    opacity: 1;
    transform: translateX(0);
}
.space-left-enter-active{
    transition: all .9s ease;
}
</style>