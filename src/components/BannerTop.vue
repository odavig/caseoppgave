<template>
  <div id="heroBanner">
    <padding-container paddingSize="paddingM" class="rutenett">
      <div id="bannerText">
        <div>
          <h1>{{ headingText }}</h1>
          <p v-if="paragraphVisible == 'true'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            lorem ultrices enim ac. Vitae consequat parturient viverra ut.
          </p>
        </div>
        <app-button
          v-if="btnVisible == 'true'"
          btnClass="secondary medium"
        >
        Buy Now
        </app-button>
      </div>
      <div id="bannerImg" v-if="imgVisible == 'true'">
        <img
          v-if="imgVisible == 'true'"
          src="../assets/media/banner-img.png"
          alt="Bilde av en TV"
        />
      </div>
      <arrow-icon v-if="arrowVisible == 'true'" id="bannerIcon" imgSrc="white">
      </arrow-icon>
    </padding-container>
  </div>
</template>

<script>
export default {
  name: 'BannerTop',
  props: [
    "headingText",
    "paragraphVisible",
    "btnVisible",
    "imgVisible",
    "arrowVisible"
  ]
};
</script>

<style scoped>
#heroBanner {
  background-color: #008066;
  color: white;
  position: relative;
}

#bannerText {
  grid-column: 1/5;
}

#bannerText {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#bannerText button {
  width: 30%;
}

#bannerImg {
  grid-column: 8/13;
}

#bannerImg img {
  width: 100%;
}

#bannerIcon {
  bottom: -20px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
