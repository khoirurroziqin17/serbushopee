import Container from "@components/Container";
import Cards from "@components/Cards/Card";
import FeaturedCard from "@components/Cards/FeaturedCard";
import Categories from "@components/Categories/Categories";

export async function getServerSideProps() {
  const reqFeatured = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/products?featured=true"
  );
  const featured = await reqFeatured.json();

  const reqCategories = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/categories"
  );
  const categories = await reqCategories.json();

  const reqProducts = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/products?featured=false"
  );
  const products = await reqProducts.json();

  return {
    props: {
      featured: featured.length > 0 ? featured[0] : false,
      categories,
      products,
    },
  };
}

export default function Home({ featured, categories, products }) {
  return (
    <main className="py-4">
      <Container>
        {featured && <FeaturedCard featured={featured} />}

        <section className="mt-8">
          <h3 className="text-xl font-semibold">Categories</h3>
          <Categories categories={categories} />
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-semibold">Latest</h3>
          <Cards products={products} />
        </section>
      </Container>
    </main>
  );
}
