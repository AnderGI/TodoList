export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);
//div.showMore || button.deleteBtn
export const getDOMTodoFromElement = (element) =>
  element.parentElement.parentElement;
//button.expandContent || button.deleteContent
//dialog will have hader main footer > buttons
export const getDialogFromChild = (child) => child.parentElement.parentElement;
export const getTodoDivFromBtn = (btn) => btn.parentElement.parentElement;
