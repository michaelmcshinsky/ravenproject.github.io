import { Navbar, Footer } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="relative z-40">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
