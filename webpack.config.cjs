const ESLintPlugin = require('eslint-webpack-plugin');
const path = require( 'path' );

const config = {};

// mode
config.mode = 'production' === process.env.NODE_ENV ? 'production' : 'development';
config.devtool = false;

// entry and context
config.context = path.resolve( __dirname, 'src' );
config.entry = './index.js';

// output
config.output = {
	path: path.resolve( __dirname, 'dist' ),
	library: "ReactGettext",
	libraryTarget: 'umd'
};

// define externals
config.externals = {
	'react': 'React',
	'prop-types': 'PropTypes',
	'hoist-non-react-statics': 'hoistNonReactStatic',
};

config.plugins = [
	new ESLintPlugin({
		extensions: [`js`, `jsx`],
		exclude: [`node_modules`,`dist`,`lib`],
		failOnWarning: false,
		failOnError: true
	}),
	new ESLintPlugin({
		extensions: [`js`, `jsx`],
		exclude: [`node_modules`]
	})
];

module.exports = config;
