<template>
    <div class="container">
        <HeaderPohomovaKapustin />
        <HatPohomovaKapustin />
        <div class="albums_title">
            Альбомы 2023/24
        </div>
        <AlbumGrid />
    </div>
</template>

<script>
import HeaderPohomovaKapustin from "./components/HeaderPohomovaKapustin.vue"
import HatPohomovaKapustin from "./components/HatPohomovaKapustin.vue"
import AlbumGrid from './components/Album/AlbumGrid.vue'

export default {
    name: "BlogPohomovaKapustinHome",
    components: {
        HeaderPohomovaKapustin,
        HatPohomovaKapustin,
        AlbumGrid
    }
};
</script>
  
<style lang="less">
.container {
    text-align: center;
    background-color: black;
}

.albums_title {
    color: white;
    font-family: "Lucida Handwriting", cursive;
    font-size: 30px;
    letter-spacing: 5px;
}
</style>
