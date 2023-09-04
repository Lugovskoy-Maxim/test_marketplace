import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import { useRouter } from 'next/router';
import Layout from '@/layouts/layout';
import Head from 'next/head';

function ProductCards() {
  const router = useRouter();
  const id = router.query.id as string | undefined;
  const products = useSelector((state: IRootState) => state.data.products);

  interface Product {
    id: number;
    title: string;
    quantity: number;
    price: number;
    discountPercentage: number;
    discountedPrice: number;
  }

  // Проверяем наличие карточки по id
  const product: Product | undefined = products.find(
    (product) => product.id === parseInt(id, 10)
  );

  if (product) {
    return (
      <Layout>
        <Head>
          <title>Купить - {product.title}</title>
        </Head>
        <div>{product.title}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Карточка не найдена</title>
      </Head>
      <div>Карточка не найдена</div>;
    </Layout>
  );
}

export default ProductCards;
