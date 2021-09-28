// Libraries
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  searchBar: {
    padding: {
      top: 7,
      right: 5,
      bottom: 7,
      left: 5,
    },
  },
});

const Search = () => {
  const classes = useStyles();
  return (
    <input
      className={classes.searchBar}
      name="search"
      placeholder="Seach..."
      autoFocus
    />
  );
};

export default Search;
