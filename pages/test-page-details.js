import ProductCardDetails from '../components/productCardDetails'
import Head from 'next/head'
import NavBar from '../components/navbar'

export default function TestPageDetails() {
    return (
        <div>
            <Head>
                <title>Fabra Online | Bring It On</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <NavBar />
                <ProductCardDetails />
            </main>
        </div>
    )
}

