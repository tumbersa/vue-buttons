<template>
    <div>
        123123132
        <div class="f">
        {{ musician.name }}
        </div>
    </div>
</template>

<script>

export default {
  name: "DetailMusicianPK",
  props: {
    musician: {
      type: Object,
      required: true
    }
  }
};
</script>
    
<style scoped lang="less">
.f {
    background-color: black;
}
</style>
  