<template>
  <div class="fixed-top">
    <div class="collapse" id="navbarToggleExternalContent">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                ><img
                  src="../assets/img/plus.svg"
                  alt=""
                  width="32"
                  height="32"
                  class="logOptions"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><img
                  src="../assets/img/gear.svg"
                  alt=""
                  width="32"
                  height="32"
                  class="logOptions"
              /></a>
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
  </div>
</template>

<style scoped>
img {
  filter: invert(1);
}
</style>
