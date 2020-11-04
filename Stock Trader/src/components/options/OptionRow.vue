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
  </tr>
</template>

<style scoped></style>

<script>
export default {
  props: ["option"],
};
</script>
