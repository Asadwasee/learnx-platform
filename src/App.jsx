import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Baqi sections yahan ayenge */}
      <main className="pt-24"> 
        <h1 className="text-center text-4xl font-bold mt-10">
          Welcome to LearnX
        </h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;