<template>
  <button class="ninth-button" :style="buttonStyle">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'NinthButton',
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    },
    borderColor: {
      type: String,
      default: 'black'
    },
    textColor: {
      type: String,
      default: 'black'
    },
    topIndent: {
      type: String,
      default: '0px'
    },
    bottomIndent: {
      type: String,
      default: '0px'
    },
    leftIndent: {
      type: String,
      default: '0px'
    },
    rightIndent: {
      type: String,
      default: '0px'
    }
  },
  computed: {
    buttonStyle () {
      return {
        backgroundColor: this.backgroundColor,
        borderColor: this.borderColor,
        color: this.textColor,
        margin: `${this.topIndent} ${this.rightIndent} ${this.bottomIndent} ${this.leftIndent}`
      };
    }
  }
}
</script>

<style scoped>
.ninth-button {
  height: 7vh;
  width: 22vw;
  border-width: 2px;
  border-style: solid;
  border-radius: 25px;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
