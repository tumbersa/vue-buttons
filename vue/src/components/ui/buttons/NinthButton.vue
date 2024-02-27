<template>
  <button :class="'ninth-button'" @mouseover="hoverEffect" @mouseleave="resetEffect">
    <slot>
      button
    </slot>
  </button>
</template>

<script>
export default {
  name: "NinthButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    fill: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.resetEffect();
  },
  methods: {
    hoverEffect() {
      this.$el.innerText = "hover"
      if (this.fill) {
        if (this.type === "primary") {
          this.$el.style.backgroundColor = 'rgb(51, 51, 51)';
          this.$el.style.borderColor = 'rgb(166, 88, 46)';
          this.$el.style.color = 'rgb(166, 88, 46)';
        } else {
          this.$el.style.backgroundColor = 'rgb(222, 222, 222)';
          this.$el.style.borderColor = 'rgb(222, 222, 222)';
          this.$el.style.color = 'rgb(50, 50, 50)';
        }
      } else {
        if (this.type === "primary") {
          this.$el.style.backgroundColor = 'rgb(253, 106, 2)';
          this.$el.style.borderColor = 'rgb(253, 106, 2)';
          this.$el.style.color = 'rgb(255, 255, 255)';
        } else {
          this.$el.style.backgroundColor = 'rgb(51, 51, 51)';
          this.$el.style.borderColor = 'rgb(126, 126, 126)';
          this.$el.style.color = 'rgb(255, 255, 255)';
        }
      }
    },
    resetEffect() {
      this.$el.innerText = "button"
      if (this.fill) {
        if (this.type === "primary") {
          this.$el.style.backgroundColor = 'rgb(253, 106, 2)';
          this.$el.style.borderColor = 'rgb(253, 106, 2)';
          this.$el.style.color = 'rgb(255, 255, 255)';
        } else {
          this.$el.style.backgroundColor = 'rgb(255, 255, 255)';
          this.$el.style.borderColor = 'rgb(255, 255, 255)';
          this.$el.style.color = 'rgb(85, 85, 85)';
        }
      } else {
        if (this.type === "primary") {
          this.$el.style.backgroundColor = 'rgb(51, 51, 51)';
          this.$el.style.borderColor = 'rgb(166, 88, 46)';
          this.$el.style.color = 'rgb(166, 88, 46)';
        } else {
          this.$el.style.backgroundColor = 'rgb(51, 51, 51)';
          this.$el.style.borderColor = 'rgb(68, 68, 68)';
          this.$el.style.color = 'rgb(255, 255, 255)';
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.ninth-button {
  height: 53px;
  width: 250px;
  border-width: 5px;
  border-style: solid;
  border-radius: 38px;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
  }
}
</style>
