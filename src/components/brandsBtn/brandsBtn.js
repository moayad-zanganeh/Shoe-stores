import { El } from '../../utils/el';

export function brandsBtn({ logo, brand, className }) {
  return El({
    element: 'div',
    className: `flex flex-col ${className} w-[60px] h-[91px] whitespace-nowrap overflow-hidden overflow-ellipsis`,
    id: 'btn',

    children: [
      El({
        element: 'div',
        className:
          'bg-gray-200 w-[60px] hover:bg-gray-300 h-[60px] flex rounded-full',
        id: 'divwindow',

        children: [
          El({
            element: 'span',
            className: ` ${logo} w-[60px] h-[25px] m-auto `,
          }),
        ],
      }),
      El({
        element: 'span',
        className: 'text-[14px]',
        innerText: `${brand}`,
      }),
    ],
  });
}
