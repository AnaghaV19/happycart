import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Happy Cart</a>
      </header>
      <main>
        <h1> Available products</h1>
        <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} />
            </a>
            <div className="productinfo">
            <a href={`/product/${product.slug}`}>
            <p>{product.name}</p>
            </a>
            <p><strong>Rs{product.price}</strong></p>
            <button>Add to cart</button>
            </div>
          </div >
        ))}
        </div>
      </main>
    </div>
  );
}

export default App;
