
const purgecss = require('@fullhuman/postcss-purgecss')({

  content: [
    './src/**/*.html',
    './src/**/*.js',
  ],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
 }