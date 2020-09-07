<template>
  <layout-admin :navigationData="navigationData">
    <div class="flex items-center pb-6">
      <h1 class="flex-1 text-white text-lg leading-7">
        Notifications
      </h1>
    </div>
  </layout-admin>
</template>
<script>
import LayoutAdmin from "@/layouts/LayoutAdmin";

export default {
  name: "AdminNotificationsList",
  components: { LayoutAdmin },
  data() {
    return {
      navigationData: {
        activeNavigation: "notifications"
      }
    };
  }
};
</script>
