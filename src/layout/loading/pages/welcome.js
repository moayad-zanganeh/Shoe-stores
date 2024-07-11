import { El } from '../../../utils/el';

export function welcome() {
  document.body.addEventListener('click', () => {
    window.location.href = 'createSlider';
  });
  return El({
    element: 'div',
    className: "bg-[url('src/assets/images/welcome.svg')] w-[426px] h-[926px]",
    children: [
      El({
        element: 'div',
        className: 'text-white absolute top-[70%] ml-[2%]',
        children: [
          El({
            element: 'p',
            className: 'font-semibold text-4xl	h-10',
            innerText: 'Welcome to 👋',
          }),
          El({
            element: 'h2',
            className: 'text-7xl font-bold my-5',
            innerText: 'Shoea',
          }),
          El({
            element: 'span',
            innerText:
              'The best sneakers & shoes e-commerse app of the century for your fashion needs!',
          }),
        ],
      }),
    ],
  });
}
