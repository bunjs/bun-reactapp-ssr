module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ['@babel/preset-env', {
                "targets": {
                    "browsers": ["last 2 versions", "safari >= 7"]
                },
                "corejs": "3.0.0",
                "modules": 'commonjs', //为了ssr统一转为commonjs
                "debug": false,
                "useBuiltIns": "usage" // 是否开启自动支持 polyfill
            }],
            '@babel/typescript'
        ],
        plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["import", { "libraryName": "antd", "libraryDirectory": "lib", "style": "css" }],
            ["transform-react-jsx"]
        ]
    };
}