<template>
  <auth-layout :heading="heading">
    <form @submit.prevent="forgotPassword">
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
        <span class="block w-full rounded-sm shadow-sm">
          <button
            type="submit"
            class="w-full mk-btn mk-btn-secondary"
            :disabled="loading"
          >
            <spinner v-if="loading"> </spinner> Forgot Password
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
  name: "ForgotPassword",
  components: {
    Spinner,
    AuthLayout
  },
  data() {
    return {
      email: null,
      loading: false,
      heading: "Forgot your password"
    };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    async forgotPassword() {
      this.loading = true;
      this.errorMessage = null;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await Auth.forgotPassword(this.email)
          .then(() => {
            this.$store.commit("setEmail", this.email);
            this.$router.push({ name: "ForgotPasswordSubmit" });
          })
          .catch(error => {
            this.$toast(error.message);
          });
      }
      this.loading = false;
    }
  }
};
</script>
