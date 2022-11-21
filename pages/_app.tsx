import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { getCookie, setCookie } from "cookies-next";
import NextApp, { AppContext, AppProps } from "next/app";
import { useState } from "react";

import Layout from "../components/layouts/Main";

interface PageProps {
  [key: string]: any;
}

interface MyAppProps extends AppProps<PageProps> {
  pageProps: PageProps;
  colorScheme: ColorScheme;
}

export default function App({
  Component,
  pageProps,
  router,
  colorScheme,
}: MyAppProps) {
  const businessName = "Test Company";
  const [currentColorScheme, setColorScheme] =
    useState<ColorScheme>(colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (currentColorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
    location.reload();
  };

  return (
    <ColorSchemeProvider
      colorScheme={currentColorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <Layout seoTitle={`${businessName} Dashboard`} router={router}>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie("mantine-color-scheme", appContext.ctx) || "dark",
  };
};
