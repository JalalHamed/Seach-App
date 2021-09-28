// Hooks
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

// Components
import Search from "components/Search";

// Data
import data from "data.json";

// Styles
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    margin: 20,
  },
});

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const classes = useStyles();

  useEffect(() => {
    if (debouncedSearchTerm) {
      let value = debouncedSearchTerm.toLowerCase().trim();
      if (value.includes(" ")) {
        setResults(
          data.filter(
            person =>
              person.firstName.startsWith(value.split(" ")[0]) &&
              person.lastName.startsWith(value.split(" ")[1])
          )
        );
      } else {
        setResults(data.filter(person => person.firstName.startsWith(value)));
      }
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <div className={classes.wrapper}>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default App;
