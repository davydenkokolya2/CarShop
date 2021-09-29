<template>
    <div class="vMainWrapper">
        <p>{{title}}</p>
    </div>
</template>

<script>
import vCatalog from './vCatalog'
import vCart from './vCart'

export default ({
    name: "vMainWrapper",
    components: {
        vCatalog,
        vCart
        },
    props: {},
    data() {
        return {
            title: "Main wrapper"
        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        console.log("Hello");
    },
})
</script>

<style>
    .vMainWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>

