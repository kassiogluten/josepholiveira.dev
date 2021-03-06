const withImages = require('next-images')

module.exports = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: ['media.graphcms.com'],
    path: '/_next/image',
    loader: 'default',
  },
  ...withImages()
}