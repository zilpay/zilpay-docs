module.exports = {
  base: '/zilpay-docs/',
  dest: 'docs',
  plugins: [
  ],
  title: 'ZilPay',
  head: [
    ['link',{rel:'icon',href:'https://zilpay.io/wp-content/uploads/2021/03/zilpay_logo_png-150x150.png'}]
  ],
  description: 'ZilPay Developer Documentation',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Bubble', link: 'https://bubble.io/plugin/zilpay---zilliqa-wallet-1660211605724x172398360975376400' },
      { text: 'ZilPay', link: 'https://zilpay.io' },
      { text: 'GitHub', link: 'https://github.com/zilpay/zil-pay' }
    ],
    sidebar: [
      {
        title: 'General',
        sidebarDepth: 1,
        children: [
          '/getting-started/',
          '/common-terms/',
          '/initializing-dapps/',
          '/accessing-accounts/',
          '/sending-transactions/'
        ]
      },
      {
        title: 'API Reference',
        children: [
          '/zilliqa-provider/',
          '/zilliqa-api-blockchain/',
          '/zilliqa-api-crypto/',
          '/zilliqa-api-utils/',
          '/zilliqa-contracts/'
        ]
      }
    ]
  }
}
