const publicFontPath = 'fonts/';

module.exports = {
  files: ['../images/icon-fonts/*.svg'],
  fontName: 'font-dopplericons',
  classPrefix: 'icon-',
  baseSelector: '.doppler-icons',
  types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],
  fileName: publicFontPath + '[fontname].[ext]',
};
