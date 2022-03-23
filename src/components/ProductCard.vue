<template>
  <div class="card kol-3">
    <div class="card__icon--container">
      <button>
        <img
          src="../assets/media/heart-outline.png"
          alt="Knapp for å legge til i favoritter"
        />
      </button>
      <button>
        <img src="../assets/media/cart-grey.png" alt="Legg til i handlekurv" />
      </button>
    </div>
    <div class="card__img-container">
      <img :src="img" alt="" :style="checkHeight" />
    </div>
    <div class="card__text--container">
      <h3>
        {{ name }}
      </h3>
      <h3>
        <b> ${{ price }} </b>
      </h3>
    </div>
    <div class="card__button--container">
      <router-link :to="'/shop/' + category + '/' + id" tag="button">
        See Details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["name", "price", "img", "imgHeight", 'id', 'category'],
  computed: {
    checkHeight() {
      if (this.imgHeight > 600 && this.imgHeight < 1500) {
        return "width: 70%";
      } else if (this.imgHeight > 1500) {
        return "width: 60%";
      }
    }
  }
};
</script>

<style>
.card {
  padding-top: 1.5%;
  box-shadow: 0px 0px 20px 0.5px rgba(0, 0, 0, 0.3);
  position: relative;
  background-color: #f1f1f1;
  width: 60%;
  display: inline-block;
  border-radius: 5px;
  animation: downscale-card 0.3s ease-in-out forwards;
  margin-bottom: 15%;
  margin-left: auto;
  margin-right: auto;
}

.card__icon--container {
  margin-bottom: 10%;
  display: flex;
  justify-content: space-between;
}

.card__icon--container button {
  border: none;
  background-color: transparent;
}

.card__icon--container img {
  cursor: pointer;
  opacity: 0.6;
  width: 30%;
  transition: 0.3s;
}

.card__img-container {
  height: 180px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 4%;
  text-align: center;
}

.card__img-container img {
  width: 55%;
}

.card__text--container {
  margin-top: 5%;
  text-align: center;
  height: 100%;
  padding-bottom: 9%;
}

.card__text--container h3 {
  font-weight: 400;
}

.card__button--container {
  position: absolute;
  bottom: -20px;
  left: 0px;
  width: 100%;
}

.card__button--container button {
  width: 100%;
  border: none;
  padding: 5%;
  cursor: pointer;
  background-image: linear-gradient(to right, #008066, rgba(0, 128, 102, 0.7));
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  opacity: 0;
  transition: 0.3s;
}

.card:hover {
  animation: scale-card 0.3s ease-in-out forwards;
}

.card:hover .card__button--container button {
  display: block;
  opacity: 1;
}

.card:hover .card__icon--container img {
  opacity: 1;
}

@keyframes scale-card {
  to {
    transform: scale(1.05);
  }
}

@keyframes downscale-card {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}
</style>
