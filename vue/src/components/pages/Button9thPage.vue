<template>
  <div class="button-9th-page">
    <NinthButton type="default" :fill="false">
    low
    </NinthButton>
    <NinthButton type="primary" :fill="false"/>
    <NinthButton type="default" :fill="true"/>
    <NinthButton type="primary" :fill="true"/>
  </div>
</template>

<script>
import NinthButton from '@/components/ui/buttons/NinthButton.vue';

export default {
  name: 'Button9thPage',
  components: {
    NinthButton
  }
};
</script>

<style scoped>
.button-9th-page {
  background-color: rgb(51, 51, 51);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
