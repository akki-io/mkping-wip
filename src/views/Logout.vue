<template>
  <div></div>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
  created() {
    this.logout();
  },
  methods: {
    async logout() {
      await Auth.signOut({ global: true })
        .then(() => {
          this.$router.push({name: "SignIn"})
        });
    }
  }
}
</script>
