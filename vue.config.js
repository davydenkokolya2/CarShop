module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~@/assets/styles/styles.sass"`
            },
            scss: {
                additionalData: `@import "~@/assets/styles/styles.scss";`
            }
        }
    }
}