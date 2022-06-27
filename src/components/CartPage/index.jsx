import BreadcrumbCom from "../BreadcrumbCom";
import EmptyCardError from "../EmptyCardError";
import Layout from "../Partials/Layout";

export default function CardPage() {
  return (
    <Layout>
      <div className="cart-page-wrapper w-full">
        <div className="container-x mx-auto">
          <BreadcrumbCom
            paths={[
              { name: "home", path: "/" },
              { name: "cart", path: "/cart" },
            ]}
          />
          <EmptyCardError />
        </div>
      </div>
    </Layout>
  );
}
