import { renderProducts } from '../../components/Home/my cart/renderproduct';
import { El } from '../../utils/el';
import { sliderBtns } from '../../widget/sliderBtns/sliderBtns';

export function pageMostPopular(brand) {
  window.location.href = 'mosttPopular';
  sliderBtns();
  return El({
    element: 'div',
    id: 'divrendermostpopular',
    children: [renderProducts('all')],
  });
}
