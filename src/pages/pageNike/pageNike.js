import { renderProducts } from '../../components/Home/my cart/renderproduct';
import { El } from '../../utils/el';
import { headerBrandHomes } from '../../widget/headerBrandHomes';

export function pageNike() {
  return El({
    element: 'div',
    className: '',
    children: [headerBrandHomes('Nike'), renderProducts('nike')],
  });
}
