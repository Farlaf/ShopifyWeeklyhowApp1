import React from "react";
import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/dist/styles.css";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Oleg App</title>
                    <meta charSet="uft-8" />
                    <AppProvider i18n={translations}>
                        <Component {...pageProps} />
                    </AppProvider>
                </Head>
            </React.Fragment>
        );
    }
}

export default MyApp;
