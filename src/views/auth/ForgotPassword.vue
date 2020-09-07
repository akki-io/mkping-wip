<template>
  <auth-layout :heading="heading">

  </auth-layout>
</template>

<script>

import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: "ForgotPassword",
  components: {
    AuthLayout
  },
  data() {
    return {
      heading: "Forgot your password"
    }
  },
}
</script>
