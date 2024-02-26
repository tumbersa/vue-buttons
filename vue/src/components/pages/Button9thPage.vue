<template>
  <div class="button-9th-page" style="background-color: rgb(51, 51, 51);">
    <div v-for="button in buttons" :key="button.id">
      <NinthButton 
        :background-color="button.backgroundColor" 
        :border-color="button.borderColor"
        :text-color="button.textColor" 
        :top-indent="button.topIndent" 
        :bottom-indent="button.bottomIndent"
        :left-indent="button.leftIndent" 
        :right-indent="button.rightIndent">
        {{ button.text }}
      </NinthButton>
    </div>
  </div>
</template>

<script>
import NinthButton from '@/components/ui/buttons/NinthButton.vue';

export default {
  name: 'Button9thPage',
  components: {
    NinthButton
  },
  data () {
    return {
      buttons: [
        {
          id: 1,
          backgroundColor: 'rgb(51, 51, 51)',
          borderColor: 'rgb(68, 68, 68)',
          textColor: 'rgb(255, 255, 255)',
          topIndent: '25px',
          bottomIndent: '0px',
          leftIndent: '25px',
          rightIndent: '0px',
          text: 'Button'
        },
        {
          id: 2,
          backgroundColor: 'rgb(51, 51, 51)',
          borderColor: 'rgb(166, 88, 46)',
          textColor: 'rgb(166, 88, 46)',
          topIndent: '25px',
          bottomIndent: '0px',
          leftIndent: '0px',
          rightIndent: '0px',
          text: 'Button'
        },
        {
          id: 3,
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: 'rgb(255, 255, 255)',
          textColor: 'rgb(85, 85, 85)',
          topIndent: '25px',
          bottomIndent: '0px',
          leftIndent: '0px',
          rightIndent: '0px',
          text: 'Button'
        },
        {
          id: 4,
          backgroundColor: 'rgb(253, 106, 2)',
          borderColor: 'rgb(253, 106, 2)',
          textColor: 'rgb(255, 255, 255)',
          topIndent: '25px',
          bottomIndent: '0px',
          leftIndent: '0px',
          rightIndent: '25px',
          text: 'Button'
        },
        {
          id: 5,
          backgroundColor: 'rgb(51, 51, 51)',
          borderColor: 'rgb(126, 126, 126)',
          textColor: 'rgb(255, 255, 255)',
          topIndent: '0px',
          bottomIndent: '10px',
          leftIndent: '25px',
          rightIndent: '0px',
          text: 'Hover'
        },
        {
          id: 6,
          backgroundColor: 'rgb(253, 106, 2)',
          borderColor: 'rgb(253, 106, 2)',
          textColor: 'rgb(255, 255, 255)',
          topIndent: '0px',
          bottomIndent: '10px',
          leftIndent: '0px',
          rightIndent: '0px',
          text: 'Hover'
        },
        {
          id: 7,
          backgroundColor: 'rgb(222, 222, 222)',
          borderColor: 'rgb(222, 222, 222)',
          textColor: 'rgb(50, 50, 50)',
          topIndent: '0px',
          bottomIndent: '10px',
          leftIndent: '0px',
          rightIndent: '0px',
          text: 'Hover'
        },
        {
          id: 8,
          backgroundColor: 'rgb(51, 51, 51)',
          borderColor: 'rgb(166, 88, 46)',
          textColor: 'rgb(166, 88, 46)',
          topIndent: '0px',
          bottomIndent: '10px',
          leftIndent: '0px',
          rightIndent: '25px',
          text: 'Hover'
        },
      ]
    };
  }
};
</script>

<style scoped>
.button-9th-page {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
