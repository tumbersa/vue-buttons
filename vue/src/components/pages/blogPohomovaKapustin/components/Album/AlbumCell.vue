<template>
  <div class="album__container">
    <div class="artist">{{ album.artist }}</div>
    <div>
      <img :src="album.imageUrl" :alt="album.title" class="album__image" />
    </div>
    <div class="title">{{ album.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less">
.album__container {
  display: inline-block;
}

.album__image {
  width: 200px;
  height: auto;
}

.artist {
  font-family: "Verdana";
  color: white;
  font-size: 23px;
  overflow-wrap: break-word; 
  max-width: 300px; 
}

.title {
  font-family: "Verdana";
  color: lightgray;
  font-size: 23px;
  overflow-wrap: break-word; 
  max-width: 300px; 
}
</style>
