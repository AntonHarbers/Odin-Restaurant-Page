import {content} from './index.js';
import Phone from './images/phone.png'
import Email from './images/email.png'

export default function LoadAbout(){

    const headline = document.createElement('div');
    headline.textContent = 'About Us';
    headline.classList.add('headline');

    const phoneNumberDiv = document.createElement('div');
    phoneNumberDiv.classList.add('phoneNumberDiv');

    const phoneIcon = new Image();
    phoneIcon.src = Phone;
    phoneIcon.classList.add('phoneIcon');
    phoneNumberDiv.appendChild(phoneIcon);

    const phoneNumber = document.createElement('div');
    phoneNumber.textContent = '555-555-5555';
    phoneNumber.classList.add('phoneNumber');
    phoneNumberDiv.appendChild(phoneNumber);

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('email-div');

    const emailIcon = new Image();
    emailIcon.src = Email;
    emailIcon.classList.add('email-icon');

    const email = document.createElement('div');
    email.textContent = 'vegantasties@gmail.com';
    email.classList.add('email');

    emailDiv.appendChild(emailIcon);
    emailDiv.appendChild(email);

    // create a contact form with a name, email, and message field
    const form = document.createElement('form');
    form.classList.add('contact-form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';
    nameInput.classList.add('name-input');
    form.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.placeholder = 'Email';
    emailInput.classList.add('email-input');
    form.appendChild(emailInput);

    const messageInput = document.createElement('textarea');
    messageInput.placeholder = 'Message';
    messageInput.classList.add('message-input');
    form.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('submit-button');
    form.appendChild(submitButton);

    const copy = document.createElement('div');
    copy.textContent = '© 2023 Vegan Tasties';
    copy.classList.add('footer');

    content.appendChild(headline);
    content.appendChild(phoneNumberDiv);
    content.appendChild(emailDiv);
    content.appendChild(form);
    content.append(copy)
}