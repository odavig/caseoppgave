<template>
    <div>
        <app-banner></app-banner>
        <app-main></app-main>
    </div>
</template>

<script>
import Main from '../Main.vue'
import Banner from '../Banner.vue'

export default {
    components: {
        appMain: Main,
        appBanner: Banner
    }
}
</script>