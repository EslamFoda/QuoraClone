<template>
<div class="space-container">
  <div class="feed">
    <div class="feed-header">
    <h5>Imporve Your Feed</h5>
    </div>
    <div class="feed-span">
    <span class="visit-feed">Visit your feed</span>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined square">check_box_outline_blank</span>
      <span>Follow 1 more Space</span>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined square">check_box_outline_blank</span>
      <span>Upvote 5 more good pieces of content</span>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined square">check_box_outline_blank</span>
      <span>Ask a question</span>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined square">check_box_outline_blank</span>
      <span>Add 3 credentials about where you live, work or study</span>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined square">check_box_outline_blank</span>
      <span>Answer a question</span>
    </div>
  </div>
  
  <div class="feed space-follow">
    <div class="feed-header space-header">
    <h5>Spaces to follow</h5>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined add-icon">add</span>
    <span>English (Language)</span>
    <p>All about English Grammer...</p>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined add-icon">add</span>
      <span>Data Sciences - Analytics</span>
      <p>Data sciences, big data, data strea... </p>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined add-icon">add</span>
      <span>Excel Hacks</span>
      <p>Basic/Advanced Excel📗 tips/tricks/hacks t... </p>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined add-icon">add</span>
      <span>Google SEO.</span>
      <p>SEO Tips and tricks to rank in Google searc...</p>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined add-icon">add</span>
      <span>Online money Making</span>
      <p>Anything that makes you financially free.</p>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined add-icon">add</span>
      <span>Online Marketing</span>
      <p>One Place To Learn All From Of Digital..</p>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined add-icon">add</span>
      <span>UI/UX & Product</span>
      <p>A Space to discuss user design and...</p>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined add-icon">add</span>
      <span>Better UX</span>
      <p>You can find the best content on Quora...</p>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined add-icon">add</span>
      <span>Hacking Ethically</span>
      <p>The space for learning cybersecurity, in...</p>
    </div>
    <div class="feed-span">
      <span class="material-icons-outlined add-icon">add</span>
      <span>💪 Freelancing</span>
      <p>Freelancing Tips || Tricks || Guides ||...</p>
    </div>

  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.feed{
  background-color: white;
   border: 1px solid rgba(128, 128, 128, 0.357);
}
.feed span{
  font-size: .8rem;
}
.feed-span{
  padding: .5rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.357);
  cursor: pointer;
}
.feed-span p {
  color: rgb(121, 119, 119);
  font-size: smaller;
  line-height: 1.5;
}
.feed-span:hover{
  background-color: #f1f2f2;
}
.feed-header{
  background-color: #eff0f0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.357) ;
  padding: .5rem;
  font-weight: 200;
  font-family: sans-serif;
}
.visit-feed{
   text-decoration: line-through;
   color: rgba(0, 0, 0, 0.316);
   padding: .5rem;
}
.square{
  margin-right: 4px;
  font-size: 12px !important;
  color: rgba(0, 0, 0, 0.316);
}
.space-follow{
  margin-top: 1rem;
}
.space-header{
  background-color: white;
}
.add-icon{
   margin-right: 4px;
  font-size: 12px !important;
  color: rgba(0, 0, 0, 0.686);
}
</style>