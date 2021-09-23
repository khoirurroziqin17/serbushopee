import Container from "@components/Container";
import Cards from "@components/Cards/Card";
import NoResult from "@components/NoResult";

export async function getServerSideProps({ params: { slug } }) {
  const reqCategory = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/categories?slug=" + slug
  );
  const category = await reqCategory.json();

  const reqCategoryProducts = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/products?category.slug=" + slug
  );
  const categoryProducts = await reqCategoryProducts.json();

  return {
    props: { category: category[0], categoryProducts },
  };
}

export default function Locations({ category, categoryProducts }) {
  return (
    <main className="py-6 md:py-10">
      <Container>
        <div className="flex justify-center">
          <h2 className="text-xl">
            Category : <span className="font-semibold">{category.name}</span>
          </h2>
        </div>
        <div className="mt-10">
          {!categoryProducts.length ? (
            <NoResult name={category.name} text="kategori" />
          ) : (
            <Cards products={categoryProducts} />
          )}
        </div>
      </Container>
    </main>
  );
}
