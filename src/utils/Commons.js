export const showAlert = (message, className) => {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
  
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".chula");
  
    container.insertBefore(div, main);
  
    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  };


  export const showAlertMixes = (message, className) => {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
  
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".espacioAlert");
  
    container.insertBefore(div, main);
  
    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  };
