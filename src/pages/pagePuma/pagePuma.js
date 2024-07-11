import { renderProducts } from '../../components/Home/my cart/renderproduct';
import { El } from '../../utils/el';

export function pagePuma() {
  return El({
    element: 'div',
    className: '',
    children: [headerBrandHomes('Puma'), renderProducts('puma')],
  });
}
