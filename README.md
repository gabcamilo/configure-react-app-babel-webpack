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

`$ yarn add @babel/core @babel/preset-env @babel/preset-react`

**Arquivo:** `\babel.config.js`

```javascript
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ]
}
```

### @babel/preset-env

Converte o código de um JavaScript mais moderno para um JS mais aintigo **baseado no ambiente da aplicação**.

### @babel/preset-react

Adiciona as funcionalidades do React na conversão.

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

