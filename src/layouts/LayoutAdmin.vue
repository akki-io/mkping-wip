<template>
  <div>
    <div class="relative min-h-screen flex flex-col">
      <!-- Navbar -->
      <nav class="flex-shrink-0 bg-dark-600">
        <div class="mx-auto px-2 sm:px-4 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <!-- Logo section -->
            <div class="flex items-center px-2 lg:px-0 xl:w-64">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-auto"
                  src="@/assets/logo-color.svg"
                  alt="mkping"
                />
              </div>
            </div>
            <div class="block w-80">
              <div class="flex items-center justify-end">
                <!-- Profile -->
                <div class="ml-6 text-xs text-dark-200">
                  Logged in as {{ this.$store.state.user.attributes.email }}
                </div>
                <div class="ml-4 relative flex-shrink-0">
                  <div>
                    <router-link
                      :to="{ name: 'Logout' }"
                      class="mk-btn mk-btn-secondary"
                      :class="{
                        'bg-dark-300':
                          navigationData.activeNavigation === 'monitors'
                      }"
                    >
                      Logout
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- 3 column wrapper -->
      <div class="flex-grow lg:flex">
        <!-- Left sidebar & main wrapper -->
        <div class="flex-1 min-w-0 lg:flex">
          <!-- Left Side Navigation -->
          <div class="lg:flex-shrink-0 lg:w-64 bg-dark-500">
            <nav class="lg:mt-6">
              <!-- Navigation -->
              <div class="space-y-0 pb-6">
                <router-link
                  :to="{ name: 'AdminMonitors' }"
                  class="group flex items-center mk-navigation-link"
                  :class="{
                    'bg-dark-300':
                      navigationData.activeNavigation === 'monitors'
                  }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-mist ml-3 mr-3 h-5 w-5 text-dark-200"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 5h3m4 0h9" />
                    <path d="M3 10h11m4 0h1" />
                    <path d="M5 15h5m4 0h7" />
                    <path d="M3 20h9m4 0h3" />
                  </svg>
                  Monitors
                </router-link>
                <router-link
                  :to="{ name: 'AdminNotifications' }"
                  class="group flex items-center mk-navigation-link"
                  :class="{
                    'bg-dark-300':
                      navigationData.activeNavigation === 'notifications'
                  }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-bell ml-3 mr-3 h-5 w-5 text-dark-200"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path
                      d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                    />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                  Notifications
                </router-link>
              </div>
            </nav>
            <div class="fixed pb-2 bottom-0 left-0">
              <div class="ml-6 text-xs text-dark-300">
                Powered by
                <a href="http://github.com/akki-io/mkping" target="_blank"
                  >mkping</a
                >
              </div>
            </div>
          </div>
          <!-- Main Container -->
          <div class="bg-dark-700 lg:min-w-0 lg:flex-1">
            <div class="py-8 px-12">
              <slot></slot>
            </div>
          </div>
        </div>
        <slot name="right-sidebar"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutAdmin",
  props: {
    navigationData: {
      type: Object,
      require: true
    }
  }
};
</script>
