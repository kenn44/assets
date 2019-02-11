<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="title has-text-centered">Register</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="register">
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
              <button type="submit" class="button is-dark is-fullwidth">Register</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">Already got an account?
            <nuxt-link to="/register/login">Login</nuxt-link>
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
      email: "",
      password: "",
      error: null
    };
  },

  methods: {
    async register() {
      await this.$store
        .dispatch("signUpWithEmail", {
          email: this.email,
          password: this.password
        })
        .catch(err => {
          this.error = err.message;
          console.log(err);
        });
    },
    async googleSignUp() {
      this.$store
        .dispatch("signInWithGoogle")
        .then(() => {
          console.log("inside then statement on login");
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          "foo@foo.foo",
          "tessaaaaaaaaaa"
        );
      } catch (e) {
        alert(e);
      }
    }
    // async register() {
    //   try {
    //     await this.$axios.post("register", {
    //       username: this.username,
    //       email: this.email,
    //       password: this.password
    //     });

    //     await this.$auth.loginWith("local", {
    //       data: {
    //         email: this.email,
    //         password: this.password
    //       }
    //     });

    //     this.$router.push("/");
    //   } catch (e) {
    //     this.error = e.response.data.message;
    //   }
    // }
  }
};
</script>

<style>
</style>

