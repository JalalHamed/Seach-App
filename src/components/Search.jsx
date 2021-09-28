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
});

const Search = ({ searchTerm, setSearchTerm }) => {
  const classes = useStyles();

  return (
    <input
      className={classes.searchBar}
      name="search"
      placeholder="Seach..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      autoFocus
    />
  );
};

export default Search;
