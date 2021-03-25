<template>
  <el-menu :router="true" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/" class="brand">
      <img
        alt="Connecting Food logo"
        src="@/assets/images/logo.png"
        class="brand"
      />
    </el-menu-item>
    <el-menu-item index="/dashboard">Dashboard</el-menu-item>
    <el-menu-item index="/signin">Sign In</el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
img {
  width: 100px;
}

.bg-menu {
  background-color: red;
}
</style>
