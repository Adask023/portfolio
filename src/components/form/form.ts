import { loadTemplate } from "../../util/LoadTemplate";

const handleFormSubmitting = (element: HTMLDivElement) => {
  interface Isend {
    name: string;
    email: string;
    message: string;
  }
  const form = element.querySelector("#form");
  const name: HTMLInputElement = element.querySelector("#form-name");
  const email: HTMLInputElement = element.querySelector("#form-email");
  const message: HTMLInputElement = element.querySelector("#form-message");
  const formErorrs: HTMLInputElement = element.querySelector("#form-errors");
  const formSend: HTMLInputElement = element.querySelector("#form-send");

  const regExValidate = (mail: string): Boolean => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (emailRegex.test(mail)) return true;
    else return false;
  };

  const reset = () => {
    name.value = "";
    email.value = "";
    message.value = "";
  };

  const send = ({ name, email, message }: Isend) => {
    console.log("Form values:");
    console.log(`${name}, ${email}, ${message}`);
    formSend.innerText = "Email sent";
    setTimeout(() => {
      formSend.innerHTML = "";
    }, 4000);
  };
console.log('s')
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formErorrs.innerText = "";
    formSend.innerText = "";

    const errors: string[] = [];

    if (name.value.length < 3) {
      errors.push("Name field must contains at least 2 characters");
    }

    if (!regExValidate(email.value)) {
      errors.push("Email is not valid");
    }

    if (message.value.length < 4) {
      errors.push("Message field must contains at least 4 characters");
    }
    if (errors.length > 0) {
      formErorrs.innerText = errors.join(" \r\n");
    } else {
      const formValues = {
        name: name.value,
        email: email.value,
        message: message.value,
      };

      send(formValues);
      reset();
    }
  });
};

export const form = () => {
  const htmlString = require("./form-static.html");
  const element = loadTemplate(htmlString);

  handleFormSubmitting(element);

  return element;
};
