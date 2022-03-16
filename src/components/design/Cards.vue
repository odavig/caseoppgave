<template>
  <div class="card">
    <div class="card__icon--container">
      <button>
        <img
          src="../../assets/media/heart-outline.png"
          alt="Knapp for å legge til i favoritter"
        />
      </button>
      <button>
        <img
          src="../../assets/media/cart-grey.png"
          alt="Legg til i handlekurv"
        />
      </button>
    </div>
    <div class="card__img-container">
      <img src="../../assets/media/banner-img.png" alt="" />
    </div>
    <div class="card__text--container">
      <h3>
        {{ name }}
      </h3>
      <h3>
        {{ price }}
      </h3>
    </div>
    <div class="card__button--container">
      <button>
        Evt knapp
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "price"]
};
</script>

<style>
.card {
  padding-top: 1.5%;
  box-shadow: 0px 0px 20px 0.5px rgba(0, 0, 0, 0.3);
  position: relative;
  background-color: #f1f1f1;
  width: 15%;
  display: inline-block;
  margin-left: 3%;
  border-radius: 5px;
}

.card__icon--container {
  margin-bottom: 10%;
  display: flex;
  justify-content: space-between;
}

.card__icon--container button {
  border: none;
}

.card__icon--container img {
  cursor: pointer;
  opacity: 0.6;
  width: 30%;
}

.card__img-container {
  height: 180px;
  margin-top: 4%;
  text-align: center;
}

.card__img-container img {
  width: 80%;
}

.card__text--container {
  margin-top: 5%;
  text-align: center;
  height: 100%;
  padding-bottom: 9%;
}

.card__button--container {
  position: absolute;
  bottom: 0;
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
  display: none;
}

.card:hover {
    animation: scale-card 0.3s ease-in-out forwards;
}

@keyframes scale-card {
    to {
        transform: scale(1.05);
    }
}
</style>
