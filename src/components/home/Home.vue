<template>
    <div>
        <app-banner></app-banner>
        <app-main></app-main>
    </div>
</template>

<script>
import Banner from './Banner.vue'
import Main from './Main.vue'

export default {
    components: {
        appBanner: Banner,
        appMain: Main
    }
}
</script>