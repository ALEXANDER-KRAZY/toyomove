//importing css styling
import '@styles/globals.css';
//during importin nav we'll go above children and creatw a self closing nav component
import Nav from '@components/Nav';
import Provider from '@components/Provider';
//changing the metadata of our application
export const metadata = {
    //title is like an object
    title: "toyomove",
    description: 'Discover Toyota and all Japanese Vehicles'
}

const RootLayout = ({ children}) => {
  return (
    <html lang = "en">
        <body>
            <Provider>
            <div className="main">
                <div className = "gradient"/>
            </div>
            <main className="app">
                <Nav /> {/*self closing nav component*/}
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;
