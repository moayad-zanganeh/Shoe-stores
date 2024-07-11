import { headerBrandHomes } from '../../../widget/headerBrandHomes';
import { shopList } from '../../../widget/shop/shoplist';

export function brandNike() {
  return El({
    element: 'div',
    className: 'w-[428px]',
    children: [headerBrandHomes('Nike'), shopList()],
  });
}
