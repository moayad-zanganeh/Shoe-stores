import { El } from '../../utils/el';

export function myCartsc(src, text, color, size, price, ProductQuantity) {
  return El({
    element: 'div',
    className: '',
    children: [
      El({
        element: 'div',
        className:
          'flex gap-3 ml-5 mb-5 w-[90%] h-40 items-center bg-white rounded-2xl',
        children: [
          El({
            element: 'img',
            src: `${src}`,
            // src: '../../../shoe-shop/Local/products/adidas/1.webp',
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
                    innerText: `${text}`,
                  }),
                  El({
                    element: 'button',
                    className: 'mb-[15px]',
                    // onclick: btnDelete,
                    children: [
                      El({
                        element: 'span',
                        className:
                          'icon-[ic--outline-delete] absolute right-[45px]',
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex items-center gap-1',
                children: [
                  El({
                    element: 'div',
                    className: 'w-5 h-5 bg-black rounded-full ',
                  }),
                  El({
                    element: 'p',
                    innerText: `${color}`,
                    // innerText: 'Black',
                    className: 'text-gray-500',
                  }),
                  El({
                    element: 'span',
                    className: 'h-6 mx-1 text-gray-400',
                    innerText: '|',
                  }),
                  El({
                    element: 'span',
                    innerText: `size = ${size}`,
                    // innerText: `size = 42`,
                    className: 'text-gray-500',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex items-center gap-20 mt-5',
                children: [
                  El({
                    element: 'p',
                    innerText: `$${price}`,
                    className: 'text-lg font-semibold',
                  }),
                  El({
                    element: 'div',
                    className: '',
                    children: [
                      El({
                        element: 'button',
                        innerText: '-',
                        className: 'bg-gray-200 w-7 rounded-s-full',
                      }),
                      El({
                        element: 'span',
                        innerText: `${ProductQuantity}`,
                        // innerText: `1`,
                        className: 'bg-gray-200 h[10px] inline-block',
                      }),
                      El({
                        element: 'button',
                        innerText: '+',
                        className: 'bg-gray-200 w-7 rounded-r-full',
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
