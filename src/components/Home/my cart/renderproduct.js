import { getProducts } from '../../../api/get/getProducts';
import { El } from '../../../utils/el';
import { card } from '../card';

export function renderProducts(brand) {
  if (!brand) {
    brand = 'all';
  }
  console.log(brand);
  const elementEl = El({
    element: 'div',
    className: 'flex flex-wrap gap-1 w-[428px]',
    id: 'render',
    children: [],
  });
  getProducts(brand).then((carts) => {
    carts.map((product) => {
      const productCart = card({ product });
      // console.log(product);
      elementEl.append(productCart);
    });
  });
  return elementEl;
}
