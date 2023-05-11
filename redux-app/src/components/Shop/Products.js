import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id:1,
    price: 6,
    title: 'Abc',
    description: 'ouwqha ouqwhads ouhwsad'
  },
  {
    id:2,
    price: 7,
    title: 'Abc2',
    description: 'ouwqha ouqwhads ouhwsad'
  },
  {
    id:3,
    price: 8,
    title: 'Abc3',
    description: 'ouwqha ouqwhads ouhwsad'
  },
  {
    id:4,
    price: 9,
    title: 'Abc4',
    description: 'ouwqha ouqwhads ouhwsad'
  }
];
 
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        )
        )} 
      </ul>
    </section>
  );
};

export default Products;
