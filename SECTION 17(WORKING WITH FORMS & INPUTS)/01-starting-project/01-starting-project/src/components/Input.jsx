export default function Input({ label, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor="email">Email</label>
      <input id={id} {...props} />
      <div className="control-error">{emailIsInvalid && <p>{error}</p>}</div>
    </div>
  );
}
