export default {
    install(Vue, options) {
        Vue.$toast = function() {
            console.log('I am toast')
        }
    }
}