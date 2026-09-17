import Header from './components/header/header.jsx'
import Body from './components/hero-body/body.jsx'
import ProductCard from './components/product-card.jsx'
import Footer from './components/footer.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <div id="products" className="products row row-cols-1 row-cols-md-3 g-4">
      <ProductCard />
      <ProductCard />
      <ProductCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
