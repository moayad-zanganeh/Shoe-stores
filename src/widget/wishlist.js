import { El } from '../utils/el';

export function wishList() {
  return El({
    element: 'div',
    className: 'flex flex-col mx-9 my-5',
    children: [
      El({
        element: 'div',
        className: 'relative',
        children: [
          El({
            element: 'img',
            src: '../../../shoe-shop/Local/products/adidas/1.webp',
            className: 'w-[142px] h-[142px]  rounded-lg ',
          }),
          El({
            element: 'span',
            className:
              'icon-[healthicons--heart-negative] absolute top-[1rem] left-[7rem] rounded-full ',
          }),
        ],
      }),

      El({
        element: 'p',
        innerText: 'Nike Air Zoom Rivel',
        className: 'my-2',
      }),
      El({
        element: 'span',
        innerText: '$ 120.00',
        className: 'text-xs',
      }),
    ],
  });
}
