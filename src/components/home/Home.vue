<template>
  <div>
    <app-banner
      headingText="Buy The Best Products From All Over The World"
      paragraphVisible="true"
      btnVisible="true"
      imgVisible="true"
      arrowVisible="true"
    ></app-banner>
    <app-main infoContainerVisible="true"></app-main>
  </div>
</template>

<script>
import Banner from "../Banner.vue";
import Main from "../Main.vue";

export default {
  components: {
    appBanner: Banner,
    appMain: Main
  }
};
</script>
