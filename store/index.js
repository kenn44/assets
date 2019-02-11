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
            },
            isLoading: (state, getters) => {
                return state.loading
            }
        },
        mutations: {
            setUser(state, payload) {
                state.user = payload
            },
            setLoading(state, payload) {
                state.loading = payload
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
                        commit('setUser', user.user)
                    }).catch(err => {
                        console.log(err);
                        this.error = err.message;
                    })
            },

            async signInWithEmail({ commit }, user) {
                await auth.signInWithEmailAndPassword(user.email, user.password)
                    .then((user) => {
                        commit('setUser', user.user)
                    }).catch(err => {
                        console.log(err);
                        this.error = err.message;
                    })
            },
        }
    })
}

export default createStore