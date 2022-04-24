import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Container, Divider, Tab } from "@mui/material";
import { useState } from "react";
import { AspectTable } from "./AspectTable";
import { Buttons } from "./Buttons";

export function Tasks({
  criteria,
  formState,
  addResult,
  removeResult,
  setError,
  onSubmit,
  onCancel,
  canSubmit,
}) {
  const [tabIndex, setTabIndex] = useState("0");
  const switchTab = (e, newTabIndex) => setTabIndex(newTabIndex);

  const nextTask = () => {
    if (tabIndex === Number(criteria.tasks.length - 1).toString()) {
      setTabIndex("0");
    } else {
      setTabIndex((Number(tabIndex) + 1).toString());
    }
  };

  const prevTask = () => {
    if (tabIndex === "0") {
      setTabIndex(Number(criteria.tasks.length - 1).toString());
    } else {
      setTabIndex((Number(tabIndex) - 1).toString());
    }
  };

  const countCorrect = (task) => {
    let count = 0;
    task.aspects.forEach((aspect) => {
      let result = formState.results.find((result) => result.id === aspect.id);
      let error = formState.errors.find((err) => err.id === aspect.id);
      if (result === undefined && aspect.required === false && !error) {
        count++;
      } else if (aspect.type === "boolean") {
        count++;
      } else if (result) {
        count++;
      }
    });
    return count;
  };

  const countErrors = (task) => {
    let count = 0;
    task.aspects.forEach((aspect) => {
      let result = formState.errors.find((result) => result.id === aspect.id);
      if (result) {
        count++;
      }
    });
    return count;
  };

  const taskLabel = (task) => {
    return countErrors(task) > 0
      ? `${task.name} (${countCorrect(task)} ✔️ ${countErrors(task)} ❌ / ${
          task.aspects.length
        })`
      : `${task.name} (${countCorrect(task)} ✔️ / ${task.aspects.length})`;
  };

  const tabs = criteria.tasks.map((task, i) => (
    <Tab key={i} label={taskLabel(task)} value={i.toString()} />
  ));

  const tables = criteria.tasks
    .map((task) => task.aspects)
    .map((aspect, i) => {
      return (
        <TabPanel key={i} value={i.toString()}>
          <AspectTable
            aspects={aspect}
            formState={formState}
            addResult={addResult}
            removeResult={removeResult}
            setError={setError}
          />
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
          onNext={nextTask}
          onPrev={prevTask}
          canSubmit={canSubmit}
        />
      </TabContext>
    </>
  );
}
