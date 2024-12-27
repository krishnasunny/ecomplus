import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Layout } from '@/components/layout/layout';
import { DashboardPage } from '@/pages/dashboard';
import { Toaster } from '@/components/ui/toaster';
import VendorsPage  from './pages/vendors/page';
import { ProductsPage} from './pages/products';
import { OrdersPage } from './pages/orders';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/vendors" element={<VendorsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}