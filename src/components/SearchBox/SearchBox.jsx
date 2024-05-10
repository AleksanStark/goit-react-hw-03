import css from "./SearchBox.module.css";
const SearchBox = ({ currentValue, onType }) => {
  const handleChange = (event) => {
    onType(event.target.value);
  };
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input type="text" value={currentValue} onChange={handleChange} />
    </div>
  );
};
export default SearchBox;
