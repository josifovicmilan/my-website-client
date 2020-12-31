<template>
  <button class="btn-inline">
    <slot></slot>
    <span>&rarr;</span>
  </button>
</template>

<script>
    export default {
        name: "ButtonInline"
    }
</script>

<style scoped lang="scss">
 .btn-inline{
   border: none;
   background-color: inherit;
   font-family: inherit;
   color: $color-white;
   border-bottom: 2px solid $color-white;
   display: inline-block;
   cursor: pointer;
   & span{
     margin-left: 3px;
     transition: margin-left .3s;
   }
   &:hover{
     color: $color-grey-light-2;
     span{
       margin-left: 8px;
     }
   }
 }
</style>
