import { debounce } from 'lodash';
import { El } from '../../utils/el';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { textAndIcon } from './textAndIcon';
import { recentAndclearAll } from './recentAndclearAll';
import { notFound } from './notFound';
import { inputSearch } from './inputsearch';
import { renderLocal } from './renderLocal';

export function searchsc() {
  return El({
    element: 'div',
    className: 'relative mt-5',
    children: [
      inputSearch(),
      recentAndclearAll(),
      El({
        element: 'div',
        className: '',
        id: 'renderTime',
      }),
      El({
        element: 'div',
        className: 'flex flex-wrap',
        id: 'renderApi',
      }),
      El({
        element: 'hr',
        className: 'w-[90%] mx-5 text-grey-300',
      }),
      notFound(),
    ],
  });
}
