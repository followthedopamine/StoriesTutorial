<template>
    <div class="login-container">
        <div class="card">
            <div class="card-content">
                <h3><i class="fas fa-book-reader"></i> StoryBooks</h3>
                <div class="section">
                    <p class="lead">Create public and private stories from your life</p>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <a href="/auth/google" class="btn red darken-1">
                        <i class="fab fa-google left"></i> Log in with Google
                    </a>
                </div>
                <h5>{{loginPage}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import LoginService from '../services/LoginService'

    export default {
        name: "LoginComponent",
        data() {
            return {
                loginPage: '',
                error: '',
            }
        },
        async created() {
            try {
                this.loginPage = await LoginService.getLoginPage()
            } catch (err) {
                this.error = err.message
            }
        }
    }
</script>

<style scoped> 
p {
    margin: 10px 0 !important;
}
.login-container {
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
}


</style>