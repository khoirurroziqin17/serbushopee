import Card from "@components/Cards/Card";
import Container from "@components/Container";
import NoResult from "@components/NoResult";

export async function getServerSideProps({ query }) {
  let name = "";
  let nameALt = "";
  let text = "";
  let textAlt = "";

  let products = "";
  if (query.category && query.location) {
    const reqCategory = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL} +/categories?slug=${query.category}`
    );
    name = await reqCategory.json();
    text = "kategori";

    const reqLocation = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL} +/locations?slug=${query.location}`
    );
    nameALt = await reqLocation.json();
    textAlt = "lokasi";

    const reqProducts = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/products?category.slug=${query.category}&location.slug=${query.location}&_sort=updated_at:DESC`
    );
    products = await reqProducts.json();
  } else if (query.category) {
    const reqCategory = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL} +/categories?slug=${query.category}`
    );
    name = await reqCategory.json();
    text = "kategori";

    const reqProducts = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/products?category.slug=${query.category}&_sort=updated_at:DESC`
    );
    products = await reqProducts.json();
  } else if (query.location) {
    const reqLocation = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL} +/locations?slug=${query.location}`
    );
    name = await reqLocation.json();
    text = "lokasi";

    const reqProducts = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/products?location.slug=${query.location}$_sort=updated_at:DESC`
    );
    products = await reqProducts.json();
  } else {
    const qs = require("qs");
    let list = [];
    const myArr = query.title.split(" ");
    myArr.forEach((element) => {
      list.push({ title_contains: element });
    });
    const title = qs.stringify({
      _where: list,
    });

    const reqProductsByTitle = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/products?${title}&_sort=updated_at:DESC`
    );
    products = await reqProductsByTitle.json();
    text = "kata kunci";
  }

  return {
    props: {
      name: typeof name == "object" ? name[0] : query.title,
      nameALt: nameALt != "" ? nameALt[0] : false,
      text,
      textAlt,
      products,
    },
  };
}

export default function Search({ name, nameALt, text, textAlt, products }) {
  return (
    <main className="py-6">
      <Container>
        {!products.length ? (
          <NoResult
            name={typeof name == "object" ? name.name : name}
            text={text}
            nameALt={nameALt.name}
            textAlt={textAlt}
          />
        ) : (
          <>
            <div className="flex md:text-xl sm:text-lg">
              <span>{text}:</span>
              <h3 className="font-medium ml-2">
                {typeof name == "object" ? name.name : name}
              </h3>
              {nameALt.name && (
                <>
                  <span className="ml-1">dan {textAlt}:</span>
                  <h3 className="font-medium ml-2">{nameALt.name}</h3>
                </>
              )}
            </div>
            <div className="mt-10">
              <p className="text-xl font-medium">Hasil Pencarian</p>
              <div className="mt-6">
                <Card products={products} />
              </div>
            </div>
          </>
        )}
      </Container>
    </main>
  );
}
