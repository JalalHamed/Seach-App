// Hooks
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

// Components
import Search from "components/Search";
import Card from "components/Card";

// Data
import data from "data.json";

// Styles
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    margin: 20,
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: {
      top: 25,
    },
  },
});

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [accountType, setAccountType] = useState([]);
  const classes = useStyles();

  const setTheFilteredResults = () => {
    console.log("in", results);
    setFilteredResults(
      results.filter(person => {
        let x = false;
        accountType.forEach(item => {
          if (person.account_type === item) x = true;
        });
        return x;
      })
    );
  };

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
    } else {
      setResults([]);
    }
    // eslint-disable-next-line
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (!!accountType.length) setTheFilteredResults();
    // eslint-disable-next-line
  }, [accountType, results]);

  return (
    <div className={classes.wrapper}>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        accountType={accountType}
        setAccountType={setAccountType}
      />
      <div className={classes.cardWrapper}>
        {!!results.length && !!filteredResults.length
          ? filteredResults.map(res => <Card key={res.id} data={res} />)
          : results.map(res => <Card key={res.id} data={res} />)}
      </div>
    </div>
  );
};

export default App;
