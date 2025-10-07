
// This should iterate over an array and produce chips
const Chips = (props) => {
    const {skills} = props;
     return (
    <div className="chips-container">
      {skills.map((chip, i) => (
        <div key={i} className="chip">
          {chip}
        </div>
      ))}
    </div>
  );
}

export default Chips;