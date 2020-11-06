<template>
  <div class="fixed-top">
    <div class="collapse" id="navbarToggleExternalContent">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <img
                  src="../assets/img/plus.svg"
                  alt
                  width="32"
                  height="32"
                  class="logOptions"
                  @click="$refs.modalName.openModal()"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img
                  src="../assets/img/gear.svg"
                  alt
                  width="32"
                  height="32"
                  class="logOptions"
                  @click="changeMode('edit')"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>

    <modal ref="modalName">
      <template v-slot:header>
        <h1>Modal title</h1>
      </template>

      <template v-slot:body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
          velit dignissim sodales ut eu sem integer vitae. Id aliquet lectus
          proin nibh nisl condimentum. Fringilla urna porttitor rhoncus dolor
          purus. Nam aliquam sem et tortor. Nisl vel pretium lectus quam id.
          Cras pulvinar mattis nunc sed. Quis ipsum suspendisse ultrices gravida
          dictum fusce ut placerat orci. Tristique magna sit amet purus.
          Fermentum et sollicitudin ac orci phasellus egestas tellus. Erat
          pellentesque adipiscing commodo elit at imperdiet dui accumsan. Felis
          eget nunc lobortis mattis aliquam faucibus. Tincidunt eget nullam non
          nisi est sit amet facilisis. Mi in nulla posuere sollicitudin aliquam
          ultrices sagittis orci. Vitae proin sagittis nisl rhoncus mattis
          rhoncus urna neque. Eget nunc scelerisque viverra mauris in aliquam
          sem fringilla ut. Nec nam aliquam sem et tortor consequat id. Commodo
          nulla facilisi nullam vehicula ipsum a. Elementum tempus egestas sed
          sed. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.
        </p>
        <p>
          Arcu cursus vitae congue mauris rhoncus aenean. Tempor id eu nisl nunc
          mi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ut
          faucibus pulvinar elementum integer enim. Odio facilisis mauris sit
          amet massa vitae tortor condimentum lacinia. Eu non diam phasellus
          vestibulum lorem sed risus. Porttitor rhoncus dolor purus non enim
          praesent. Sit amet mauris commodo quis imperdiet. Lobortis feugiat
          vivamus at augue eget. Nibh tellus molestie nunc non blandit. Tellus
          mauris a diam maecenas sed enim ut. Tortor aliquam nulla facilisi cras
          fermentum odio eu feugiat pretium. Mattis aliquam faucibus purus in
          massa.
        </p>
      </template>

      <template v-slot:footer>
        <div>
          <button @click="$refs.modalName.closeModal()">Cancel</button>
          <button @click="$refs.modalName.closeModal()">Save</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<style scoped>
img {
  filter: invert(1);
}
</style>

<script>
import { mapActions } from "vuex";
import AddModal from "./options/logOptions/addModal.vue";

export default {
  data() {
    return {
      mode: "view",
    };
  },
  components: {
    addModal: AddModal,
  },
  methods: {
    ...mapActions(["setMode"]),
    changeMode(mode) {
      this.setMode(mode);
    },
  },
};
</script>
