<template>
  <auth-layout :heading="heading">
    <form @submit.prevent="signIn">
      <div>
        <label for="email" class="mk-input-label">
          Email address
        </label>
        <div class="mt-1 rounded-sm shadow-sm">
          <input
            v-model="email"
            id="email"
            type="email"
            class="w-full mk-input"
            :class="{ 'border-red-500': $v.email.$error }"
          />
          <span v-if="!$v.email.required && $v.email.$dirty" class="mk-error"
            >Email is required.</span
          >
          <span v-if="!$v.email.email && $v.email.$dirty" class="mk-error"
            >Incorrect email format.</span
          >
        </div>
      </div>
      <div class="mt-6">
        <label for="password" class="mk-input-label">
          Password
        </label>
        <div class="mt-1 rounded-sm shadow-sm">
          <input
            v-model="password"
            id="password"
            type="password"
            class="w-full mk-input"
            :class="{ 'border-red-500': $v.password.$error }"
          />
          <span
            v-if="!$v.password.required && $v.password.$dirty"
            class="mk-error"
            >Password is required.</span
          >
        </div>
      </div>
      <div class="mt-3 text-xs text-right">
        <router-link :to="{ name: 'ForgotPassword' }" class="mk-link">
          Forgot your password?
        </router-link>
      </div>
      <div class="mt-6">
        <span class="block w-full rounded-sm shadow-sm">
          <button
            type="submit"
            class="w-full mk-btn mk-btn-secondary"
            :disabled="loading"
          >
            <spinner v-if="loading"> </spinner> Sign in
          </button>
        </span>
      </div>
    </form>
  </auth-layout>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import Spinner from "@/components/Spinner";
import { Auth } from "aws-amplify";
import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: "SignIn",
  components: {
    Spinner,
    AuthLayout
  },
  data() {
    return {
      email: null,
      password: null,
      errorMessage: null,
      loading: false,
      heading: "Sign in to your account"
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    async signIn() {
      this.loading = true;
      this.errorMessage = null;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await Auth.signIn(this.email, this.password)
          .then(user => {
            if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
              this.$store.commit("setUser", user);
              this.$router.push({ name: "NewPassword" });
            } else {
              this.$router.push({ name: "AdminMonitors" });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            if (error.code === "NotAuthorizedException") {
              this.errorMessage = "Incorrect email or password.";
            }
            this.$toast(this.errorMessage);
          });
      }
      this.loading = false;
    }
  }
};
</script>
