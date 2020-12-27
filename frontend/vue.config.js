module.exports = {
    devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true,
		proxy: {
			'/api': {
				target: 'http://localhost:8000',
				changeOrigin: true,
				pathRewrite: {'^/api': '/api'},
				logLevel: 'debug'
			}
		}
	}
}