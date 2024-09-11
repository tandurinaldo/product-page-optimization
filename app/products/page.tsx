import { fetchProducts } from '../../lib/api';

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;