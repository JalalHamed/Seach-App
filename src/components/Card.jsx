// Styles
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    width: 300,
    height: 200,
    backgroundColor: "#082a4d",
    color: "#fff",
    fontSize: 15,
    borderRadius: 10,
    padding: 15,
    "& span": {
      fontSize: 20,
    },
  },
});

const Card = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <p>
        First Name: <span>{data.firstName}</span>
      </p>
      <br />
      <p>
        Last Name: <span>{data.lastName}</span>
      </p>
      <br />
      <p>
        Account Type: <span>{data.account_type}</span>
      </p>
    </div>
  );
};

export default Card;
