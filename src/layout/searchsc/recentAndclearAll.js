import { El } from '../../utils/el';
import { setLocalStorage } from '../../utils/localStorage';
import { renderLocal } from './renderLocal';

export function recentAndclearAll() {
  function ClearAll() {
    const renderTime = document.getElementById('renderTime');
    setLocalStorage('searching', []);
    renderTime.innerHTML = '';
    renderTime.append(...renderLocal());
  }
  return El({
    element: 'div',
    className: '',
    children: [
      El({
        element: 'div',
        className: 'flex justify-between w-[90%] mx-5 my-5',
        id: 'divrecentAndclearAll',
        children: [
          El({
            element: 'p',
            innerText: 'Recent',
            id: 'recent',
            className: 'font-bold text-lg',
          }),
          El({
            element: 'p',
            innerText: 'Clear All',
            id: 'clearall',
            className: 'font-bold text-lg',
            onclick: ClearAll,
          }),
        ],
      }),
    ],
  });
}
