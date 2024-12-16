// App.jsx
import Header from './components/Header';
import LaundrySystem from './components/LaundrySystem';
import SecuritySystem from './components/SecuritySystem';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import Content from './components/Content';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Content/>
      <LaundrySystem />
      <SecuritySystem />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default App;