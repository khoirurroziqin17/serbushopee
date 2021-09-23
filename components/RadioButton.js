export default function RadioButton({ name, value, caption }) {
  return (
    <>
      <input
        type="radio"
        className="peer hidden"
        id={value}
        name={name}
        value={value}
      />
      <label
        htmlFor={value}
        className="inline-flex items-center border-2 border-gray-200 px-3 py-1 rounded-md peer-checked:bg-yellow-400 peer-checked:border-yellow-400 peer-checked:text-white"
      >
        {caption}
      </label>
    </>
  );
}
