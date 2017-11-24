<template>
  <div class="footer">
    <ul>
      <li v-for="item in items" :class="{active:item.mid==mid}" @click='$router.push(item.link);'>
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
        activeResult: false,
        items: [
          {mid: "home", cls: "icon-home", name: "主页", link: "/home"},
          {mid: "creditInfo", cls: "icon-creditInfo", name: "信用信息", link: "/creditInfo"},
          {mid: "user", cls: "icon-user", name: "我的", link: "/user"}
        ]
      }
    },
    props: ['mid'],
    methods: {},
  })
</script>
