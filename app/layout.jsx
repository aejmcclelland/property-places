import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar';
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
            </body>
        </html>

    )
}

export default MainLayout
