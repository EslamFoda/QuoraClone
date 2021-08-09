<template>

  <div class="form-background">
      <div class="form-container">
          <h1>Blog 4U</h1>
        <p>A place to share knowledge and better understand the world</p>
        <div class="form-grid">
            <form @submit.prevent="handleSignup" class="signup">
                <span>Sign Up</span>
                <label>Name</label>
                <input type="text" placeholder="Your name" required v-model="displayName">
                <label>Email</label>
                <input type="email" placeholder="Your email" v-model="emailSignup">
                <label>Password</label>
                <input type="password" placeholder="Your password" v-model="passwordSignup">
                <button>Sign Up</button>
                <div class="error">{{errorSignup}}</div>
            </form>
            <form @submit.prevent="handleLogin" class="login">
                <span>Login</span>
                <label>Email</label>
                <input type="email" placeholder="Your email" v-model="email">
                <label>Password</label>
                <input type="password" placeholder="Your password" v-model="password">
                <button>Login</button>
                <div class="error">{{error}}</div>
            </form>
        </div>
      </div>
  </div>

</template>

<script>
import {router, useRouter} from 'vue-router'
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
import useSingup from '../composables/useSignup'
export default {
    setup(props) {
        const router = useRouter()
        const email = ref('')
        const password = ref('')
        const displayName = ref('')
        const passwordSignup = ref('')
        const emailSignup = ref('')
        const {error, login} = useLogin()
        const {errorSignup, signup} = useSingup()
        const handleLogin = async()=>{
            await login(email.value,password.value)
            if(!error.value){
                console.log('user logged in')
                router.push({name:'Home'})
            }else{
                console.log(error.value)
            }
        }

        const handleSignup = async()=>{
            if(!errorSignup.value){
            await signup(emailSignup.value,passwordSignup.value,displayName.value)
             router.push({name:'Home'})
            }

        }




        return {email,password,handleLogin,error,displayName,emailSignup,passwordSignup,handleSignup,errorSignup}
    }

}
</script>

<style scoped>

.form-background{
    background-image: url(https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png);
    background-size: cover;
    width: 100%;
    height: 100vh;
    padding: 1rem;
}
.form-container{
    background-color: white;
    max-width: 700px;
    min-width: 300px;
    padding: 1.5rem;
    border-radius: 5px;
    margin: auto;
    transform: translateY(2rem);

}
.form-grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1rem ;
}
.form-container label{
    display: block;
    font-weight: bold;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.878);
}
.form-container h1{
    color: rgb(163, 1, 1);
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.form-container h1, p {
    text-align: center;
    line-height: 1.5;
}
.form-container p {
    margin-bottom: 2rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.494);
}
.form-grid span{
    font-size: 15px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.385);
    display: block;
    padding-bottom: .5rem;
    margin-bottom: 1rem;
}

input{
    width: 100%;
    border: none;
    border: 1px solid rgba(128, 128, 128, 0.385);
    padding: .8rem;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    margin-top: .7rem;
  
}
input:focus{
        border: 1px solid rgb(32, 175, 226);
}
.signup{
    border-right: solid 1px rgba(128, 128, 128, 0.385);
    padding-right: 1rem;
}
button{
    border: none;
    background-color: rgba(45, 45, 233, 0.741);
    color: white;
    padding: .6rem 1.5rem;
    cursor: pointer;
    border-radius: 15px;
}
button:hover{
 background-color: rgb(45, 45, 233);
}
.error{
    color: crimson;
    font-size: .8rem;
    margin: 1rem 0;
}
@media only screen and (max-width: 526px){
    .form-container label{
        font-size: 11px;
    }
    .form-container input{
        font-size: 11px;
         padding: .6rem;
         margin-bottom: 1rem;
         margin-top: .8rem;

    }

}
</style>