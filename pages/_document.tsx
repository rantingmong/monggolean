import Document, { Html, Head, Main, NextScript } from 'next/document'

const webFonts = [
  'Arvo:ital,wght@0,400;0,700;1,400;1,700',
  'JetBrains+Mono:ital,wght@0,400;1,700',
  'Nova+Mono',
  'Poppins:ital,wght@0,400;0,700;1,400',
  'Material+Icons'
]

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="mask-icon" href="/favicon-safari.svg" color="#fff" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link href={`https://fonts.googleapis.com/css2?${webFonts.map(item => `family=${item}`).join('&')}&display=swap`} rel='stylesheet' />
        </body>
      </Html>
    )
  }
}

export default MyDocument
