import { getUser } from '../../api/get/getUser';
import { El } from '../../utils/el';

export const login = () => {
  return El({
    element: 'div',
    className: 'w-[428px] h-[926px]',
    children: [
      El({
        element: 'span',
        className: 'icon-[formkit--arrowleft] m-5',
      }),
      El({
        element: 'img',
        src: './src/assets/images/login.svg',
        className: 'item-center m-auto my-20',
      }),
      El({
        element: 'div',
        className: 'flex flex-col items-center w-full',
        children: [
          El({
            element: 'h2',
            innerText: 'Login to Your Account',
            className: 'text-4xl font-semibold mb-5',
          }),
          El({
            element: 'div',
            children: [
              El({
                element: 'input',
                type: 'email',
                id: 'inputEmail',
                restAttrs: {
                  placeholder: 'Email',
                },
                className:
                  'p-2 px-7 w-[380px] h-[37px] bg-gray-200 my-5 relative bottom-[1.9rem]',
              }),
              El({
                element: 'span',
                className:
                  'icon-[ic--baseline-email] absolute left-6 bg-gray-600 mx-2',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'relative -my-7',
            children: [
              El({
                element: 'input',
                type: 'password',
                id: 'inputPassword',
                className: 'p-2 w-[380px] h-[37px] bg-gray-200 px-7 -my-1',
                restAttrs: {
                  placeholder: 'password',
                },
              }),
              El({
                element: 'span',
                className:
                  'icon-[teenyicons--lock-solid] absolute left-2 top-2 bg-gray-600',
              }),
              El({
                element: 'span',
                className:
                  'icon-[carbon--view-off-filled] absolute bg-gray-600 -ml-7 mt-2',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'my-10',
            children: [
              El({
                element: 'input',
                type: 'checkbox',
                className: 'mx-2',
              }),
              El({
                element: 'span',
                innerText: 'Remember me',
                className: 'my-5',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'button',
        innerText: 'Sign In',
        className:
          'w-[90%] item-center absolute bottom-12 bg-[#212529] py-3 rounded-full mx-5 text-white',
        id: 'btn-singin',
        onclick: btnSingIn,
      }),
    ],
  });
  function btnSingIn(e) {
    e.preventDefault();
    getUser().then((data) => {
      const inputEmail = document.getElementById('inputEmail');
      const inputPassword = document.getElementById('inputPassword');
      console.log(data);
      console.log(
        inputEmail.value == '' && inputPassword.value == '',
        inputEmail.value !== data[0].email &&
          inputPassword.value !== data[0].password
      );
      console.log(inputEmail.value, data[0].email);
      console.log(inputPassword.value, data[0].password);

      if (
        (inputEmail.value == '' && inputPassword.value == '') ||
        inputEmail.value !== data[0].email ||
        inputPassword.value !== data[0].password
      ) {
        console.log(inputEmail, inputPassword);
        inputEmail.style.border = '2px solid red';
        inputPassword.style.border = '2px solid red';
      } else {
        window.location.href = 'homePage';
      }
    });
  }
};
