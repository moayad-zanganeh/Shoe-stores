import { El } from '../../../utils/el';
import { headerBrandHomes } from '../../../widget/headerBrandHomes';
import { sliderBtns } from '../../../widget/sliderBtns/sliderBtns';
import { renderProducts } from '../my cart/renderproduct';
export function wishList() {
  return El({
    element: 'div',
    className: 'w-[428px]',
    children: [
      headerBrandHomes('My Whishlist'),
      sliderBtns(),
      renderProducts('all'),
    ],
  });
}
