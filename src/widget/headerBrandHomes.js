import { El } from '../utils/el';

export function headerBrandHomes(textContent) {
  return El({
    element: 'div',
    className: 'w-[426px]',
    children: [
      El({
        element: 'div',
        className: 'flex flex-row items-center ml-8 mt-5',
        children: [
          El({
            element: 'span',
            className: 'icon-[formkit--arrowleft]',
          }),
          El({
            element: 'p',
            className: 'ml-3',
            innerText: `${textContent}`,
          }),
        ],
      }),
    ],
  });
}
