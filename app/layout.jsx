import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata = {
    title: 'PropertyPlaces',
    description: 'Find The Perfect Rental Property',
};
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>

    )
}

export default MainLayout
