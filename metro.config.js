// // Learn more https://docs.expo.io/guides/customizing-metro
const {getDefaultConfig} = require("expo/metro-config");
//
// /**
//  * Add support for share.js as a recognized extension to the Metro config.
//  * This allows creating an index.share.js entry point for our iOS share extension
//  *
//  * @param {import('expo/metro-config').MetroConfig} config
//  * @returns {import('expo/metro-config').MetroConfig}
//  */
function withShareExtension(config) {
	config.transformer.getTransformOptions = () => ({
		resolver: {
			sourceExts: [...config.resolver.sourceExts, "share.js"], // Add 'share.js' as a recognized extension
		},
	});
	return config;
}

module.exports = withShareExtension(
	getDefaultConfig(__dirname, {isCSSEnabled: true}),
);
