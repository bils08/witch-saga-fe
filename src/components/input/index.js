const Input = ({ label, type, id, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input id={id} type={type} onChange={onChange} />
    </>
  );
};

export default Input;
