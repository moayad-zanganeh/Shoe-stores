import { renderProducts } from '../../components/Home/my cart/renderproduct';
import { El } from '../../utils/el';

export function pageAll() {
  return El({
    element: 'div',
    className: '',
    children: [headerBrandHomes('All'), renderProducts('all')],
  });
}
