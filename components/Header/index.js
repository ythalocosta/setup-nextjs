import './style.scss';
import Head from 'next/head';
import Link from 'next/link';

const Header = () => (
    <div>
        <Head>
            <title>NextJs Boilerplate</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <header id="header">
            <div className="container">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/single">
                            <a className="nav-link">Single</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
)
export default Header;
