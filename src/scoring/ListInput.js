import { Container, RadioGroup } from "@mui/material";
import { useState } from "react";
import { ListBox } from "./ListBox";

export const ListInput = ({ aspect, results }) => {
  const items = Object.keys(aspect.values).map((key, index) => {
    return {
      key: key,
      value: Object.values(aspect.values)[index],
    };
  });

  const [value, setValue] = useState(results[aspect.id] || "");

  const handleChange = (e) => {
    setValue(e.target.value);
    results[aspect.id] = e.target.value;
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
