import '@/assets/styles/global.css'
export const metadata = {
    title: 'PropertyPlaces',
    description: 'Find The Perfect Rental Property',
};
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div>{children}</div>
            </body>
        </html>

    )
}

export default MainLayout
