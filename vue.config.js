module.exports = {
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    additionalData: `@import "./src/assets/styles/variables";`
                }
            }
        }
    }
}