export function ScoringComponent({ criteria, onSubmit, onCancel }) {
  console.log(criteria);
  return (
    <>
      <h1>Scoring Component</h1>
      <button onClick={() => onSubmit({todo: 'submit'})}>Submit</button>
      <button onClick={() => onCancel({todo: 'cancel'})}>Cancel</button>
    </>
  );
}