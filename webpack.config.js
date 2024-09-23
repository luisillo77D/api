const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: 'bundle.js', // Nombre del archivo generado
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Procesar archivos .js y .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Procesar archivos .css
        use: ['style-loader', 'css-loader'], // Cargar estilo y CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensiones a resolver
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Plantilla HTML
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Carpeta de archivos estáticos
    },
    compress: true,
    port: 9000, // Puerto del servidor de desarrollo
    open: true, // Abre el navegador automáticamente
  },
  mode: 'development', // Modo de desarrollo
};
