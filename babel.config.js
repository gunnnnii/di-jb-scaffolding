module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
				'babel-plugin-root-import',
				{
					root: __dirname,
					rootPathPrefix: '#/',
					rootPathSuffix: './',
				},
			],
      require.resolve("expo-router/babel"),
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  };
};
