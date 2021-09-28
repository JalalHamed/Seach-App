// Components
import Checkbox from "./Checkbox";

// Styles
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  searchBar: {
    width: 300,
    fontSize: 20,
    padding: {
      top: 7,
      right: 5,
      bottom: 7,
      left: 5,
    },
  },
  filterAccountType: {
    color: "#3e3e3e",
    margin: {
      left: 30,
      right: 15,
    },
  },
  accountTypeOptionsWrapper: {
    display: "inline-block",
    "& label": {
      userSelect: "none",
      margin: {
        right: 10,
        left: 3,
      },
    },
  },
});

const Search = ({ searchTerm, setSearchTerm, accountType, setAccountType }) => {
  const classes = useStyles();

  return (
    <>
      <input
        className={classes.searchBar}
        name="search"
        placeholder="Seach..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        autoFocus
      />
      <span className={classes.filterAccountType}>Filter Account Type</span>
      <div className={classes.accountTypeOptionsWrapper}>
        <Checkbox
          id="gold"
          name="gold"
          value="Gold"
          accountType={accountType}
          setAccountType={setAccountType}
        />
        <Checkbox
          id="silver"
          name="silver"
          value="Silver"
          accountType={accountType}
          setAccountType={setAccountType}
        />
        <Checkbox
          id="bronze"
          name="bronze"
          value="Bronze"
          accountType={accountType}
          setAccountType={setAccountType}
        />
      </div>
    </>
  );
};

export default Search;
