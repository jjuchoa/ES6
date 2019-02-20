/*
Criar as pastas public e src
na pasta public colocar o index.html
na pasta src colocar o main.js
no webpack.config.js alterar 
de: entry: './main.js', para: entry: './src/main.js',
de: path: __dirname, para: path: __dirname + '/public',
instalar o webpack dev server
yarn add webpack-dev-server -D
no webpack.config.js criar o devServer
no package.json altera o script dev para
"dev": "webpack-dev-server --mode=development",
"build": "webpack --mode=production"
*/
alert('Opa');