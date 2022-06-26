import CategoryCard from "./Cards/CategoryCard";
import ProductCardStyleOne from "./Cards/ProductCardStyleOne";
import DataIteration from "./DataIteration";
import ViewMoreTitle from "./ViewMoreTitle";

export default function SectionStyleOne({
  className,
  categoryTitle,
  sectionTitle,
  seeMoreUrl,
  brands = [],
  products = [],
  categoryBackground,
}) {
  const filterBrands = brands.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  return (
    <div data-aos="fade-up" className={`section-style-one ${className || ""}`}>
      <ViewMoreTitle categoryTitle={sectionTitle} seeMoreUrl={seeMoreUrl}>
        <div className="products-section w-full">
          <div className="grid grid-cols-4 gap-[30px]">
            <div className="category-card w-full">
              <CategoryCard
                background={categoryBackground}
                title={categoryTitle}
                brands={filterBrands}
              />
            </div>
            <DataIteration datas={products} startLength={0} endLength={3}>
              {({ datas }) => (
                <div key={datas.id} className="item">
                  <ProductCardStyleOne datas={datas} />
                </div>
              )}
            </DataIteration>
          </div>
        </div>
      </ViewMoreTitle>
    </div>
  );
}
