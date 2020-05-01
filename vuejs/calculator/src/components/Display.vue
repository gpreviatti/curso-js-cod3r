<template>
  <div class="display">
      {{ value }}
  </div>
</template>

<script>
export default {
    props: ['value']

}
</script>

<style>
    .display {
        grid-column: span 4;
        background-color: #fff;
        font-size: 40px;
        align-items: center;
        display: flex;
        background-color:#fa8231;
        color: white;
    }
    .display:hover {
        background-color:#fa8231cc;
    }

</style>