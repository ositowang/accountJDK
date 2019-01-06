import '../common/polyfill';
import bindEvent from './event';
import render from './render';

/**
 * Login entry function which receives an object as configuration and bind
 * login components with events binded and styles
 *
 * @param {Object} opts - login configuration(default to empty object)
 * @param {HTMLElement} opts.container - container to hold the login component
 */
const login = (opts={}) => {
  const defaultOptions = {
    container: document.getElementById('login-container'),
    autoComplete: false,
    loginBtnText: 'Log In',
    usernameLabel: '',
    passwordLabel: '',
    usernamePlaceHolder: 'Mobile/Email/Account',
    passwordPlaceholder: 'Please enter your password',
  };
  const options = Object.assign(defaultOptions, opts);
  render(options);
  bindEvent(options);
};

export { login };
