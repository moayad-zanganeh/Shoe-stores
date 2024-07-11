import { renderProducts } from '../../components/Home/my cart/renderproduct';
import { El } from '../../utils/el';

export function pageNewBalance() {
  return El({
    element: 'div',
    className: '',
    children: [headerBrandHomes('New Balance'), renderProducts('new balance')],
  });
}
