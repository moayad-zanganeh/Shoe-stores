import { El } from '../../utils/el';

export function footer(home, cart, orders, wallet, profile) {
  return El({
    element: 'div',
    className: 'flex flex-col',
    children: [
      El({
        element: 'div',
        className:
          'flex justify-around w-[428px] py-2 -mx-2 fixed bottom-0 bg-white',
        children: [
          El({
            element: 'div',
            className: 'flex flex-col items-center',
            children: [
              El({
                element: 'span',
                className: `${home}`,
              }),
              El({
                element: 'span',
                innerText: 'Home',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-center',
            children: [
              El({
                element: 'span',
                className: `${cart}`,
              }),
              El({
                element: 'span',
                innerText: 'Cart',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-center',
            children: [
              El({
                element: 'span',
                className: `${orders}`,
              }),
              El({
                element: 'span',
                innerText: 'Orders',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-center',
            children: [
              El({
                element: 'span',
                className: `${wallet}`,
              }),
              El({
                element: 'span',
                innerText: 'Wallet',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-center',
            children: [
              El({
                element: 'span',
                className: `${profile}`,
              }),
              El({
                element: 'span',
                innerText: 'Profile',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
