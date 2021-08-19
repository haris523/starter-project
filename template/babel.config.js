module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@tests': ['./tests/'],
                    '@components': './src/components',
                    '@assets': './src/assets',
                    '@theme': './src/theme',
                    '@constants':'./src/constants',
                    '@helpers':'./src/helpers',
                    '@languages':'./src/languages',
                    '@hooks':'./src/hooks',
                    '@navigation':'./src/navigation',
                    '@redux':'./src/redux',
                    '@screens':'./src/screens',
                    '@sockets':'./src/sockets',
                    '@types':'./src/types',
                }
            }
        ],
        ['module:react-native-dotenv']
    ]
}