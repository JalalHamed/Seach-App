const Checkbox = ({ name, id, value, accountType, setAccountType }) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={() => {
          if (!accountType.includes(name)) {
            setAccountType([...accountType, name]);
          } else {
            setAccountType(accountType.filter(type => type !== name));
          }
        }}
      />
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default Checkbox;
