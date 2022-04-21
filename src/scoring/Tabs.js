import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Button, Card, Divider, Stack, Tab } from "@mui/material";
import { useState } from "react";

export function Tabs({ taskNames, tasks }) {
  const [tabIndex, setTabIndex] = useState("0");
  const switchTab = (e, newTabIndex) => setTabIndex(newTabIndex);

  const tabs = taskNames.map((task, i) => {
    return <Tab key={i} label={task} value={i.toString()} />;
  });

  const panels = tasks.map((task, i) => {
    return (
      <TabPanel key={i} value={i.toString()}>
        <Stack sx={{ display: "flex", rowGap: 3, flexDirection: "column" }}>
          {task}
        </Stack>
      </TabPanel>
    );
  });

  return (
    <>
      <TabContext value={tabIndex}>
        <Stack>
          <TabList
            value={tabIndex}
            indicatorColor="primary"
            textColor="primary"
            centered
            onChange={switchTab}
          >
            {tabs}
          </TabList>
            <Divider variant="middle" />
        </Stack>
        {panels}
      </TabContext>
    </>
  );
}
