import { El } from '../../utils/el';

export function resultsAndFound() {
  let inputSearch = document.getElementById('searching').value;
  return El({
    element: 'div',
    className: '',
    children: [
      El({
        element: 'div',
        className: 'flex justify-between w-[90%] mx-5 my-5',
        id: 'headerSearchApi',
        children: [
          El({
            element: 'p',
            innerText: `Result "${inputSearch}"`,
            className: 'font-bold text-lg',
          }),
          El({
            element: 'p',
            innerText: '',
            id: 'found',
            className: 'font-bold text-lg',
            onclick: ClearAll,
          }),
        ],
      }),
    ],
  });
}
