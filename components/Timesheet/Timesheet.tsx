import React, { useState } from "react";
import { Button, createStyles, Input, Box } from "@mantine/core";
import { minsToTimeStr } from "../../utils/time-utils";
import TimesheetColumn from "./TimesheetColumn";
import WeekSelector from "./WeekSelector";

const useStyles = createStyles((theme) => ({
  timesheet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },

  timesheetRow: {
    display: "flex",
    justifyContent: "center",
  },

  label: {
    display: "flex",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    marginRight: "0.5rem",
    color: "#3B82F6",
    fontWeight: 600,
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

function Timesheet() {
  const { classes } = useStyles();

  const [weeklySummary, setWeeklySummary] = useState<string | number>(0);
  const [overtime, setOvertime] = useState<string | number>(0);

  let dailyValues = [0, 0, 0, 0, 0];
  let weeklyRequired = 37.5 * 60;

  const dailySummary = (d: any, v: any) => {
    dailyValues[d] = v;
    let sum = dailyValues.reduce((a, b) => {
      return a + b;
    });
    let ot = sum - weeklyRequired;

    setWeeklySummary(minsToTimeStr(sum));
    setOvertime(minsToTimeStr(ot));
  };

  return (
    <Box className={classes.timesheet}>
      <WeekSelector />
      <div className={classes.timesheetRow}>
        <TimesheetColumn
          dayName="Monday"
          changeNotify={(v: any) => dailySummary(0, v)}
        />
        <TimesheetColumn
          dayName="Tuesday"
          changeNotify={(v: any) => dailySummary(1, v)}
        />
        <TimesheetColumn
          dayName="Wednesday"
          changeNotify={(v: any) => dailySummary(2, v)}
        />
        <TimesheetColumn
          dayName="Thursday"
          changeNotify={(v: any) => dailySummary(3, v)}
        />
        <TimesheetColumn
          dayName="Friday"
          changeNotify={(v: any) => dailySummary(4, v)}
        />
      </div>

      <form>
        <label className={classes.label} htmlFor="weekly">
          Weekly Total:
          <Input type="text" name="weekly" value={weeklySummary} disabled />
        </label>

        <label className={classes.label} htmlFor="quota">
          {"Weekly Quota: "}
          <Input
            type="text"
            name="quota"
            value={minsToTimeStr(weeklyRequired)}
            disabled
          />
        </label>

        <label className={classes.label} htmlFor="overtime">
          {"Weekly Overtime: "}
          <Input type="text" name="overtime" value={overtime} disabled />
        </label>

        <Button type="submit" value={"Submit"}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default Timesheet;
