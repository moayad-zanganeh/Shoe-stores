import { El } from '../../../utils/el';
import { chooseShippingsc } from '../../../widget/chooseShipping/chooseShippingsc';
import { headerBrandHomes } from '../../../widget/headerBrandHomes';

export function chooseShipping() {
  return El({
    element: 'div',
    className: '',
    children: [
      headerBrandHomes('Choose Shipping'),
      chooseShippingsc('Economy', 'Estimated Arrival, Dec 20-23', '10'),
      chooseShippingsc('Regular', 'Estimated Arrival, Dec 20-22', '15'),
      chooseShippingsc('Cargo', 'Estimated Arrival, Dec 19-20', '20'),
      chooseShippingsc('Express', 'Estimated Arrival, Dec 18-19', '30'),
    ],
  });
}
