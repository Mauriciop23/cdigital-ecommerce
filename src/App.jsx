import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/catalog' component={Catalog} exact/>
        <Route path='/catalog/:id' component={Product} exact/>
        <Route path='/about' component={About} exact/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App
