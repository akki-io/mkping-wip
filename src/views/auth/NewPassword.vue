<template>
  <auth-layout :heading="heading">
    <form @submit.prevent="completeNewPassword">
      <div class="mt-6">
        <label for="password" class="mk-input-label">
          New Password
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
            <spinner v-if="loading"> </spinner>
            Create Password and Sign In
          </button>
        </span>
      </div>
    </form>
  </auth-layout>
</template>

<script>
import { Auth } from "aws-amplify";
import { required, minLength } from "vuelidate/lib/validators";
import Spinner from "@/components/Spinner";
import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: "NewPassword",
  components: {
    Spinner,
    AuthLayout
  },
  mounted() {
    const user = this.$store.state.user;
    if (!user) {
      this.$router.push({ name: "SignIn" });
    }
    if (user.challengeName !== "NEW_PASSWORD_REQUIRED") {
      this.$router.push({ name: "SignIn" });
    }
    this.user = user;
  },
  data() {
    return {
      user: null,
      password: null,
      loading: false,
      heading: "Create new password"
    };
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await Auth.completeNewPassword(this.user, this.password)
          .then(() => {
            this.$router.push({ name: "AdminMonitors" });
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
