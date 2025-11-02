import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-container">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout