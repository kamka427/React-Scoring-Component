import { Container, RadioGroup } from "@mui/material";
import { useState } from "react";
import { ListBox } from "./ListBox";

export const ListInput = ({ aspect, formState, addResult, removeResult }) => {

  const items = Object.keys(aspect.values).map((key, index) => {
    return {
      key: key,
      value: Object.values(aspect.values)[index],
    };
  });

  const val = formState.results.find((result) => result.id === aspect.id);

  const [value, setValue] = useState(val ? val.value : "");

  const handleChange = (e) => {
    setValue(e.target.value);
    e.target.value !== "" ? addResult(e, aspect) : removeResult(e, aspect);
  };

  const list = items.map((item, i) => {
    return (
      <ListBox
        key={i}
        aspect={aspect}
        item={item}
        handleChange={handleChange}
      />
    );
  });

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RadioGroup
          value={value}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {list}
        </RadioGroup>
      </Container>
    </>
  );
};
