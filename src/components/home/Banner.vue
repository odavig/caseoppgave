<template>
  <div id="heroBanner">
    <app-container paddingSize="paddingM" class="rutenett">
      <div id="bannerText">
        <div>
          <h1>Buy The Best Products From All Over The World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            lorem ultrices enim ac. Vitae consequat parturient viverra ut.
          </p>
        </div>
        <app-button btnTitle="Buy Now" btnClass="primary-white"></app-button>
      </div>
      <div id="bannerImg">
        <img src="../../assets/media/banner-img.png" alt="Bilde av en TV" />
      </div>
      <app-arrow-icon 
        id="bannerIcon"
        imgSrc="white">
      </app-arrow-icon>
    </app-container>
  </div>
</template>

<script></script>

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
