<template>
    <img class="green-filled" :src="changeArrow" alt="">
</template>

<script>
import ArrowBlack from '../assets/media/arrow-black.png'
import ArrowGreen from '../assets/media/arrow-green.png'
import ArrowWhite from '../assets/media/arrow-white.png'

export default {
    name: "ArrowIcon",
    props: ['imgSrc'],
    computed: {
        changeArrow() {
            if (this.imgSrc === 'black') {
                return ArrowBlack
            } else if (this.imgSrc === 'green') {
                return ArrowGreen
            } else if (this.imgSrc === 'white') {
                return ArrowWhite
            }
        }
    }
}
</script>

<style scoped>
    img {
        width: 35px;
        height: 35px;
    }

    .green-filled {
        background-color: #008066;
        border-radius: 50%;
        padding: 0.2%;
        padding-bottom: 0.1%;
    }
</style>