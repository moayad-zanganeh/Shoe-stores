import { renderProducts } from '../../components/Home/my cart/renderproduct';
import { El } from '../../utils/el';

export function pageReebok() {
  return El({
    element: 'div',
    className: '',
    children: [headerBrandHomes('Reebok'), renderProducts('reebok')],
  });
}
