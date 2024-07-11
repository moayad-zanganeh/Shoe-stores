import { El } from '../../utils/el';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

export function textAndIcon(textUser) {
  function deleteData(e) {
    const divData = e.target.closest('#divdata').children[0].innerText;
    const getLocal = getLocalStorage('searching');
    const newData = getLocal.filter((item) => item !== divData);
    setLocalStorage('searching', newData);
  }
  return El({
    element: 'div',
    className: 'flex justify-between w-[90%] mx-5 my-7 relative',
    id: 'divdata',
    children: [
      El({
        element: 'p',
        innerText: textUser,
        className: 'text-gray-400',
      }),
      El({
        element: 'button',
        className:
          'border-2 border-gray-500 w-7 h-7 rounded-xl absolute right-0',
        children: [
          El({
            element: 'span',
            className: 'icon-[iwwa--delete] text-gray-400 my-1 text-center ',
            onclick: deleteData,
          }),
        ],
      }),
    ],
  });
}
