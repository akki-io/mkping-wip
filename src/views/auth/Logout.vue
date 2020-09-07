<template>
  <div></div>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
  name: "Logout",
  created() {
    this.logout();
  },
  methods: {
    async logout() {
      await Auth.signOut({ global: true })
        .then(() => {
          this.$toast('Signed out Successfully');
          this.$router.push({name: "SignIn"})
        });
    }
  }
}
</script>
