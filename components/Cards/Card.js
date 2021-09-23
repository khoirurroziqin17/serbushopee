import CardCaption from "@components/Cards/CardCaption";

export default function Card({ products }) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-6 mt-2">
      {products.map((product) => (
        <article key={product.id} className="col-span-1">
          <div className="shadow rounded-md">
            <a href={product.link}>
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.thumbnail.formats.small.url}
                  className={`rounded-t-md object-contain ${
                    product.thumbnail.mime == "image/png" && "bg-yellow-300 p-4"
                  }`}
                  alt={product.thumbnail.name}
                />
              </div>
            </a>
            <CardCaption {...product} />
          </div>
        </article>
      ))}
    </div>
  );
}
