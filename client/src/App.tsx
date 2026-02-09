
import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from '@/components/common/Loading';

const RegisterCity = lazy(() => import('@/pages/admin/RegisterCity'));  //동적 로딩 초기 로딩시 제외되며 화면 진입시 로딩됨
const Home = lazy(() => import('@/pages/home/Home'));  //동적 로딩 초기 로딩시 제외되며 화면 진입시 로딩됨


function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin">
            <Route path="register-city" element={<RegisterCity />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
