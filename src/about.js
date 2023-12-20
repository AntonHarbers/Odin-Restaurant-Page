import { content } from './index.js';
import Phone from './images/phone.png';
import Email from './images/email.png';
import {
  CreateDiv,
  CreateImage,
  CreateForm,
  CreateInput,
  CreateTextArea,
  CreateButton,
  AppendChildrenToElement,
} from './helpers.js';

export default function LoadAbout() {
  const phoneNumberDiv = CreateDiv('phoneNumberDiv');
  AppendChildrenToElement(phoneNumberDiv, [
    CreateImage('phoneIcon', Phone),
    CreateDiv('phoneNumber', '555-555-5555'),
  ]);

  const emailDiv = CreateDiv('email-div');
  AppendChildrenToElement(emailDiv, [
    CreateImage('email-icon', Email),
    CreateDiv('email', 'vegantasties@gmail.com'),
  ]);

  const form = CreateForm('contact-form');
  AppendChildrenToElement(form, [
    CreateInput('name-input', 'text', 'Name'),
    CreateInput('email-input', 'text', 'Email'),
    CreateTextArea('message-input', 'Message'),
    CreateButton('submit-button', 'Submit'),
  ]);

  AppendChildrenToElement(content, [
    CreateDiv('headline', 'About Us'),
    phoneNumberDiv,
    emailDiv,
    form,
    CreateDiv('footer', '© 2023 Vegan Tasties'),
  ]);
}
