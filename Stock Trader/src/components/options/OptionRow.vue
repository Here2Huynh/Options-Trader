<template>
  <tr>
    <td>{{ option.openDate }}</td>
    <td>{{ option.expiry }}</td>
    <td>{{ option.close }}</td>
    <td>{{ option.product }}</td>
    <td>{{ option.type }}</td>
    <td>{{ option.strike }}</td>
    <td>{{ option.openPrice }}</td>
    <td>{{ option.filledPrice }}</td>
    <td>{{ option.pnl }}</td>
    <td style="white-space:pre-wrap; word-wrap:break-word">{{ option.adjustments.rolled | roll }}</td>
    <td>{{ option.adjustments.wheel | wheel }}</td>
    <!-- <td>{{ showAdjustments(option) }}</td> -->
  </tr>
</template>

<style scoped>
/* td.break {
  float: left;
  line-height: 22px;
} */
</style>

<script>
export default {
  props: ["option"],
  methods: {
    showAdjustments(option) {
      return option.adjustments.rolled;
    }
  }
};
</script>
