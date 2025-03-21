import AppRouter from "./routes/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}
