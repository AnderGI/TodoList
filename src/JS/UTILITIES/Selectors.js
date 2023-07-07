export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);
//div.showMore || button.deleteBtn
export const getDOMTodoFromElement = (element) =>
  element.parentElement.parentElement;
//button.expandContent || button.deleteContent
export getDOMProjectFromElement = (element) => element.parentElement.parentElement.parentElement;