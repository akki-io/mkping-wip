<template>
  <auth-layout :heading="heading">
    <form @submit.prevent="forgotPasswordSubmit">
      <div>
        <label for="code" class="mk-input-label">
          Verification Code
        </label>
        <div class="mt-1 rounded-sm shadow-sm">
          <input
            v-model="code"
            id="email"
            type="text"
            class="w-full mk-input"
            :class="{ 'border-red-500': $v.code.$error }"
          />
          <span v-if="!$v.code.required && $v.code.$dirty" class="mk-error"
            >Code is required.</span
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
          <span
            v-if="!$v.password.minLength && $v.password.$dirty"
            class="mk-error"
            >Password should be at least 10 characters.</span
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
            <spinner v-if="loading"> </spinner> Reset Password
          </button>
        </span>
      </div>
    </form>
  </auth-layout>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import Spinner from "@/components/Spinner";
import { Auth } from "aws-amplify";
import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: "ForgotPasswordSubmit",
  components: {
    Spinner,
    AuthLayout
  },
  mounted() {
    const email = this.$store.state.email;
    if (!email) {
      this.$router.push({ name: "SignIn" });
    }
    this.email = email;
  },
  data() {
    return {
      email: null,
      code: null,
      password: null,
      loading: false,
      heading: "Forgot your password"
    };
  },
  validations: {
    code: {
      required
    },
    password: {
      required,
      minLength: minLength(10)
    }
  },
  methods: {
    async forgotPasswordSubmit() {
      this.loading = true;
      this.errorMessage = null;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await Auth.forgotPasswordSubmit(this.email, this.code, this.password)
          .then(() => {
            this.$store.commit("setEmail", null);
            this.$toast(
              "Password updated, please login with the new password."
            );
            this.$router.push({ name: "SignIn" });
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
