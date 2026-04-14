window.UserData = {};

// 1 - Crie uma interface UserData para o formulário abaixo
interface UserData {
  nome: string;
  email: string;
  cpf: string;
}

// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
interface Window {
  UserData: unknown;
}

// 3 - Adicione um evento de keyup ao formulário
const form = document.querySelector("#form");
if (form && form instanceof HTMLElement) {
  form.addEventListener("keyup", handleForm);
}

// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
function handleForm(e: KeyboardEvent) {
  const { target } = e;
  if (target instanceof HTMLInputElement) {
    const value = target.value;
    const id = target.id;
    console.log(typeof window.UserData);
    if (typeof window.UserData === "object") {
      window.UserData = {
        ...window.UserData,
        [id]: value,
      };
    }
  }
  // 5 - Salve UserData no localStorage
  localStorage.setItem("UserData", JSON.stringify(window.UserData));
}

// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
function isUserData(value: object): value is UserData {
  return (
    !!value &&
    typeof value === "object" &&
    ("nome" in value || "email" in value || "cpf" in value)
  );
}

// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
const UserData = window.localStorage.getItem("UserData");
if (UserData && UserData !== null) {
  const json = JSON.parse(UserData);
  if (isUserData(json)) {
    window.UserData = json;
    Object.entries(json).forEach(([key, value]) => {
      const input = document.querySelector(`#${key}`);
      if (input instanceof HTMLInputElement) {
        input.value = value;
      }
    });
  }
}
