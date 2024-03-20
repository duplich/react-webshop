import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'
import './AppWrapper.css'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


function AppWrapperComponent () {
  return(
    <div className={'page-wrapper'}>
      <Toaster/>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export { AppWrapperComponent }
