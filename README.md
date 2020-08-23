# ReactJS Configuration

**Configuração básica do ReactJS utilizando Babel e Webpack**

`$ yarn init -y`

`$ mkdir src`
`$ mkdir public`

`$ yarn add react react-dom`

**Arquivo:** `\src\index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

## Babel

Possui a função de transpilar o código do React para um código que o browser entenda.

`$ yarn add @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime`

**Arquivo:** `\babel.config.js`

```javascript
module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react',
	],
	plugins: [
		'@babel/plugin-transform-runtime'
	]
}
```

### @babel/preset-env

Converte o código de um JavaScript mais moderno para um JS mais aintigo **baseado no ambiente da aplicação**.

### @babel/preset-react

Adiciona as funcionalidades do React na conversão.

### @babel/plugin-transform-runtime

Permite funções assíncronas.

### Primeira transpilação como babel

**Arquivo:** `/src/index.js`

```javascript
const sum = (a, b) => {
  return a+b
}
```

`yarn add @babel/cli`

`yarn babel src/index.js --out-file public/bundle.js`

Cria ***bundle.js*** com uma sintaxe compatível com a maioria dos browsers.

## Webpack

Para cada tipo de arquivo (.js .css .png) converte o arquivo de uma forma diferente. Utiliza **Loaders**

`yarn add webpack webpack-cli`

`$ yarn add babel-loader`

**Arquivo:** `/webpack.config.js`

```javascript
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      }
    ]
  }
}
```

**Gerar o arquivo bundle.js**

`$ yarn webpack --mode development`

**Implementação de um servidor de desenvolvimento para monitoramento de mudanças no código**

`$ yarn add webpack-dev-server -D`

**Arquivo:** `/webpack.config.js`

```diff
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
+  devServer : {
+    contentBase: path.resolve(__dirname, 'public'),
+  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      }
    ]
  }
}
```

Inicializa o servidor de desenvolvimento:
`$ yarn webpack-dev-server --mode development`

### Criando scripts para execução do projeto (opcional)

Opcionalmente pode-se criar scripts no **package.json** para executar o projeto ou criar a build de produção de forma mais prática.
Para tal, basta adicionar ao arquivo as linhas abaixo:

**Arquivo:** `package.json`

```json
"scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  }
```

## Utilizando o ReactJS

**Arquivo:** `/src/index.src`

```jsx
import React from 'react';
import { render } from 'react-dom';

import App from './App'


render(<App />, document.getElementById('app'));
```

**Arquivo:** `/src/App.src`

```jsx
import React from 'react'

const App = () => {
  return(
    <h1>This is a React App!</h1>
  )
}

export default App;
```

## Importando CSS

`$ yarn add style-loader css-loader`

**Arquivo:** `/webpack.config.js`

```diff
  .
  .
  .
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      },
+      {
+        test: /\.css$/,
+        exclude: /node_modules/,
+        use:[
+          {loader: 'style-loader'},
+          {loader: 'css-loader'},
+        ]
+      },
    ]
  }
}
```

[Ver o commit](https://github.com/gabcamilo/configure-react-app-babel-webpack/commit/96b8aad9945e6f0495b05770ca09563699392721)

## Importando Imagens

`$ yarn add file-loader`

**Arquivo:** `/webpack.config.js`

```javascript
.
.
.
{
  test: /.*\.(gif|png|jp?g)$/i,
  use: {
    loader: 'file-loader',
  }
},
.
.
.
```
