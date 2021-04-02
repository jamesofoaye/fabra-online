import Auth from '../components/auth'
import Head from 'next/head'

export default function TestPage() {
    return (
        <div>
            <Head>
                <title>Fabra Online | Bring It On</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Auth />
            </main>
        </div>
    )
}

