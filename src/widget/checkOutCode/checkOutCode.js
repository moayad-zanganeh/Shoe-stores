import { El } from '../../utils/el';
import { headerBrandHomes } from '../headerBrandHomes';

export function checkOutCode() {
  return El({
    element: 'div',
    className: '',
    children: [
      El({
        element: 'div',
        className:
          'flex gap-3 ml-5 w-[90%] h-40 items-center bg-white rounded-2xl my-2',
        children: [
          El({
            element: 'img',
            // src: `${src}`,
            src: '../../../shoe-shop/Local/products/adidas/1.webp',
            className: 'w-32 h-32 rounded-lg ml-5',
          }),
          El({
            element: 'div',
            className: '',
            children: [
              El({
                element: 'div',
                className: 'flex gap-10 mb-5 items-center',
                children: [
                  El({
                    element: 'p',
                    className: 'text-lg font-semibold',
                    // innerText: `${text}`,
                    innerText: 'Heloo',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex items-center gap-1',
                children: [
                  El({
                    element: 'div',
                    className: 'w-5 h-5 bg-black rounded-full  ',
                  }),
                  El({
                    element: 'p',
                    // innerText: `${color}`,
                    innerText: 'Black',
                    className: 'text-gray-500',
                  }),
                  El({
                    element: 'span',
                    className: 'h-6 mx-1 text-gray-400',
                    innerText: '|',
                  }),
                  El({
                    element: 'span',
                    // innerText: `size = ${size}`,
                    innerText: `size = 42`,
                    className: 'text-gray-500',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex items-center gap-20 mt-5 relative',
                children: [
                  El({
                    element: 'p',
                    // innerText: `$${price}`,
                    innerText: '$88.00',
                    className: 'text-lg font-semibold',
                  }),
                  El({
                    element: 'div',
                    className: '',
                    children: [
                      El({
                        element: 'span',
                        // innerText: `${ProductQuantity}`,
                        innerText: '1',
                        className:
                          'bg-gray-200 inline-block w-10 rounded-full p-2 text-center absolute -right-16 -top-1 ',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
