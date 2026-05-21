import React, { Children } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const layout = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default layout