<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="title has-text-centered">Login</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input type="email" class="input" name="email" v-model="email" required>
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input type="password" class="input" name="password" v-model="password" required>
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Login</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">No account?
            <nuxt-link to="/register/signup">Register</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from "~/components/Notification";

export default {
  components: {
    Notification
  },

  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null
    };
  },

  methods: {
    async login() {
      await this.$store
        .dispatch("signInWithEmail", {
          email: this.email,
          password: this.password
        })
        .catch(err => {
          this.error = err.message;
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>

