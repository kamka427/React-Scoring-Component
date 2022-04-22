import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Divider, Tab } from "@mui/material";
import { useState } from "react";
import { AspectTable } from "./AspectTable";
import { Buttons } from "./Buttons";

export function Tasks({ taskNames, aspects, onSubmit, onCancel, results }) {
  const [tabIndex, setTabIndex] = useState("0");
  const switchTab = (e, newTabIndex) => setTabIndex(newTabIndex);

  const stepRight = () => {
    if (tabIndex === Number(taskNames.length - 1).toString()) {
      setTabIndex("0");
    } else {
      setTabIndex((Number(tabIndex) + 1).toString());
    }
  };

  const stepLeft = () => {
    if (tabIndex === "0") {
      setTabIndex(Number(taskNames.length - 1).toString());
    } else {
      setTabIndex((Number(tabIndex) - 1).toString());
    }
  };

  const tabs = taskNames.map((task, i) => (
    <Tab key={i} label={task} value={i.toString()} />
  ));

  const tables = aspects.map((aspect, i) => {
    return (
      <TabPanel key={i} value={i.toString()}>
        <AspectTable aspects={aspect} results={results} />
      </TabPanel>
    );
  });

  return (
    <>
      <TabContext value={tabIndex}>
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
        {tables}
        <Buttons
          onSubmit={onSubmit}
          onCancel={onCancel}
          onNext={stepRight}
          onPrev={stepLeft}
        />
      </TabContext>
    </>
  );
}
