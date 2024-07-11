import { renderProducts } from '../../components/Home/my cart/renderproduct';
import { El } from '../../utils/el';

export function pageConverse() {
  return El({
    element: 'div',
    className: '',
    children: [headerBrandHomes('Converse'), renderProducts('converse')],
  });
}
