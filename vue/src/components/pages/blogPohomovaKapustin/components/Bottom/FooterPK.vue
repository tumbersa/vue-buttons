<template>
    <div class="footer">
        <img :src="imgTgSrc" :alt="footer_alt" class="footer__image" />
        <div class="footer__text">@p_chel_enok</div>
    </div>
</template>

<script>
import { imgTgSrc } from '@/components/pages/blogPohomovaKapustin/constantsPK.js';
export default {
    computed: {
        imgTgSrc() {
            return imgTgSrc
        }
    }
}
</script>

<style scoped lang="less">
.footer {
    height: 70px;
    background-color: black;
    color: white;
    font-family: "Verdana";
    text-transform: uppercase;
    letter-spacing: 5px;
    align-items: center;
}

.footer__image {
    width: 50px;
    height: 50px;
}

.footer__text {
    background-color: black;
    flex: 1;
    text-align: center; 
}
</style>
