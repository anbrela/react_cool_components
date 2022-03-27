export const Select = ({ value, data, onChange, className, style }) => {
  const newData = [{ id: null, header: null }, ...data];

  return (
    <select
      className={className}
      style={style}
      value={value}
      onChange={onChange}
    >
      {newData.map((el) => (
        <option key={el.value} value={el.header}>
          {el.header}
        </option>
      ))}
    </select>
  );
};
