<template>
  <layout-admin :navigationData="navigationData">
    <div class="flex items-center mb-6">
      <h1 class="flex-1 text-white text-lg leading-7">
        Monitors
      </h1>
      <div class="relative">
        <button
          id="add"
          type="button"
          class="mk-btn mk-btn-primary"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Add Monitor
        </button>
      </div>
    </div>
    <div>
      <div class="mb-6 relative">
        <input id="search" class="mk-input w-full" placeholder="Search" />
      </div>
    </div>

    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full mk-table rounded-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>SSL/TLS</th>
                  <th>Response</th>
                  <th>Check</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in 10" :key="n">
                  <td>
                    <div class="flex items-center">
                      <div>
                        <div>
                          ACCFS
                        </div>
                        <div class="text-dark-200">
                          <a href="https://www.accfs.com" target="_blank">
                            https://www.accfs.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="w-1 ">
                    <span
                      class="px-2 py-1 text-xs rounded bg-green-900 uppercase"
                    >
                      UP
                    </span>
                  </td>
                  <td class="w-1">
                    <span
                      class="px-2 py-1 text-xs rounded bg-red-900 uppercase"
                    >
                      INVALID
                    </span>
                  </td>
                  <td class="w-2">0.6203s</td>
                  <td class="w-1">3 minutes ago</td>
                  <td class="w-1 ">
                    <div class="flex items-center">
                      <a href="#" class="">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="text-dark-200 hover:text-dark-300 w-5 h-5"
                        >
                          <path
                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="ml-1 text-dark-200 hover:text-dark-300 w-5 h-5"
                        >
                          <path
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          ></path>
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav
              class=" text-dark-100 px-4 py-3 flex items-center justify-between sm:px-6"
            >
              <div class="hidden sm:block">
                <p class="text-xs leading-5">
                  Showing
                  <span class="font-medium">1</span>
                  to
                  <span class="font-medium">10</span>
                  of
                  <span class="font-medium">20</span>
                  results
                </p>
              </div>
              <span class="relative z-0 inline-flex shadow-sm">
                <button type="button" class="" aria-label="Previous">
                  <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button type="button" class="ml-4" aria-label="Next">
                  <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <template slot="right-sidebar">
      <!-- Activity feed -->
      <div
        class="bg-dark-900 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0 hidden lg:block lg:w-80"
      >
        <div class="pl-6">
          <div class="pt-6 pb-2">
            <h2 class="text-sm leading-5 font-semibold">Activity</h2>
          </div>
          <div>
            <ul class="divide-y divide-gray-200">
              <li class="py-4">
                <div class="flex space-x-3">
                  <img
                    class="h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                    alt=""
                  />
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium leading-5">You</h3>
                      <p class="text-sm leading-5 text-gray-500">1h</p>
                    </div>
                    <p class="text-sm leading-5 text-gray-500">
                      Deployed Workcation (2d89f0c8 in master) to production
                    </p>
                  </div>
                </div>
              </li>
              <!-- More items... -->
            </ul>
            <div class="py-4 text-sm leading-5 border-t border-gray-200">
              <a
                href="#"
                class="text-indigo-600 font-semibold hover:text-indigo-900"
                >View all activity &rarr;</a
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </layout-admin>
</template>
<script>
import LayoutAdmin from "@/layouts/LayoutAdmin";

export default {
  name: "AdminMonitorsList",
  components: { LayoutAdmin },
  data() {
    return {
      navigationData: {
        activeNavigation: "monitors"
      }
    };
  }
};
</script>
