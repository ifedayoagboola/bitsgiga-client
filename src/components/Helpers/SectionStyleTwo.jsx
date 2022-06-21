import ProductCardRowStyleOne from "./Cards/ProductCardRowStyleOne";
import DataIteration from "./DataIteration";

export default function SectionStyleTwo({ className, products }) {
  return (
    <div
      className={`section-content w-full grid grid-cols-2 gap-[30px] ${
        className || ""
      }`}
    >
      <DataIteration datas={products} startLength={0} endLength={4}>
        {({ datas }) => (
          <div key={datas.id} className="item w-full">
            <ProductCardRowStyleOne datas={datas} />
          </div>
        )}
      </DataIteration>
    </div>
  );
}
