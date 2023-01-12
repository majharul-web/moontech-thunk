import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { addBrands, toggleStock } from "../../redux/actions/filterActions";
import { loadProduct } from "../../redux/actions/productAction";
import { loadProductsData } from "../../redux/thunks/products/fetchProducts";

const Home = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter.filters);
  const { brands, stocks } = filters;

  useEffect(() => {
    dispatch(loadProductsData());
  }, [dispatch]);

  const activeClass = "text-white  bg-indigo-500 border-white";

  let content;
  if (products.length > 0)
    content = products.map((product) => <ProductCard key={product.model} product={product} />);

  if ((products.length && stocks) || brands.length) {
    content = products
      .filter((product) => {
        if (stocks) {
          return product.status === true;
        } else return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        } else return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${stocks ? activeClass : null} `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(addBrands("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") ? activeClass : null
          }`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(addBrands("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("intel") ? activeClass : null
          }`}
        >
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>{content}</div>
    </div>
  );
};

export default Home;
