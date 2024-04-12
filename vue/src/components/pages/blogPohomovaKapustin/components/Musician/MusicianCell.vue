<template>
  <div class="musician-cell">
    <img :src="musician.imageUrl" :alt="musician.name" class="musician__image" @click="viewMusicianDetails(musician)"/>
    <div class="info">
      <div class="name">
        <img :src="imgNameSrc" :alt="imgName" class="img__name" />
        {{ musician.name }}
      </div>
      <div class="age">
        <img :src="imgAgeSrc" :alt="imgAge" class="img__age" />
        {{ musician.age }}
      </div>
      <div class="genre">
        <img :src="imgGenreSrc" :alt="imgGenre" class="img__genre" />
        {{ musician.genre }}
      </div>
      <div class="listenersPerMonth">
        <img :src="imgListenersSrc" :alt="imgListeners" class="img__listeners" />
        {{ musician.listenersPerMonth }}
      </div>
    </div>
  </div>
</template>

<script>
import { imgNameSrc, imgAgeSrc, imgGenreSrc, imgListenersSrc } from '@/components/pages/blogPohomovaKapustin/constantsPK.js';
import { RouteNames } from '@/router/routes';

export default {
  props: {
    musician: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewMusicianDetails(musician) {
      this.$router.push({ name: RouteNames.DETAIL_MUSICIAN_PK, params: { id: musician.id}});
    }
  },
  computed: {
    imgNameSrc() {
      return imgNameSrc;
    }, 
    imgAgeSrc() {
      return imgAgeSrc;
    },
    imgGenreSrc() {
      return imgGenreSrc;
    },
    imgListenersSrc() {
      return imgListenersSrc;
    }
  }
};
</script>

<style scoped lang="less">
.musician-cell {
  display: flex;
  align-items: center;
}

.musician__image {
  width: 200px;
  height: 200px;
  margin-right: 10px;
  border-radius: 15px;
  cursor: pointer;
}

.info {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Verdana";
  color: lightgray;
  font-size: 23px;
}

.img__name {
  width: 20px;
  height: 20px;
}

.img__age {
  width: 20px;
  height: 20px;
}

.img__genre {
  width: 20px;
  height: 20px;
}

.img__listeners {
  width: 20px;
  height: 20px;
}
</style>
