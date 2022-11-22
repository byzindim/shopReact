import logo from './img/logo.png'
import cart from './img/cart.svg'
import user from './img/user.svg'
import heart from './img/heart.svg'
import iconSelectHeart from './img/iconSelectHeart.svg'
import sneakersSelect from './img/sneakersSelect.svg'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="headerLeft">
          <img src={logo} className="logoHeaderLeft"/>
          <div className="headerInfo">
            <h3 className="shopLable">React Sneakers</h3>
            <p className="shopTitle">Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="headerRight">
          <div>
            <img src = {cart} className="cartIcon" />
            <span className="price">120 руб.</span>
          </div>
          <div>
          <img src = {heart} className="heartIcon" />
          </div>
          <div>
          <img src = {user} />
          </div>
        </div>
      </header>
      <div className="content">
        <h1 className="allShop">Все кроссовки</h1>
        <div className="cartSneakers">
          <div className="viewCart">
            <div className="backgroundHeart">
              <img src={iconSelectHeart} className="iconSelectHeart"/>
            </div>
            <img src={sneakersSelect} />
          </div>
          <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>
          <div className="currentPrice">
            <div className="priceSelect">
              <span>Цена:</span>
              <span>1299 руб.</span>
            </div>
            <div className="increaseNumber">
              <div className="backgroundIncreaseNumber">
                <div className="plusShop">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
