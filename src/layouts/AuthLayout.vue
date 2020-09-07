<template>
<div class="min-h-screen bg-dark-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div>
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-16 w-auto" src="@/assets/logo-color.svg" alt="mkping">
        <h2 class="mt-6 text-center text-3xl leading-9 text-white text-opacity-75">
          {{ heading }}
        </h2>
      </div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-dark-700 py-8 px-4 shadow sm:rounded-sm sm:px-10">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="text-xs text-dark-300 mx-auto mt-5">
      Powered by <a href="http://github.com/akki-io/mkping" target="_blank">mkping</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
  props: {
    heading: {
      type: String,
      require: true,
    },
  }
}
</script>
