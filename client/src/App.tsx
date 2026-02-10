
import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from '@/components/common/Loading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ModalProvider from '@/components/common/ModalProvider';

const Home = lazy(() => import('@/pages/home/Home'));  //동적 로딩 초기 로딩시 제외되며 화면 진입시 로딩됨
const RegisterCity = lazy(() => import('@/pages/admin/RegisterCity'));  //동적 로딩 초기 로딩시 제외되며 화면 진입시 로딩됨
const RegisterCountry = lazy(() => import('@/pages/admin/RegisterCountry'));  //동적 로딩 초기 로딩시 제외되며 화면 진입시 로딩됨
const PlanCity = lazy(() => import('@/pages/plan/PlanCity'));

const queryClient = new QueryClient();
function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin">
              <Route path="register-city" element={<RegisterCity />} />
              <Route path="register-country" element={<RegisterCountry />} />
            </Route>
            <Route path="/plan/:city" element={<PlanCity />} />
          </Routes>
        </Suspense>
        <ModalProvider />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
