import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/style.scss';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
    <div>
        <Header />
        <main className="main">
            { children }
        </main>
        <Footer />
    </div>
);

export default Layout;
