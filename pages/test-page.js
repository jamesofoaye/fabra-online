import ProductCard from '../components/productCard'
import Head from 'next/head'
import NavBar from '../components/navbar'

export default function TestPage() {
    return (
        <div>
            <Head>
                <title>Fabra Online | Bring It On</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <NavBar />
                <ProductCard />
            </main>
        </div>
    )
}

