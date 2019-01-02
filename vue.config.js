const path = require('path')

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    outputDir: 'dist',
    assetsDir: '',
    indexPath: 'index.html', //相对于 outputDir
    filenameHashing: false, // 文件名哈希
    pages: undefined, //在 multi-page 模式下构建应用
    productionSourceMap: true, //不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建

    // configureWebpack: {
    //     plugins: [
    //         // new MyAwesomeWebpackPlugin()
    //     ],
    //     resolve: {
    //         alias: {
    //             '@cp': "@/src/components"
    //         }
    //     }
    // },
    // chainWebpack: (config)=>{
    //     config.resolve.alias
    //         .set('components', path.join(__dirname, './src/components'))
            // .set('assets',resolve('src/assets'))
            // .set('components',resolve('src/components'))
            // .set('layout',resolve('src/layout'))
            // .set('base',resolve('src/base'))
            // .set('static',resolve('src/static'))
    // },

    css: {
        // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
        // 设置为 true 后你就可以去掉文件名中的 .module
        // 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
        modules: false
    },

    devServer: {
        proxy: 'http://localhost:8080'
    }
}
