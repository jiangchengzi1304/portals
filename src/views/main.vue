<template>
    <div style="height: 100%;">
        <header-nav></header-nav>
        <div class="main-container">
            <router-view/>
        </div>
    </div>
</template>
<script>
import HeaderNav from '@/components/HeaderNav'

export default {
    name: "maincontainer",
    components: {HeaderNav}
}
</script>
<style>
    .main-container{
        width: 100%;
        height: 100%;
    }
</style>