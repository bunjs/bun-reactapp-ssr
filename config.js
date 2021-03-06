module.exports = {
    dirname: __dirname,
    isbun: true,
    ssr: true,
    // 服务是否只有一个（告知webpack打包方式）
    isSingle: true,
    frame: 'react',
    entry: {
        index: './client/entry/index.tsx'
    },
    serverEntry: './client/app/base/index.ts',
    output: './build/static',
    template: '',
    appname: '$_appname',
    localStaticDomain: '//localhost:8000',
    publicStaticDomain: '//gh.bdstatic.com',
    manifest: true,
    /**
     * 分离模式
     * commons 是否需要提取公共文件（2次以上引入，仅限js）优先级低于commons
     * vendors 是否需要提取node_modules中的模块（包含css） 优先级低于libs
     * libs
     */
    cacheGroups: ['vendors', 'commons'],
    libs: [], // 需要额外打包的公共库
    uglifyJs: true, // 开发模式下无效
    optimizeCSS: true, // 开发模式下无效
    supportFileType: ['ts', 'tsx', 'less'], // 需要支持的文件格式
    globalPath: {
        '@common': './client/app/common'
    }
};
