<template>
    <div class="container">
        <HeaderPohomovaKapustin />
        <HatPohomovaKapustin />
        <AlbumTitle />
        <AlbumList />
        <MusicianGrid />
        <FooterPK />
    </div>
</template>

<script>
import HeaderPohomovaKapustin from "./components/Top/HeaderPohomovaKapustin.vue"
import HatPohomovaKapustin from "./components/Top/HatPohomovaKapustin.vue"
import AlbumTitle from './components/Album/AlbumTitle.vue'
import AlbumList from './components/Album/AlbumList.vue'
import MusicianGrid from './components/Musician/MusicianGrid.vue'
import FooterPK from './components/Bottom/FooterPK.vue'

export default {
    name: "BlogPohomovaKapustinHome",
    components: {
        HeaderPohomovaKapustin,
        HatPohomovaKapustin,
        AlbumTitle,
        AlbumList,
        MusicianGrid,
        FooterPK
    }
};
</script>
  
<style lang="less">
.container {
    text-align: center;
    background-color: black;
}
</style>
