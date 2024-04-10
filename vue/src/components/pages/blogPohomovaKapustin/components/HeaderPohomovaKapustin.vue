<template>
  <div class="header">
    <div class="header__logo">
      Магазинчик "У Людмурика"
    </div>
  </div>
</template>
  
<script>
import { RouteNames } from "@/router/routes";

export default {
  computed: {
    routeNames() {
      return RouteNames
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
  background-color: yellow;
  color: green;
  font-family: "Lucida Handwriting", cursive;
  text-transform: uppercase;
  letter-spacing: 5px;

}
</style>
  