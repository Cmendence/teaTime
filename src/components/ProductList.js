import React from "react";
// import useApi from "../composable/useApi";
import teaherbs from "../assets/imgs/teaherbs.jpg";
import { Link } from "react-router-dom";

const ProductList = ({ onProductClick, products }) => {
  console.log(products);
  //   const apiUrl = "https://teatimeapi-production.up.railway.app/api/data";
  //   const { data, loading, error } = useApi(apiUrl);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Something went wrong: {error.message}</p>;

  // const navigate = useNavigate;
  // const [scrollPosition, setScrollPosition] = useState(0)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Recently added
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product._id}
              onClick={() => onProductClick(product)}
              className="group relative"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none shadow-md group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image || teaherbs}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />{" "}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link
                      to={`/productOverview/${product._id}`}
                      rel="noopener noreferrer"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.caffeine}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
