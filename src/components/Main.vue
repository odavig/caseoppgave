<template>
  <div>
    <app-cards-container heading="Dette er en overskrift" bannerClass="slide"></app-cards-container>
    <app-cards-container heading="Og dette er den andre" bannerClass="slide"></app-cards-container>
    <div class="rutenett infoContainer" v-if="infoContainerVisible == 'true'">
      <div class="kol-6 imgContainer">
        <img src="../assets/media/img.png" alt="" />
      </div>
      <div class="imgTextContainer kol-6">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          pellentesque ante eget pretium accumsan.
        </h1>
        <h5>
          Integer gravida erat et erat placerat, vel scelerisque velit volutpat.
          Integer viverra orci eleifend sollicitudin pulvinar. Maecenas nec dui
          pretium, molestie dolor sit amet, egestas erat. Maecenas bibendum
          posuere justo sit amet ultrices.
        </h5>
      </div>
    </div>
    <app-cards-container heading="Dette er en overskrift" bannerClass="slide"></app-cards-container>
    <app-cards-container heading="Og dette er den andre" bannerClass="slide"></app-cards-container>
  </div>
</template>

<script>
import CardsContainer from "./CardsContainer.vue";
export default {
  props: ['infoContainerVisible'],
  components: {
    appCardsContainer: CardsContainer
  }
};
</script>

<style>
.infoContainer {
  padding-top: 5%;
}
.imgTextContainer {
  background-color: #008066;
  padding: 20%;
  color: white;
}

.imgContainer img {
  width: 100%;
  height: 100%;
}
</style>
