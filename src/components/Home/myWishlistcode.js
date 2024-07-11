import { El } from '../../utils/el';
import { headerBrandHomes } from '../../widget/headerBrandHomes';
import { sliderBtns } from '../../widget/sliderBtns/sliderBtns';
import { wishList } from '../../widget/wishlist';

export function myWishListcode() {
  return El({
    element: 'div',
    className: '',
    children: [
      El({
        element: 'div',
        className: 'flex flex row',
        children: [
          headerBrandHomes('My Wishlist'),
          El({
            element: 'span',
            className: 'icon-[bi--search] mt-6 mr-5 w-6 h-6',
          }),
        ],
      }),
      sliderBtns(),
      El({
        element: 'div',
        className: 'flex flex-wrap',
        children: [
          wishList(),
          wishList(),
          wishList(),
          wishList(),
          wishList(),
          wishList(),
        ],
      }),
    ],
  });
}
