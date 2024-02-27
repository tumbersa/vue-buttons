<template>
  <button 
    :class="['ninth-button', { 'primary': type === 'primary', 'filled': fill }]"
    :data-hover-text="'Button'"
    :data-hover-text-hover="'Hover'"
  >
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
}

.ninth-button::after {
  content: attr(data-hover-text);
}

.ninth-button:hover::after {
  content: attr(data-hover-text-hover); 
}

.ninth-button:not(.filled).primary {
  background-color: rgb(51, 51, 51);
  border-color: rgb(166, 88, 46);
  color: rgb(166, 88, 46);
}

.ninth-button.filled.primary {
  background-color: rgb(253, 106, 2);
  border-color: rgb(253, 106, 2);
  color: rgb(255, 255, 255);
}

.ninth-button.filled:not(.primary) {
  background-color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
  color: rgb(85, 85, 85);
}

.ninth-button:not(.filled):not(.primary) {
  background-color: rgb(51, 51, 51);
  border-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

.ninth-button:hover {
  cursor: pointer;
}

.ninth-button:hover:not(.filled):not(.primary) {
  background-color: rgb(51, 51, 51);
  border-color: rgb(126, 126, 126);
  color: rgb(255, 255, 255);
}
.ninth-button:hover:not(.filled).primary {
  background-color: rgb(253, 106, 2);
  border-color: rgb(253, 106, 2);
  color: rgb(255, 255, 255);
}

.ninth-button:hover.filled:not(.primary) {
  background-color: rgb(222, 222, 222);
  border-color: rgb(222, 222, 222);
  color: rgb(50, 50, 50);
}

.ninth-button:hover.filled.primary {
  background-color: rgb(51, 51, 51);
  border-color: rgb(166, 88, 46);
  color: rgb(166, 88, 46);
}
</style>
