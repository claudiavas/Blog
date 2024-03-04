/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// Webpack: digimatika/next.config.js

// const path = require('path');

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Agregar una regla personalizada para cargar archivos SVG
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
// };

// next.config.js
const withMDX = require('@next/mdx')();

module.exports = withMDX({
  webpack: (config, { isServer }) => {
    // Agregar una regla para procesar archivos Markdown
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'markdown-loader',
          options: {},
        },
      ],
    });

    return config;
  },
});

const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Agregar una regla para procesar archivos Markdown
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'raw-loader',
        },
        {
          loader: 'markdown-loader',
          options: {},
        },
      ],
    });

    return config;
  },
};