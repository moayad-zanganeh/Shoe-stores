import Navigo from 'navigo';
import { loading } from '../layout/loading/pages/loading';
import { changePage } from '../utils/changePage';
import { login } from '../layout/login/login';
import { createSlider } from '../layout/loading/pages/slider';
import { welcome } from '../layout/loading/pages/welcome';
import { homePage } from '../layout/Homa/page1';
import { mosttPopular } from '../components/Home/mostpopular';
import { brandNike } from '../components/Home/headerBrandHome/Nike';
import { wishList } from '../widget/wishlist';
import { myCartsc } from '../widget/myCartComponent/mycartsc';
import { myCart } from '../components/Home/my cart/myCart';
import { pageMostPopular } from '../pages/pageMostPopular/pageMostPopular';
import { pageOrders } from '../components/Home/pageOrders/pageOrders';
import { checkOutCode } from '../widget/checkOutCode/checkOutCode';
import { checkOut } from '../components/Home/checkOut/checkOut';
import { locationsc } from '../widget/location/locationsc';
import { location } from '../components/Home/location/location';
import { chooseShipping } from '../components/Home/chooseShipping/chooseShipping';
import { searchsc } from '../layout/searchsc/searchsc';
import { pageNike } from '../pages/pageNike/pageNike';
import { pageAdidas } from '../pages/pageAdidas/pageAdidas';
import { pageAll } from '../pages/PageAll/pageAll';
import { pageAsics } from '../pages/pageAsics/pageAsics';
import { pageConverse } from '../pages/pageConverse/pageConverse';
import { pageNewBalance } from '../pages/pageNewBalance/pageNewBalance';
import { pagePuma } from '../pages/pagePuma/pagePuma';
import { pageReebok } from '../pages/pageReebok/pageReebok';
export const router = new Navigo('/');

router
  .on('/', () => {
    changePage(loading);
  })
  .on('/login', () => {
    changePage(login);
  })
  .on('/createSlider', () => {
    changePage(createSlider);
  })
  .on('/welcome', () => {
    changePage(welcome);
  })
  .on('/homePage', () => {
    changePage(homePage);
  })
  .on('/mosttPopular', () => {
    changePage(mosttPopular);
  })
  .on('/wishList', () => {
    changePage(wishList);
  })
  //brandBtnHeader
  .on('/nike', () => {
    changePage(pageNike);
  })
  .on('/pageOrders', () => {
    changePage(pageOrders);
  })
  .on('/checkOut', () => {
    changePage(checkOut);
  })
  .on('/searchsc', () => {
    changePage(searchsc);
  })
  .on('/location', () => {
    changePage(location); //pak
  })
  .on('/chooseShipping', () => {
    changePage(chooseShipping); //pak
  });
