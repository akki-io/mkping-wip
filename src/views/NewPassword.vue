<template>
  <div class="min-h-screen bg-dark-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sign-in">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-16 w-auto" src="@/assets/logo-color.svg" alt="mkping">
        <h2 class="mt-6 text-center text-3xl leading-9 text-white text-opacity-75">
          Enter new password
        </h2>
      </div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-dark-700 py-8 px-4 shadow sm:rounded-sm sm:px-10">
          <form @submit.prevent="completeNewPassword">
            <div class="mt-6">
              <label for="password" class="mk-input-label">
                New Password
              </label>
              <div class="mt-1 rounded-sm shadow-sm">
                <input v-model="password"
                       id="password"
                       type="password"
                       class="w-full mk-input"
                       :class="{ 'border-red-500': $v.password.$error }">
                <span v-if="!$v.password.required && $v.password.$dirty" class="mk-error">Password is required.</span>
                <span v-if="!$v.password.minLength && $v.password.$dirty" class="mk-error">Password should be at least 10 characters.</span>
              </div>
            </div>
            <div class="mt-6">
              <span class="block w-full rounded-sm shadow-sm">
                <button type="submit" class="w-full mk-btn mk-btn-secondary" :disabled="loading">
                  <spinner v-if="loading"> </spinner> Create Password and Sign In
                </button>
              </span>
            </div>
            <div class="mk-error mt-2" v-if="errorMessage"> {{ errorMessage }} </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { Auth } from 'aws-amplify';
import { required, minLength } from 'vuelidate/lib/validators';
import Spinner from "@/components/Spinner";

export default {
  components: {Spinner},
  mounted() {
    const user = this.$store.state.user;
    if (!user) {
      this.$router.push({name: "SignIn"});
    }
    if (user.challengeName !== 'NEW_PASSWORD_REQUIRED') {
      this.$router.push({name: "SignIn"});
    }
    this.user = user
    console.log(user);
  },
  data() {
    return {
      user: null,
      password: null,
      errorMessage: null,
      loading: false,
    }
  },
  validations: {
      password: {
        required,
        minLength: minLength(10)
      }
    },

  methods: {
    async completeNewPassword() {
      this.loading = true;
      this.errorMessage = null;this.$v.$touch();
      if(!this.$v.$invalid) {
        await Auth.completeNewPassword(this.user, this.password)
          .then(() => {
            this.$router.push({name: "AdminMonitors"})
          })
          .catch(error => {
            this.errorMessage = error.message;
          })
      }
      this.loading = false;
    }
  }
}
</script>
