document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
    document.getElementById('menu-toggle').ariaExpanded = document.getElementById('menu-toggle').ariaExpanded == "true" ? "false" : true;
});

/* O que esse código faz?
1. document.getElementById('menu-toggle') -> Seleciona o botão (ou ícone) de menu com o ID menu-toggle.
2. .addEventListener('click', function() {...}) -> Adiciona um ouvinte de evento para escutar cliques nesse botão. Quando ele for clicado, a função dentro
será executada.
3. document.getElementById('nav-links').classList.toggle('active') -> Alterna a classe active no elemento com ID nav-links. Isso geralmente serve para
mostrar ou esconder o menu, alterando o estilo com CSS. Se a classe estiver presente, ela é removida; se não estiver, ela é adicionada.
4. ariaExpanded -> Isso faz parte da acessibilidade (ARIA = Accessible Rich Internet Applications) -> O atributo aria-expanded diz para leitores de tela
se um elemento está expandido (true) ou colapsado (false). */