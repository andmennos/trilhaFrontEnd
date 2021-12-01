<h1>DESAFIO 3 - FLEXBOX e GRID LAYOUT</h1>
<h1>FlexBox</h1>
<h2><img src="https://ik.imagekit.io/3mfjmziiqmi/flexbox-css_taMitwvPNI9.png?updatedAt=1638276184670" style="width: 50%"></h2>

#### Explique o que é FlexBox:

- Flexbox é uma ferramenta (módulo) para facilitar o posicionamento/alinhamento de elementos de uma página no CSS3.

#### Cite e explique cada propriedade do eixo principal:

- **flex-direction:** Altera a orientação do eixo principal, podendo ser row (linha) ou column (coluna) e com a opção de reverter a ordem dos elementos com reverse (reverter);

- **flex-wrap:** Adiciona quebra de linha ou de coluna (dependendo de onde estiver o eixo principal) sem ultrapassar o tamanho determinado de uma div;

- **flex-flow:** Propriedade que junta as funções das duas propriedades acima, **flex-direction** e **flex-wrap**;

- **justify-content:** Propriedade que define o alinhamento dos itens ao longo do eixo, trabalha em conjunto com os valores:
    **flex-start:** Faz um alinhamento junto a borda de início do eixo principal;
    **flex-end:** Faz um alinhamento junto a borda do fim do eixo principal;
    **center:** Faz um alinhamento no centro relativo ao eixo principal;
    **space-between:** Adiciona um espaçamento entre os itens, porém, retira os espaços nas bordas (start e end);
    **space-around:** Adiciona um espaçamento entre os itens, incluindo entre as bordas e o elemento;
    **space-evenly:** Adiciona um espaçamento entre os itens, distribuindo uniformemente entre todos os elementos e as bordas;
        Obs.:O espaço adicionado é a divisão do espaço que já existia no documento entre os elementos.


#### Cite e explique cada propriedade do eixo transversal:

- **align-items:** Propriedade que define o alinhamento dos itens de acordo com o eixo transversal, trabalha em conjunto com os valores:
    **flex-start:** Faz um alinhamento junto a borda de início do eixo transversal;
    **flex-end:** Faz um alinhamento junto a borda do fim do eixo transversal;
    **center:** Faz um alinhamento no centro relativo ao eixo transversal;
    **stretch:** Estica todo o conteúdo que está no eixo transversal;
    **baseline:** Alinha o conteúdo no eixo transversal pegando como base a linha de texto.

- **align-content:** Ajusta o espaçamento sobressalnte no eixo transversal quando houver mais de um. Trabalha em conjunto com os valores:
    **flex-start:** Alinha de acordo com o início do container;
    **flex-end:**  Alinha de acordo com o fim do container;
    **center:** Faz um alinhamento no centro;
    **space-between:** Adiciona um espaçamento entre os itens, porém, retira os espaços nas bordas (start e end);
    **space-around:** Adiciona um espaçamento entre os itens, incluindo entre as bordas e o elemento;
    **space-evenly:** Adiciona um espaçamento entre os itens, distribuindo uniformemente entre todos os elementos e as bordas;
    **stretch:** Estica todo o conteúdo até ocupar todo o espaço vazio.

#### Explique o que é um Flex Container:

- Flex container é uma div criada que simula uma caixa ou container. Considerado como um elemento pai com a propriedade de display: flex;

#### Explique o que é um Flex Item:

- Flex item são as divs filhas da div container, onde serão incluídos os itens que fazem parte daquele container pai.

#### Como funciona o flex-wrap?

- O flex-wrap faz com que todo o conteúdo (item), não ultrapasse o tamanho do elemento pai (container). Ajustando como uma quebra de linha para que o mesmo caiba de acordo com as dimensões.

#### Como é feita a expansão, encolhimento e tamanho dos elementos flex?

- A expansão é feita conforme a propriedade:
    **flex-grow:** Aumenta os elementos aproveitando todo o espaço do container, dividindo de acordo com seu valor de importância definido;
    **flex-shrink:** Encolhe os elementos de forma equivalente, de acordo com o espaço do container;
    **flex-basis:** Define o tamanho do elemento de acordo com o eixo principal; e
    **flex:** Possibilita declarar todas as funções acima em uma única propriedade na seguinte ordem: grow > shrink > basis.

#### Como é feito o alinhamento, justificação e distribuição de espaço livre entre os elementos?

- O alinhamento é feito de acordo com os tamanhos dos elementos e a utilização da propriedade **justify-content**. Ela vai calcular o espaço restante e organizar de acordo com os comandos declarados (start, end, space-between, space-around e space-evenly.)

#### Com base nos conceitos aprendidos até aqui, crie um arquivo index_flexbox.html para criar um menu usando FlexBox como da figura abaixo:

<img src="https://ik.imagekit.io/3mfjmziiqmi/figura-flexbox1_1xqKmzwK6.png?updatedAt=1638275774522">

#### Aproveitando o menu criado, crie um arquivo index_flexbox_resp.html e torne o menu responsivo como a figura abaixo:

<img src="https://ik.imagekit.io/3mfjmziiqmi/figura-responsivo_d3_IXPpFu.png?updatedAt=1638275774262">

<h1>Grid Layout</h1>
<h2><img src="https://ik.imagekit.io/3mfjmziiqmi/grid-css_ycjM5u5xNpT.png?updatedAt=1638276323966" style="width: 50%"></h2>

#### Explique o que é Grid Layout:

#### Cite e dê exemplos das propriedades do Grid Container:

#### Cite e dê exemplos das propriedades do Grid Item:

#### O que é unidade fr?

#### O que é a notação repeat?

#### O que são as linhas do Grid?

#### O que é uma célula no Grid?

#### O que são áreas do Grid?

#### Crie um arquivo index_grid_exer.html e desenvolva uma tela com aparência da imagem abaixo:

<img src="https://ik.imagekit.io/3mfjmziiqmi/figura-grid_8K-salnff.png?updatedAt=1638275839903">