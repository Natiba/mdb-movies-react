import './App.css';
import { MoviesGrid } from './components/MoviesGrid';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Header />
      <main className="main-container">
       <MoviesGrid />
      </main>
      <Footer creator="©2022 -  Created by NZB with love ❤️"></Footer>
    </div>
  );
}

export default App;
