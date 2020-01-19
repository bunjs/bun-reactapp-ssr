module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ['@babel/preset-env', {
                "targets": {
                    browsers: ['> 1%', 'last 2 versions', 'ie >= 10'],
                },
            }],
            '@babel/typescript'
        ],
        plugins: [
            ["@babel/plugin-transform-runtime", {
                corejs: 3
            }],
            ["@babel/plugin-proposal-decorators", {
                "legacy": true
            }],
            ["import", {
                "libraryName": "antd",
                "libraryDirectory": "lib",
                "style": "css"
            }],
            ["transform-react-jsx"]
        ]
    };
}
