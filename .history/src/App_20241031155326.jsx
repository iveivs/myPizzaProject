
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageHome from './pages/PageHome'
import PageProducts from './pages/PageProducts'
import SingleProduct from './pages/SingleProduct'
import Layout from './components/Layout/Layout'
import LayoutAdmin from './components/LayoutAdmin/LayoutAdmin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<PageHome />}></Route>
        <Route path="/products" element={<PageProducts />}></Route>
        <Route path="/products/:id" element={<SingleProduct/>}></Route> */}

        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <PageHome /> } />
          <Route path="/products" element={ <PageProducts /> } />
          <Route path="/products/:id" element={ <SingleProduct /> } />
          <Route path="/authorization" element={ <A /> } />
        </Route>

        {/* <Route path="/admin" element={ <LayoutAdmin /> }>
          <Route path="/admin" element={ <PageAdminHome /> } />
          <Route path="/admin/products" element={ <PageAdminProducts /> } />
          <Route path="/admin/add-product" element={ <AddProduct /> } />
          <Route path="/admin/update-product/:id" element={ <UpdateProduct /> } />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
