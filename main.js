/*
Instalar o webpack webpack-cli
No package.jason ajustar as "dependencies" para "devDependencies"
Quando for instalar uma dependencia para desenvolvimento, basta informar -D no final
yarn add webpack webpack-cli -D
criar o arquivo de configuraçao do webpack webpack.config.js
Instalar o babel-loader 
yarn add babel-loader -D
Executar o webpack substituindo no package.json "dev": "babel ./main.js -o ./bundle.js -w" para "dev": "webpack --mode=development -w"
Instalar o babel-loader@8.0.0-beta.0 
yarn add babel-loader@8.0.0-beta.0 -D
*/