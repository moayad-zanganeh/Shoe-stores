import { El } from '../el';

export const loading = () => {
  return El({
    element: 'div',
    classNAme: 'bg-red-400',
    innerText: 'HI',
    children: [
      El({
        element: 'img',
        src: './onboarding/logo/Group 2.svg',
        classNAme: 'my-[80%] mx-[45%]',
      }),
      El({
        element: 'div',
        classNAme:
          'border-4 border-solid border-white border-t-4	border-black rounded-full w-12 h-12 animate-spin absolute top[80%] left[45%]',
      }),
    ],
  });
};
