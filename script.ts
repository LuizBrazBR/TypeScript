// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

 interface Window {
  UserData: {}
}

interface UserData {
  nome: string;
  email: string;
  cpf: string;
}

const UserData = window.localStorage.getItem('UserData')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const cpf = document.querySelector('#cpf')



if(UserData && UserData !== null ) {
  const json = JSON.parse(UserData)
  if (isUserData(json) ) {

    window.UserData = json

    if(nome instanceof HTMLInputElement && email instanceof HTMLInputElement && cpf  instanceof HTMLInputElement) {

      nome.value = json.nome || ''
      email.value = json.email || ''
      cpf.value = json.cpf || ''

    }


  }
  
}

function isUserData (value:object): value is UserData {
return (
!!value &&
typeof value === 'object' &&
'nome' in value ||
'email' in value ||
'cpf'in value
  );
}


function handleForm(e: KeyboardEvent) {
 const {target } = e

  if(target instanceof HTMLInputElement) {
  
      const value = target.value
      const id = target.id
      
        window.UserData = {
              ...window.UserData,
              [id]: value
          }
  }

 

    localStorage.setItem('UserData', JSON.stringify(window.UserData) )
 

}








const form = document.querySelector('#form')



if(form && form instanceof HTMLElement) {

  form.addEventListener('keyup', handleForm)
}

