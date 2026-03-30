// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

//Sempre tipar o querySelector quando for usar eventos específicos
//O método addEventListener usa mapas de eventos baseados no tipo do elemento:
// Element → eventos básicos (limitado)
// HTMLElement / HTMLButtonElement → eventos completos (inclui pointerdown)
const menuBtn = document.querySelector<HTMLElement>('#btn-mobile')
const navMenu = document.querySelector<HTMLElement>('#nav')

function handlePointer(e: PointerEvent) {
    e.preventDefault()
    const currentTarget = e.currentTarget as HTMLElement
    navMenu?.classList.toggle('active')

    navMenu?.classList.contains('active') ?  currentTarget.ariaLabel = 'Fechar Menu' 
    : currentTarget.ariaLabel = 'Abrir Menu' 

    navMenu?.classList.contains('active') ? 
    currentTarget.ariaExpanded = "true" : currentTarget.ariaExpanded = "false" 
  

}

menuBtn?.addEventListener('pointerdown', handlePointer)


