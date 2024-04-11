<template>
    <div class="container">
        <HeaderPohomovaKapustin />
        <HatPohomovaKapustin />
        <div class="albums_title">
            Альбомы 2023/24
        </div>
    </div>
</template>
  
<script>
import HeaderPohomovaKapustin from "./components/HeaderPohomovaKapustin.vue";
import HatPohomovaKapustin from "./components/HatPohomovaKapustin.vue"

export default {
    name: "BlogPohomovaKapustinHome",
    components: {
        HeaderPohomovaKapustin,
        HatPohomovaKapustin
    }
};
</script>
  
<style lang="less">
body {
    background-color: black;
}

.container {
    text-align: center; /* Центрирование содержимого по горизонтали */
}

.albums_title {
    color: white;
    font-family: "Lucida Handwriting", cursive;
    font-size: 30px;
    letter-spacing: 5px;
}
</style>
