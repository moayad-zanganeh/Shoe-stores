import { El } from '../../utils/el';
import { headerBrandHomes } from '../../widget/headerBrandHomes';
import { shopList } from '../../widget/shop/shoplist';
import { sliderBtns } from '../../widget/sliderBtns/sliderBtns';
import { renderProducts } from './my cart/renderproduct';

export function mosttPopular() {
  return El({
    element: 'div',
    className: 'w-[428px]',
    children: [
      headerBrandHomes('Most Popular'),
      sliderBtns(),
      El({
        element: 'div',
        children: [renderProducts('all')],
        id: 'divrenderproducts',
      }),
    ],
  });
}
