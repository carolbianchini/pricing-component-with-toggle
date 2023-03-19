<h1>Componente de preços com alternância</h1>

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [O Que Aprendi](#o-que-aprendi)
- [Desenvolvimento Contínuo](#desenvolvimento-contínuo)
- [Recursos Úteis](#recursos-úteis)
- [Autor](#autor)

## Descrição do Projeto 

O projeto trata-se de um componente de preços com um toggle que lhe possibilita a alternância de visualização do proço mensal e anual



## Tecnologias Utilizadas

`HTML`
`CSS`
`Javascript`
`Flexbox`

### O Que Aprendi

Ao realizar este projeto desenvolvi bastante meus conhecimentos em manipulação dos itens na tela como criar um toggle e manipula-lo.

Segue exemplo, trechos dos códigos abaixo: 

HTML
```html
    <div class="toggle-btn">
        <input onclick="clicado()" type="checkbox" id="toggle-btn1" class="checkbox">
        <label  for="toggle-btn1" class="check"></label>
    </div>
```
CSS
```css
  .toggle-btn input:checked + label:before {
    left: 25px;
}
```
### Desenvolvimento Contínuo

Para próximos projetos irei focar mais em Javascript. 

### Recursos Úteis

- [Vídeo - Como criar um Toggle](https://youtu.be/aoLS7keZF44) - Este vídeo ensina de maneira prática como criar um toggle, me ajudou muito a desenvolver esse elemento. 

## Autor

- Linkedin - [Ana Carolina Bianchini](https://www.linkedin.com/in/ana-carolina-bianchini-desenvolvedora-front-end/)
