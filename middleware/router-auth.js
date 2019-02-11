export default function ({ store, redirect, route }) {
    store.state.user != null && isRegisterRoute(route) ? redirect('/') : ''
    store.state.user == null && isAdminRoute(route) ? redirect('/register/login') : ''
}

function isAdminRoute(route) {
    if (route.matched.some(record => record.path == '/main')) {
        return true
    }
}

function isRegisterRoute(route) {
    if (route.matched.some(record => record.path == '/register')) {
        return true
    }
}