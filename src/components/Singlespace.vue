<template>
   <div class="space">
      <div class="space-img">
        <img :src="doc.imgUrl">
      </div>
     <span class="text-wrap">{{doc.name}}</span>
 </div>
</template>

<script>
export default {
    props:['doc'],
    setup(props) {
        
    }

}
</script>

<style>

</style>