import {
  createStyles,
  Navbar,
  UnstyledButton,
  Badge,
  MantineNumberSize,
} from "@mantine/core";
import {
  IconUser,
  IconCheckbox,
  IconNotes,
  IconAdjustments,
  IconCalendar,
  IconMail,
  IconDashboard,
  IconTimeline,
} from "@tabler/icons";
import Link from "next/link";
import { LinksGroup } from "./SidebarLinksGroup";
import { UserSection } from "./UserSection";

const useStyles = createStyles((theme) => ({
  navbar: {
    display: "flex",
    height: "100vh",
    paddingTop: 0,
    position: "fixed",
  },

  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,

    "&:not(:last-of-type)": {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  },

  searchCode: {
    fontWeight: 700,
    fontSize: 10,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },

  mainLinks: {
    paddingLeft: theme.spacing.md - theme.spacing.xs,
    paddingRight: theme.spacing.md - theme.spacing.xs,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: theme.fontSizes.xs,
    padding: `8px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: 20,
    height: 20,
    pointerEvents: "none",
  },

  collections: {
    paddingLeft: theme.spacing.md - 6,
    paddingRight: theme.spacing.md - 6,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: theme.spacing.md + 2,
    paddingRight: theme.spacing.md,
    marginBottom: 5,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  collectionLink: {
    display: "block",
    padding: `8px ${theme.spacing.xs}px`,
    textDecoration: "none",
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },
}));

const mockdata = [
  { label: "Dashboard", icon: IconDashboard, link: "/" },
  {
    label: "Objectives",
    icon: IconNotes,
    links: [
      { label: "Quarter 1", link: "/" },
      { label: "Quarter 2", link: "/" },
      { label: "Quarter 3", link: "/" },
      { label: "Quarter 4", link: "/" },
    ],
  },
  {
    label: "Payslips",
    icon: IconMail,
    links: [
      { label: "Nov-Dec 2022", link: "/" },
      { label: "Dec-Jan 2023", link: "/" },
      { label: "Jan-Feb 2023", link: "/" },
    ],
  },
  { label: "Holidays", icon: IconCalendar, link: "/holidays" },
  { label: "Timesheets", icon: IconTimeline, link: "/timesheets" },
  { label: "Settings", icon: IconAdjustments, link: "/settings" },
];

const links = [
  { icon: IconCheckbox, label: "Tasks", notifications: 0 },
  { icon: IconUser, label: "Team" },
];

export function Sidebar({
  path,
  hidden,
  hiddenBreakpoint,
}: {
  path: any;
  hidden: boolean;
  hiddenBreakpoint: MantineNumberSize | undefined;
}) {
  const { classes } = useStyles();

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const pageLinks = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} href={item.link} />
  ));

  return (
    <Navbar
      hiddenBreakpoint={hiddenBreakpoint}
      width={{ sm: 200, lg: 300 }}
      p="md"
      className={classes.navbar}
      hidden={hidden}
    >
      <Navbar.Section className={classes.section}>
        <UserSection
          image="https://i.imgur.com/fGxgcDF.png"
          name="Bob Rulebreaker"
          email="Product owner"
        />
      </Navbar.Section>
      <Navbar.Section className={classes.section}>
        <Link href={path} className={classes.mainLinks}>
          {mainLinks}
        </Link>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <div className={classes.linksInner}>{pageLinks}</div>
      </Navbar.Section>
    </Navbar>
  );
}
