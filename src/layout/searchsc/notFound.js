import { El } from '../../utils/el';

export function notFound() {
  return El({
    element: 'div',
    className: 'my-32 mx-5 hidden',
    id: 'divnotfound',
    children: [
      El({
        element: 'img',
        src: './src/assets/images/Doc.png',
        className: 'w-[80%] mx-7',
      }),
      El({
        element: 'p',
        className: 'text-center font-bold text-2xl mb-5 mt-2',
        innerText: 'Not Found',
      }),
      El({
        element: 'span',
        innerText:
          'Sorry, the keyword you entered cannot be found. please check again or search with another keyword',
        className: 'text-xl text-center inline-block mr-2 ',
      }),
    ],
  });
}
