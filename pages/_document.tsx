import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="mask-icon" href="/favicon-safari.svg" color="#fff" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
