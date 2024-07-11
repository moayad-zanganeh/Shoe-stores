import { El } from '../../utils/el';

export function locationsc(text, textSpan) {
  return El({
    element: 'div',
    className: ' flex items-center mx-10 bg-white rounded-lg h-24',
    children: [
      El({
        element: 'button',
        className: 'bg-gray-200 p-2 rounded-full ml-5',
        children: [
          El({
            element: 'span',
            className:
              'icon-[healthicons--geo-location-negative] rounded-full text-2xl',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'ml-3',
        children: [
          El({
            element: 'p',
            className: 'font-bold text-lg',
            innerText: `${text}`,
          }),
          El({
            element: 'span',
            className: '',
            innerText: `${textSpan}`,
          }),
        ],
      }),
      //   El({
      //     element: 'span',
      //     className:
      //       'icon-[material-symbols--border-color-sharp] absolute right-10',
      //   }),
    ],
  });
}
