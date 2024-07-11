import { renderProducts } from '../../components/Home/my cart/renderproduct';
import { El } from '../../utils/el';

export function pageAsics() {
  return El({
    element: 'div',
    className: '',
    children: [headerBrandHomes('Asics'), renderProducts('asics')],
  });
}
