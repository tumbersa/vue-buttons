<template>
    <PageLayout>
        <HeaderPohomovaKapustin />
        <HatPohomovaKapustin />
        <div class="season">
            СЕЗОН 2023/24
        </div>
    </PageLayout>
</template>
  
<script>
import PageLayout from "../../parts/PageLayout";
import HeaderPohomovaKapustin from "./components/HeaderPohomovaKapustin.vue";
import HatPohomovaKapustin from "./components/HatPohomovaKapustin.vue"

export default {
    name: "BlogPohomovaKapustinHome",
    components: {
        PageLayout,
        HeaderPohomovaKapustin,
        HatPohomovaKapustin
    }
};
</script>
  
<style lang="less">
body {
    background-color: white;
}


</style>
