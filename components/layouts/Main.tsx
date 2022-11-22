import {
  AppShell,
  Burger,
  createStyles,
  Header,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import Head from "next/head";
import React, { ReactNode, useState } from "react";
import theme from "../../utils/theme";
import { ColorSchemeToggle } from "../ColorSchemeToggle";
import { Navbar } from "../Navbar";

import { Sidebar } from "../sidebar/Sidebar";

interface ILayout {
  seoTitle: string;
  children: ReactNode;
  router: any;
}

// const useStyles = createStyles((theme) => ({
//   layout: {
//     display: "flex",
//     flexDirection: "row",
//   },

//   children: {
//     display: "flex",
//     flexDirection: "column",
//     width: "100%",
//     height: "100vh",
//   },
// }));

export default function Layout({ seoTitle, children, router }: ILayout) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const businessName = "Test Company";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Welcome to dashboard" />
        <meta name="author" content="" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          property="og:site_name"
          content={`${businessName} employee dashboard`}
        />
        <meta name="og:title" content={businessName} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="data:image/jpeg;base64,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"
        />
        <title>{seoTitle}</title>
      </Head>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Sidebar
              path={router.asPath}
              hidden={!opened}
              hiddenBreakpoint="sm"
            />
          </MediaQuery>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              Header
            </div>
          </Header>
        }
      >
        {children}
      </AppShell>
    </>
  );
}
