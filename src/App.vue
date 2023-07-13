<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">AjAy</a>
        <div class=" navbar" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <RouterLink to='/' style="color: black; text-decoration: none;">monster</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <RouterLink to='/about' style="color: black; text-decoration: none;">About</RouterLink>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'monster',
}
</script>

<style scoped></style>
