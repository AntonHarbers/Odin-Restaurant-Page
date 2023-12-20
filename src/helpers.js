function CreateDiv(className, textContent = '') {
  const div = document.createElement('div');
  div.classList.add(className);
  div.textContent = textContent;
  return div;
}

function CreateImage(className, src) {
  const image = new Image();
  image.src = src;
  image.classList.add(className);
  return image;
}

function CreateForm(className) {
  const form = document.createElement('form');
  form.classList.add(className);
  return form;
}

function CreateInput(className, type, placeholder) {
  const input = document.createElement('input');
  input.classList.add(className);
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

function CreateTextArea(className, placeholder) {
  const textArea = document.createElement('textarea');
  textArea.classList.add(className);
  textArea.placeholder = placeholder;
  return textArea;
}

function CreateButton(className, textContent, onClick = () => {}) {
  const button = document.createElement('button');
  button.classList.add(className);
  button.textContent = textContent;
  button.addEventListener('click', onClick);
  return button;
}

function AppendChildrenToElement(parent, childrenArray) {
  childrenArray.forEach((child) => {
    parent.appendChild(child);
  });
}

function CreateNav(className = 'navbar') {
  const nav = document.createElement('nav');
  nav.classList.add(className);
  return nav;
}

export {
  CreateNav,
  AppendChildrenToElement,
  CreateButton,
  CreateDiv,
  CreateImage,
  CreateForm,
  CreateInput,
  CreateTextArea,
};
