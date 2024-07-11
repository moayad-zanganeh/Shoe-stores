import { footer } from '../../../layout/footer page/footer';
import { El } from '../../../utils/el';
import { myCartsc } from '../../../widget/myCartComponent/mycartsc';
export function myCart() {
  return El({
    element: 'div',
    className: 'w-[428px] h-[926px] bg-slate-200',
    children: [
      El({
        element: 'div',
        className: 'flex items-center justify-between',
        children: [
          El({
            element: 'div',
            className: 'm-5 flex flex-row items-center',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/login.svg',
                className: 'w-8 h-8',
              }),
              El({
                element: 'span',
                innerText: 'My Cart',
                className: 'ml-2',
              }),
            ],
          }),
          El({
            element: 'span',
            className: 'icon-[bi--search] mr-5 w-6 h-6',
          }),
        ],
      }),
      myCartsc(
        '../../../shoe-shop/Local/products/adidas/1.webp',
        'Air jordan 3 Retro',
        'Green',
        '44',
        '105.00',
        '1'
      ),
      myCartsc(
        '../../../shoe-shop/Local/products/adidas/1.webp',
        'Heloo',
        'Blue',
        '45',
        '88.00',
        '3'
      ),
      myCartsc(
        '../../../shoe-shop/Local/products/adidas/1.webp',
        'Heloo',
        'Black',
        '42',
        '85.00',
        '2'
      ),
      myCartsc(
        '../../../shoe-shop/Local/products/adidas/1.webp',
        'Heloo',
        'Black',
        '42',
        '94.00',
        '2'
      ),
      El({
        element: 'div',
        className:
          'flex flex-row justify-between bg-white rounded-t-xl p-2 h-[85px] w-full',
        children: [
          El({
            element: 'div',
            className: 'flex flex-col',
            children: [
              El({
                element: 'span',
                innerText: 'Total Price',
                className: 'p-1 text-gray-300 text-xs	',
              }),
              El({
                element: 'p',
                className: 'text-2xl font-bold mt-2',
                innerText: '$585.00',
              }),
              footer(),
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center mr-10',
            id: 'divprice',
            children: [
              El({
                element: 'button',
                className: 'bg-black text-white p-3 x-5 w-48 rounded-full ',
                innerText: 'Checkout ',
                onclick: btnPrice,
              }),
              El({
                element: 'span',
                className: 'absolute text-white right-[83px] text-center h-7',
                innerText: '-',
              }),
              El({
                element: 'span',
                className:
                  'icon-[eva--arrow-right-fill] text-white absolute right-[70px]',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function btnPrice() {}
