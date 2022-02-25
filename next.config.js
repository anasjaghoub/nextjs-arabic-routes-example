/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en', 'ar'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: `/ar/${encodeURIComponent('حالة-الطقس')}`,
        destination: '/weather',
        locale: false
      },
      {
        source: `/ar/${encodeURIComponent('مواعيد-الصلاة')}`,
        destination: '/prayer-times',
        locale: false
      },

    ]
  }
}

module.exports = nextConfig
