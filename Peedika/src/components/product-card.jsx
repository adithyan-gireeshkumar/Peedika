import './product-card.css'

function ProductCard({ image, name, price }) {
  return (
    <div className="col d-flex justify-content-center">
      <article className="card product-card rounded-4 shadow h-100">
        <div className="product-card-image-wrap overflow-hidden">
          <img src={image} className="card-img-top product-card-image" alt={name} />
        </div>
        <div className="card-body text-center d-flex flex-column">
          <h5 className="card-title-product">{name}</h5>
          <h1 className="card-text text-red text-bold">{price}$</h1>
          <a href="#" className="btn btn-primary mt-auto">Add to Cart</a>
        </div>
      </article>
    </div>
  )
}

export default ProductCard;