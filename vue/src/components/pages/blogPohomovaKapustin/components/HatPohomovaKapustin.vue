<template>
    <div class="image-container">
        <img src="https://s1.1zoom.me/b6966/489/Fruit_Vegetables_Many_Wood_planks_512973_3840x2160.jpg" alt="vegetables"
            class="vegetables__image" />
        <div class="overlay-text">
            Свежие овощи и фрукты прямо с грядок моей соседки!!! 🤣🤗🤫
        </div>
    </div>
</template>

<script>
</script>

<style lang="less">
.image-container {
    position: relative;
    width: 100%;
}

.overlay-text {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: whitesmoke;
    font-size: 27px;
    font-family: "Lucida Handwriting", cursive;
    white-space: nowrap;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}

.vegetables__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}
</style>