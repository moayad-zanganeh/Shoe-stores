import { card } from '../../components/Home/card';
import { El } from '../../utils/el';
card;
export function shopList() {
  return El({
    element: 'div',
    className: 'flex flex-wrap',
    children: [card(), card(), card(), card(), card(), card()],
  });
}
