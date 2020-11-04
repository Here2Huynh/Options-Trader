<template>
  <table class="table table-hover table-borderless table-dark centered">
    <thead>
      <tr>
        <th scope="col">open</th>
        <th scope="col">expiry</th>
        <th scope="col">close</th>
        <th scope="col">product</th>
        <th scope="col">type</th>
        <th scope="col">strike</th>
        <th scope="col">open</th>
        <th scope="col">filled</th>
        <th scope="col">p / l</th>
      </tr>
    </thead>
    <tbody>
      <option-row
        v-for="option in options"
        :key="option.id"
        :option="option"
      ></option-row>
    </tbody>
  </table>
</template>

<style>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

th {
  text-transform: uppercase;
}
</style>

<script>
import OptionRow from "./OptionRow.vue";
import options from "../../data/options";
export default {
  data() {
    return {
      options,
    };
  },
  components: {
    optionRow: OptionRow,
  },
};
</script>
