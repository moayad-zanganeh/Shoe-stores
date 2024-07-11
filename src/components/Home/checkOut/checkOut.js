import { El } from '../../../utils/el';
import { checkOutCode } from '../../../widget/checkOutCode/checkOutCode';
import { headerBrandHomes } from '../../../widget/headerBrandHomes';

export function checkOut() {
  return El({
    element: 'div',
    className: 'bg-[#f5deb31f]',
    children: [
      El({
        element: 'div',
        className: 'flex items-center mb-5',
        children: [
          headerBrandHomes('Checkout'),
          El({
            element: 'span',
            className: 'icon-[icon-park-outline--more-two] w-6 h-6 mr-5 mt-5',
          }),
        ],
      }),
      El({
        element: 'p',
        innerText: 'Shipping Address',
        className: 'ml-8 font-bold',
      }),
      El({
        element: 'div',
        className: ' flex items-center mx-10 bg-white rounded-lg h-24',
        children: [
          El({
            element: 'button',
            className: 'bg-gray-200 p-3 rounded-full ml-5',
            children: [
              El({
                element: 'span',
                className:
                  'icon-[healthicons--geo-location-negative] rounded-full text-3xl',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'ml-3',
            children: [
              El({
                element: 'p',
                className: 'font-bold text-lg',
                innerText: 'Home',
              }),
              El({
                element: 'span',
                className: '',
                innerText: '61480 Sunbrook Park, PC 5679',
              }),
            ],
          }),
          El({
            element: 'span',
            className:
              'icon-[material-symbols--border-color-sharp] absolute right-10',
          }),
        ],
      }),
      El({
        element: 'hr',
        className: 'w-[85%] text-gray-200 ml-8',
      }),
      El({
        element: 'p',
        innerText: 'Order List',
        className: 'ml-8 my-5 font-bold',
      }),
      checkOutCode(),
      checkOutCode(),
      checkOutCode(),
      checkOutCode(),
      El({
        element: 'hr',
        className: 'w-[85%] text-gray-200 ml-8',
      }),
      El({
        element: 'p',
        innerText: 'Choose Shipping',
        className: 'font-bold ml-8 my-5',
      }),
      El({
        element: 'div',
        className:
          'flex items-center bg-white p-7 mx-7 w-[85%] rounded-lg relative',
        children: [
          El({
            element: 'span',
            className: 'icon-[eva--car-fill] text-3xl',
          }),
          El({
            element: 'p',
            innerText: 'Choose Shipping Type',
            className: 'font-bold mx-5',
          }),
          El({
            element: 'span',
            className: 'icon-[ep--arrow-right] absolute right-5',
          }),
        ],
      }),
      El({
        element: 'hr',
        className: 'w-[85%] text-gray-200 ml-8 my-5',
      }),
      El({
        element: 'div',
        className: 'ml-7',
        children: [
          El({
            element: 'p',
            innerText: 'Promo Code',
            className: 'font-bold mb-3',
          }),
          El({
            element: 'div',
            className: 'flex',
            children: [
              El({
                element: 'input',
                className: 'bg-gray-200 p-2 w-[70%] rounded-lg h-14',
                type: 'text',
                restAttrs: {
                  placeholder: 'Enter Promo Code',
                },
              }),
              El({
                element: 'button',
                innerText: '+',
                className:
                  ' runded-full text-center bg-black w-14 h-14 ml-5 text-white text-3xl text-center rounded-full pb-1',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'bg-white w-[83%] m-7 rounded-lg',
        children: [
          El({
            element: 'div',
            className: 'p-3 flex justify-between',
            children: [
              El({
                element: 'span',
                className: '',
                innerText: 'Amount',
              }),
              El({
                element: 'span',
                innerText: '$585.00',
                className: '',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'p-3 flex justify-between',
            children: [
              El({
                element: 'span',
                className: '',
                innerText: 'Shipping',
              }),
              El({
                element: 'span',
                innerText: '-',
                className: '',
              }),
            ],
          }),
          El({
            element: 'hr',
            className: 'w-[85%] text-gray-200 ml-8 my-2',
          }),
          El({
            element: 'div',
            className: 'p-3 pb-5 flex justify-between',
            children: [
              El({
                element: 'span',
                className: '',
                innerText: 'Total',
              }),
              El({
                element: 'span',
                innerText: '$585.00',
                className: '',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: ' bg-white p-5 rounded-t-lg',
        children: [
          El({
            element: 'div',
            className: 'relative',
            children: [
              El({
                element: 'button',
                className: 'bg-black text-white w-[90%] mx-5 rounded-full p-5',
                innerText: 'Continue to Payment ',
              }),
              El({
                element: 'div',
                className: 'mx-5 absolute right-10 text-white bottom-5 ',
                children: [
                  El({
                    element: 'span',
                    innerText: '-',
                    className: 'w-5 h-5',
                  }),
                  El({
                    element: 'span',
                    className: 'icon-[eva--arrow-right-fill] w-5 h-5 -mb-1',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
