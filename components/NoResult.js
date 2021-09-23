export default function NoResult({ name, text, nameALt, textAlt }) {
  return (
    <div className="text-center py-10">
      <h2 className="sm:text-5xl text-3xl font-medium">
        Produk tidak ditemukan
      </h2>
      <p className="sm:text-xl text-lg text-gray/60 md:w-6/12 mx-auto mt-6">
        Kita tidak dapat menemukan produk dengan {text + " "}
        <span className="font-medium">"{name}"</span>{" "}
        {nameALt && "dan " + textAlt + " "}
        {nameALt && <span className="font-medium">"{nameALt}"</span>}. Coba
        gunakan
        {" " + text}
        {nameALt && " dan " + textAlt} lain.
      </p>
    </div>
  );
}
