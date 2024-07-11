import { debounce } from 'lodash';
import { El } from '../../utils/el';
import { textAndIcon } from './textAndIcon';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { renderLocal } from './renderLocal';
import { renderApi } from './renderApi';

export function inputSearch() {
  function searching(e) {
    let searchUser = document.getElementById('searching').value;
    let divNotFound = document.getElementById('divnotfound');
    const renderTime = document.getElementById('renderTime');
    const divRenderApi = document.getElementById('renderApi');
    // const resultsAndFound = document.getElementById('headerSearchApi');
    // const divRecentAndclearAll = document.getElementById(
    //   'divrecentAndclearAll'
    // );
    if (searchUser == '') {
      renderTime.innerHTML = '';
      renderTime.classList.remove('hidden');
      renderTime.append(...renderLocal());
      divRenderApi.classList.add('hidden');
      //   renderApi();
    } else if (searchUser) {
      divRenderApi.classList.remove('hidden');
      //   renderTime.innerHTML = '';
      //   resultsAndFound.classList.remove('hidden');
      //   divRecentAndclearAll.classList.add('hidden');
      renderTime.classList.add('hidden');
      renderApi();
      console.log(renderTime);
      divNotFound.classList.add('hidden');
      //   document.body.append(textAndIcon(searchUser));
      setLocalStorage('searching', [
        searchUser,
        ...getLocalStorage('searching'),
      ]);
      //   document.getElementById('searching').value = '';
      //   renderTime.innerHTML = '';
      renderTime.append(...renderLocal());
      console.log(renderLocal());
    }
  }

  return El({
    element: 'div',
    className: '',
    children: [
      El({
        onkeyup: debounce(searching, 1000),
        element: 'input',
        id: 'searching',
        ttpe: 'search',
        className:
          'w-[90%] bg-white border-2 border-black ml-5 p-2 rounded-xl px-9',
        restAttrs: {
          placeholder: 'search',
        },
      }),
      El({
        element: 'span',
        className: 'icon-[bi--search] absolute left-8 top-3',
      }),
    ],
  });
}
