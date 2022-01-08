<template>
  <a :href="`https://gitpod.io/#${repository}`" target="_blank">
    <span>
    <img src="https://www.gitpod.io/images/gitpod-logo.svg" style="float: left; height: 24px; padding-right: 6px;">
      Open in Gitpod
    </span>
  </a>
</template>

<script>
export default {
  props: {
    repository: String
  }
}
</script>
