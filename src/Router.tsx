import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/default'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { ConfirmedOrder } from './pages/ConfirmedOrder'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/check-out" element={<Checkout />} />
        <Route path="/confirmed-order" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  )
}
