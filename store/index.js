import Vuex from 'vuex'
import firebase, { auth, GoogleProvider } from '@/services/fireinit.js'

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null
        },
        getters: {
            activeUser: (state, getters) => {
                return state.user
            }
        },
        mutations: {
            setUser(state, payload) {
                state.user = payload
            }
        },
        actions: {
            autoSignIn({ commit }, payload) {
                commit('setUser', payload)
            },

            signInWithGoogle({ commit }) {
                return new Promise((resolve, reject) => {
                    auth.signInWithRedirect(GoogleProvider)
                    resolve()
                })
            },

            async signOut({ commit }) {
                await auth.signOut().then(() => {
                    commit('setUser', null)
                }).catch(err => console.log(err))
            },

            async signUpWithEmail({ commit }, user) {
                await auth.createUserWithEmailAndPassword(user.email, user.password)
                    .then((user) => {
                        commit('setUser', user)
                    }).catch(err => console.log(err))
            },

            async signInWithEmail({ commit }) {
                await auth.signOut().then(() => {
                    commit('setUser', null)
                }).catch(err => {
                    //console.log(err);
                    this.error = err.message;
                    console.log(error);
                })
            }
        }
    })
}

export default createStore