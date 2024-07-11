import { renderProducts } from '../../components/Home/my cart/renderproduct';
import { pageMostPopular } from '../../pages/pageMostPopular/pageMostPopular';
import { El } from '../../utils/el';
import { brandsBtns } from '../../widget/brandsBtns/brandsBtns';
import { sliderBtns } from '../../widget/sliderBtns/sliderBtns';
import { wishList } from '../../widget/wishlist';
import { footer } from '../footer page/footer';

export const homePage = () => {
  function selectSearch() {
    window.location.href = '/searchsc';
  }
  return El({
    element: 'div',
    className: 'w-[428px]',
    children: [
      El({
        element: 'div',
        className: 'flex justify-between ',
        children: [
          El({
            element: 'div',
            className: 'flex flex-row m-3 ',
            children: [
              El({
                element: 'img',
                src: './src/assets/images/moayad.jpg',
                className: 'rounded-full h-[70px] w-[70px]',
              }),
              El({
                element: 'div',
                className: 'flex flex-col ml-2',
                children: [
                  El({
                    element: 'span',
                    innerText: 'Good Morning👋',
                    className: 'text-slate-400',
                  }),
                  El({
                    element: 'span',
                    innerText: 'Moayad Zanganeh',
                    className: 'font-bold',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-row mr-5 mt-5',
            children: [
              El({
                element: 'span',
                className: 'icon-[clarity--notification-line] mr-2',
              }),
              El({
                element: 'span',
                className: 'icon-[ph--heart]',
                onclick: wishList,
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'relative',
        children: [
          El({
            element: 'input',
            onkeyup: selectSearch,
            ttpe: 'search',
            className: 'w-[90%] bg-gray-200 ml-5 p-2 rounded-md px-9',
            restAttrs: {
              placeholder: 'search',
            },
          }),
          El({
            element: 'span',
            className: 'icon-[bi--search] absolute left-8 top-3',
          }),
        ],
      }),
      brandsBtns(),
      El({
        element: 'div',
        className: 'flex justify-between  w-[85%] ml-7',
        children: [
          El({
            element: 'span',
            innerText: 'Most Popular',
            className: 'font-bold',
            onclick: pageMostPopular,
          }),
          El({
            element: 'span',
            innerText: 'See All',
            className: 'font-bold',
          }),
        ],
      }),
      sliderBtns(),
      // shopList(),
      El({
        element: 'div',
        id: 'divrenderproducts',
        children: [renderProducts('all')],
      }),
      footer(
        'icon-[ion--home-sharp]',
        'icon-[uil--cart]',
        'icon-[icon-park-outline--shopping]',
        'icon-[bi--wallet2]',
        'icon-[iconamoon--profile-thin]'
      ),
    ],
  });
};
