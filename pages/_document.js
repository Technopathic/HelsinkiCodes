import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <Html lang={process.env.APP_LOCALE}>
                <Head />
                <body className="bg-bodyLight">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument