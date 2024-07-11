import { renderProducts } from '../../components/Home/my cart/renderproduct';
import { El } from '../../utils/el';

export function pageAdidas() {
  return El({
    element: 'div',
    className: '',
    children: [headerBrandHomes('Adidas'), renderProducts('adidas')],
  });
}
