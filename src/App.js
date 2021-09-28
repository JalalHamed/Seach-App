// Components
import Search from "components/Search";

// Libraries
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    margin: 10,
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Search />
    </div>
  );
};

export default App;
