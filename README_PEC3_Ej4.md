# Compilar TypeScript 

En esta aplicación se ha instalado *Webpack* para compilar el código *TypeScript* a Java*Script en un unico archivo comprimido, *bundle.js*, que nos permite además trabajar desde las herramientas de desarrollador del navegador de un modo mucho más ágil.

Se han configurado tanto el modo de desarrollador (*development*) como el de producción (*production*) en los archivos `webpack.config.js` y `webpack.config.prod.js`, respectivamente y en el *script* de `package.json`. 

```
"scripts": {
    ...,
    "start": "webpack serve --open",
    "build": "webpack --config webpack.config.prod.js"
}
```

Así, si ejecutamos 

```
npm run start
```

inicializamos un servidor local que nos permite ver los cambios que se van desarrollando en la aplicación, y si ejecutamos

```
npm run build
```

transpilamos todo el código *TypeScript* en un único archivo *JavaScript*, *bundle.js*.