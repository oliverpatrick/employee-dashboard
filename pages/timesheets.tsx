import { Divider, Title } from "@mantine/core";
import React from "react";
import Timesheet from "../components/Timesheet/Timesheet";

function Timesheets() {
  return (
    <>
      <Title order={1}>Timesheets</Title>
      <Divider my="sm" mb={10} />
      <Timesheet />
    </>
  );
}

export default Timesheets;
