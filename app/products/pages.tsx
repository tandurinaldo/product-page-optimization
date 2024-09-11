import { fetchProduct } from '../../lib/api';
import { Product } from './type';

interface Props {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: Props) => {
  const product = await fetchProduct(Number(params.id));

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
