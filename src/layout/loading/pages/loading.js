import { El } from '../../../utils/el';

function loading() {
  const loader = El({
    element: 'div',
    children: [
      El({
        element: 'img',
        src: './src/assets/images/logo.svg',
        className: 'my-[85%] mx-[25%]',
      }),
      El({
        element: 'div',
        className:
          'border-4 border-white border-t-black rounded-full w-12 h-12 animate-spin absolute top-[80%] left-[45%]',
      }),
    ],
  });

  setTimeout(() => {
    window.location.href = 'welcome';
  }, 3000);

  return loader;
}

export { loading };
