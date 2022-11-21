// const styles = {
//   global: (props: any) => ({
//     body: {
//       bg: mode("#e3e3e3", "#202023")(props),
//     },
//   }),
// };

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  // Link: {
  //   baseStyle: (props: any) => ({
  //     color: mode("#b802cc", "#ff63c3")(props),
  //     textUnderlineOffset: 3,
  //   }),
  // },
};

const colors = {
  pink: "#ff30ba",
  violet: "#b330ff",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme =
  extendTheme();
  //   {
  //   config,
  //   styles,
  //   components,
  //   colors,
  // }

export default theme;

function extendTheme() {
  throw new Error("Function not implemented.");
}
