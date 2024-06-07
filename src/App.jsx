import React from 'react'
import './App.css'
import IndexRouts from './Routs/IndexRouts'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {

  return (
    <div>
      <section>
        <Header />
      </section>
      <IndexRouts />
      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default App