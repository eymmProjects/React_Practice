import React from "react";

const products = [
  {
    id: 1,
    name: "Women's Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Gray",
    size: "S",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-05-product-01.jpg",
    imageAlt: "Front of women's basic tee in heather gray.",
  },
  // More products...
];

export const Example = () => {
  return (
    <div className="m-2 mt-10 mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div className="mx-auto w-full max-w-lg">
        <div className="flow-root ">
          <ul
            role="list"
            className="-my-6 divide-y items-start divide-gray-200"
          >
            {products.map((product) => (
              <li key={product.id} className="flex space-x-6 py-6">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                />
                <div className="flex-auto">
                  <div className="space-y-1 flex items-start sm:justify-between sm:space-x-6">
                    <div className="flex-auto space-y-1 items-start text-sm font-medium">
                      <h3 className="text-">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="text-">{product.price}</p>
                    </div>
                    <div className="flex flex-none space-x-4">
                      <button
                        type="button"
                        className="text-sm font-medium text-amber-300 hover:text-indigo-500"
                      >
                        Edit
                      </button>
                      <div className="flex border-l border-gray-300 pl-4">
                        <button
                          type="button"
                          className="text-sm font-medium text-amber-300 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
