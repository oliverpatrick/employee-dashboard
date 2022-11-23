import React, { useState } from "react";
import { Box, createStyles } from "@mantine/core";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons";
import moment from "moment";

const useStyles = createStyles((theme) => ({
  datePeriod: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  chevron: {
    padding: "0.25rem",
    margin: "0.25rem",
    width: "2rem",

    "&:hover": {
      backgroundColor: "#F3F4F6",
      color: "#4B5563",
      borderRadius: "9999px",
    },
  },

  dateText: {
    marginLeft: "1.25rem",
    marginRight: "1.25rem",
    fontWeight: 600,
    textAlign: "center",
    width: "10rem",
  },
}));

function WeekSelector() {
  const { classes } = useStyles();
  const [dateSelection, setDateSelection] = useState();
  const [subtract, setSubtract] = useState<number>(0);

  let weekStart = moment()
    .subtract(subtract, "weeks")
    .startOf("isoWeek")
    .format("DD MMM");

  let weekEnd = moment()
    .subtract(subtract, "weeks")
    .endOf("isoWeek")
    .format("DD MMM");

  return (
    <Box className={classes.datePeriod}>
      <IconChevronLeft
        className={classes.chevron}
        onClick={() => setSubtract(subtract + 1)}
      />
      <div className={classes.dateText}>{`${weekStart} - ${weekEnd}`}</div>
      <IconChevronRight
        className={classes.chevron}
        onClick={() => setSubtract(subtract - 1)}
      />
    </Box>
  );
}

export default WeekSelector;
