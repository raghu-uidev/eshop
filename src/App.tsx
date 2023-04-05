import './App.css';
import BannerCorousel from './common/banner-corousel/banner-corousel.component';
import CategoryCards from './common/category-cards/category-cards.component';
import store from './store';

function App() {
  console.log(store.getState());
  return (
    <div className="App">
     <BannerCorousel />
     <CategoryCards />
    </div>
  );
}

export default App;
