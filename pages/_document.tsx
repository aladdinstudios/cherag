import Document, { Html, Head, Main, NextScript } from "next/document";
import { iconFonts } from "../react-native-web.config";

const IconsCSS = iconFonts
  .map(
    (font) => `
        @font-face {
            font-family: '${font}';
            src: url(${require(`react-native-vector-icons/Fonts/${font}.ttf`)}) format('truetype');
        }
    `
  )
  .join("\n");

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: IconsCSS }}></style>
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
