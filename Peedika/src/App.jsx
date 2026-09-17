import Header from './components/header/header.jsx'
import Body from './components/hero-body/body.jsx'
import ProductCard from './components/product-card.jsx'
import Footer from './components/footer.jsx'
import './App.css'
import openToWorkImage from './assets/WhatsApp Unknown 2026-09-17 at 11.44.39 PM/Pasted -image.png'
import restingMomentImage from './assets/WhatsApp Unknown 2026-09-17 at 11.44.39 PM/WhatsApp Image 2026-09-17 at 11.43.49 PM.jpeg'
import slowMorningImage from './assets/WhatsApp Unknown 2026-09-17 at 11.44.39 PM/WhatsApp Image 2026-09-17 at 11.43.49 PM (1).jpeg'
import relaxedPortraitImage from './assets/WhatsApp Unknown 2026-09-17 at 11.44.39 PM/WhatsApp Image 2026-09-17 at 11.43.50 PM.jpeg'
import eveningWalkImage from './assets/WhatsApp Unknown 2026-09-17 at 11.44.39 PM/WhatsApp Image 2026-09-17 at 11.43.50 PM (1).jpeg'

const products = [
  { image: openToWorkImage, name: 'Open To Work', price: 9 },
  { image: restingMomentImage, name: 'Resting Moment', price: 9 },
  { image: slowMorningImage, name: 'Slow Morning', price: 9 },
  { image: relaxedPortraitImage, name: 'Relaxed Portrait', price: 9 },
  { image: eveningWalkImage, name: 'Evening Walk', price: 9 },
]

function App() {
  return (
    <div className="App"><div id="Home">
      <Header /></div>
      <Body />
      <div id="products" className="products row row-cols-1 row-cols-md-5 g-4">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
      </div>
      <div id="About" className="footer-container">
      <Footer/>
      </div>
    </div>
  )
}

export default App
