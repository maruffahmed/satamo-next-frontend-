import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/img/SatamoLogoBg.png" type="image/x-icon" />
          <link rel="stylesheet" href="/fonts/stylesheet.css" />
          <link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css" />
          <link rel="stylesheet" href="vendor/slick/slick.css" />
          <link rel="stylesheet" href="vendor/slick/slick-theme.css" />

          <link rel="stylesheet" href="css/home-version-3.css" />
          <link rel="stylesheet" href="css/common.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
