<template>
  <div class="header">
      Небольшой блог о СНГ музыкантах
      <div class="add" @click="addButtonTapped()">
        Добавить исполнителя
      </div>
  </div>
</template>
  
<script>
import { RouteNames } from '@/router/routes';

export default {
  methods: {
    addButtonTapped() {
      this.$router.push({ name: RouteNames.ADD_MUSICIAN_PK });
    }
  }
}
</script>
  
<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 20px 30px;
  background-color: white;
  color: black;
  font-family: "Lucida Handwriting", cursive;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.add {
  text-align: right;
  color: blue;
  cursor: pointer;
}
</style>
