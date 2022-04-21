import { ScoringComponent } from "./scoring/ScoringComponent";
import json_data from "./stories/example-data/the-example";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <ScoringComponent
      criteria={json_data}
      onSubmit={results => console.log(results)}
      onCancel={draft => console.log(draft)}
    />
  );
}

export default App;
