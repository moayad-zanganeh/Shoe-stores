import { footer } from '../../../layout/footer page/footer';
import { El } from '../../../utils/el';

export function pageOrders() {
  return El({
    element: 'div',
    className: 'w-[428px] h-[926px] bg-white',
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
                innerText: 'My Orders',
                className: 'ml-2',
              }),
            ],
          }),
          El({
            element: 'div',
            className: '',
            children: [
              El({
                element: 'span',
                className: 'icon-[bi--search] mr-5 w-6 h-6',
              }),
              El({
                element: 'span',
                className: 'icon-[icon-park-outline--more-two] w-6 h-6 mr-5',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'my-5 mx-9',
        children: [
          El({
            element: 'button',
            innerText: 'Active',
            className: 'border-b-4 border-b-black w-44 py-2 ',
          }),
          El({
            element: 'button',
            innerText: 'Completed',
            className:
              'border-b-4 border-b-neutral-300 w-44  py-2 hover:border-b-neutral-950',
          }),
          El({
            element: 'div',
            className: 'hidden',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/Doc.png',
                className: 'mt-32 w-80 h-80 mx-5',
              }),
              El({
                element: 'p',
                innerText: "You don't have an arder yet",
                className: 'text-center font-bold text-xl ml-6 mb-3',
              }),
              El({
                element: 'span',
                innerText: "You don't have on active orders at this time",
                className: 'text-center ml-10 ',
              }),
            ],
          }),
        ],
      }),
      footer(),
    ],
  });
}
