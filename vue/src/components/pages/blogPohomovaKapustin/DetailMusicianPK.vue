<template>
    <div class="container">
      <div>
        <img :src="musician.imageUrl" :alt="musician.name" class="musician__image" />
        <div class="name">
          {{ musician.name }} {{ musician.age }} y.o.
        </div>
        <div class="description">
          {{ musician.description }}
        </div>
      </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "DetailMusicianPK",
  computed: {
    ...mapGetters('StorePohomovaKapustin', [
      'getMusicianById'
    ]),
    musician() {
      return this.getMusicianById(this.$route.params.id);
    }
  }
};
</script>

<style scoped lang="less">
.container {
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.musician__image {
  margin-top: 30px;
  width: 400px;
  height: 400px;
  border-radius: 200px;

}

.name {
  text-align: center;
  font-family: "Verdana";
  color: lightgray;
  font-size: 40px;
  margin-top: 20px;
}

.description {
  text-align: center;
  font-family: "Verdana";
  font-size: 20px;
  margin-top: 20px;
}
</style>