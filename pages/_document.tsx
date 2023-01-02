import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props: { locale: string | undefined }) {
  return (
    <Html lang={props.locale} dir={props.locale === "en" ? "ltr" : "rtl"}>
      <Head />
      <body className="debug-screens">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
