import { El } from '../../utils/el';

export function card({ product }) {
  const { name, imageURL, price } = product;
  return El({
    element: 'div',
    className: 'flex flex-col m-8',
    children: [
      El({
        element: 'img',
        src: imageURL,
        className: 'w-[142px] h-[142px]  rounded-lg',
      }),
      El({
        element: 'p',
        innerText: name,
        className: 'my-2 w-[142px]',
      }),
      El({
        element: 'span',
        innerText: `$ ${price}`,
        className: 'text-xs',
      }),
    ],
  });
}
