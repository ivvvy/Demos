<template>
  <div class="footer">
    <ul>
      <li v-for="item in items">
        <div class="icons" :class="item.cls"></div>
        <div class="text">{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default ({
    name: 'Footer',
    data() {
      return {
        items: [
          {cls: "icon-home", name: "主页", link: "/home"},
          {cls: "icon-creditInfo", name: "信用信息", link: "/creditInfo"},
          {cls: "icon-user", name: "我的", link: "/user"}
        ]
      }
    }
  })
</script>
