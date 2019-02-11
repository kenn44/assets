<template>
  <nav class="navbar is-light">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">Assets</nuxt-link>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Account</a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/profile">Profile</nuxt-link>
              <hr class="navbar-divider">
              <a class="navbar-item">Logout</a>
            </div>
          </div>
          <nuxt-link class="navbar-item" to="/register/signup">Register</nuxt-link>
          <nuxt-link class="navbar-item" to="/register/login">Log In</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>
