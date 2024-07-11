import { El } from '../../../utils/el';
import { headerBrandHomes } from '../../../widget/headerBrandHomes';
import { locationsc } from '../../../widget/location/locationsc';

export function location() {
  return El({
    element: 'div',
    className: 'h-[926px] ',
    children: [
      headerBrandHomes('Shipping Address'),
      locationsc('Home', '61480 Sunbrook Park, PC 5679'),
      locationsc('Office', '6993 Meadow Valley Terra, PC 3637'),
      locationsc('Home', '21833 Clyde Gallagher, PC 4662'),
      locationsc('Home', '5259 Blue Bill Park, PC 4627'),
      El({
        element: 'div',
        className: 'relative h-[480px]',
        children: [
          El({
            element: 'button',
            innerText: 'Add New Address',
            className:
              'w-[90%] mx-5 bg-gray-300 text-black py-3 rounded-full my-5',
          }),
          El({
            element: 'button',
            innerText: 'Apply',
            className:
              'w-[90%] mx-5 bg-black text-white py-3 rounded-full absolute bottom-5 right-1',
          }),
        ],
      }),
    ],
  });
}
