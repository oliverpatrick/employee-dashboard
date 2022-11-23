import { Title, Text, Divider, ScrollArea, Box } from "@mantine/core";
import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import { data } from "../utils/data/calendarData";

function Holidays() {
  return (
    <>
      <Title order={1}>Holidays</Title>
      <Divider my="sm" mb={10} />

      <Title order={4}>Current Holidays</Title>
      <ScrollArea>
        <div style={{ width: 1500, height: 350 }}>
          <ResponsiveCalendar
            data={data}
            from="2022-10-01"
            to="2022-11-30"
            emptyColor="#eeeeee"
            colors={["#3cff00", "#ff5e00"]}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            monthBorderColor="#464646"
            dayBorderWidth={2}
            dayBorderColor="#464646"
            tooltip={CalendarTooltip}
          />
        </div>
      </ScrollArea>
    </>
  );
}

const CalendarTooltip = (data: any) => {
  console.log(data);
  return (
    <Box>
      <Text>Date: {data.day}</Text>
      <Text>Holidays: {data.value}</Text>
    </Box>
  );
};

export default Holidays;
