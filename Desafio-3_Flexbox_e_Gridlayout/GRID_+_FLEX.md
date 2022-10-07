<h1>DESAFIO 3 - FLEXBOX e GRID LAYOUT</h1>
<h1>FlexBox</h1>
<h2><img src="https://ik.imagekit.io/3mfjmziiqmi/flexbox-css_taMitwvPNI9.png?updatedAt=1638276184670" style="width: 20%"></h2>

#### Explique o que é FlexBox:

- Flexbox é uma ferramenta (módulo) para facilitar o posicionamento/alinhamento de elementos de uma página no CSS3, levando em consideração o espaçamento restante e os itens de determinados elementos em uma dimensão.

#### Cite e explique cada propriedade do eixo principal:

- **flex-direction:** Altera a orientação do eixo principal, podendo ser row (linha) ou column (coluna) e com a opção de reverter a ordem dos elementos com reverse (reverter);

- **flex-wrap:** Adiciona quebra de linha ous de coluna (dependendo de onde estiver o eixo principal) sem ultrapassar o tamanho determinado de uma div;

- **flex-flow:** Propriedade que junta as funções das duas propriedades acima, **flex-direction** e **flex-wrap**;

- **justify-content:** Propriedade que define o alinhamento dos itens ao longo do eixo, trabalha em conjunto com os valores:
  - **flex-start:** Faz um alinhamento junto a borda de início do eixo principal;
  - **flex-end:** Faz um alinhamento junto a borda do fim do eixo principal;
  - **center:** Faz um alinhamento no centro relativo ao eixo principal;
  - **space-between:** Adiciona um espaçamento entre os itens, porém, retira os espaços nas bordas (start e end);
  - **space-around:** Adiciona um espaçamento entre os itens, incluindo entre as bordas e o elemento;
  - **space-evenly:** Adiciona um espaçamento entre os itens, distribuindo uniformemente entre todos os elementos e as bordas;
    Obs.:O espaço adicionado é a divisão do espaço que já existia no documento entre os elementos.

#### Cite e explique cada propriedade do eixo transversal:

- **align-items:** Propriedade que define o alinhamento dos itens de acordo com o eixo transversal, trabalha em conjunto com os valores:

  - **flex-start:** Faz um alinhamento junto a borda de início do eixo transversal;
  - **flex-end:** Faz um alinhamento junto a borda do fim do eixo transversal;
  - **center:** Faz um alinhamento no centro relativo ao eixo transversal;
  - **stretch:** Estica todo o conteúdo que está no eixo transversal;
  - **baseline:** Alinha o conteúdo no eixo transversal pegando como base a linha de texto.

- **align-content:** Ajusta o espaçamento sobressalnte no eixo transversal quando houver mais de um. Trabalha em conjunto com os valores:
  - **flex-start:** Alinha de acordo com o início do container;
  - **flex-end:** Alinha de acordo com o fim do container;
  - **center:** Faz um alinhamento no centro;
  - **space-between:** Adiciona um espaçamento entre os itens, porém, retira os espaços nas bordas (start e end);
  - **space-around:** Adiciona um espaçamento entre os itens, incluindo entre as bordas e o elemento;
  - **space-evenly:** Adiciona um espaçamento entre os itens, distribuindo uniformemente entre todos os elementos e as bordas;
  - **stretch:** Estica todo o conteúdo até ocupar todo o espaço vazio.

#### Explique o que é um Flex Container:

- Flex container é uma div criada que simula uma caixa ou container. Considerado como um elemento pai com a propriedade de display: flex;

#### Explique o que é um Flex Item:

- Flex item são as divs filhas da div container, onde serão incluídos os itens que fazem parte daquele container pai.

#### Como funciona o flex-wrap?

- O flex-wrap faz com que todo o conteúdo (item), não ultrapasse o tamanho do elemento pai (container). Ajustando como uma quebra de linha para que o mesmo caiba de acordo com as dimensões.

#### Como é feita a expansão, encolhimento e tamanho dos elementos flex?

- A expansão é feita conforme a propriedade:
  - **flex-grow:** Aumenta os elementos aproveitando todo o espaço do container, dividindo de acordo com seu valor de importância definido;
  - **flex-shrink:** Encolhe os elementos de forma equivalente, de acordo com o espaço do container;
  - **flex-basis:** Define o tamanho do elemento de acordo com o eixo principal; e
  - **flex:** Possibilita declarar todas as funções acima em uma única propriedade na seguinte ordem: grow > shrink > basis.

#### Como é feito o alinhamento, justificação e distribuição de espaço livre entre os elementos?

- O alinhamento é feito de acordo com os tamanhos dos elementos e a utilização da propriedade **justify-content**. Ela vai calcular o espaço restante e organizar de acordo com os comandos declarados (start, end, space-between, space-around e space-evenly.)

#### Com base nos conceitos aprendidos até aqui, crie um arquivo index_flexbox.html para criar um menu usando FlexBox como da figura abaixo:

<img src="https://ik.imagekit.io/3mfjmziiqmi/figura-flexbox1_1xqKmzwK6.png?updatedAt=1638275774522">

[Resposta](https://github.com/andmennos/trilhaFrontEnd/tree/main/Desafio-3/index_flexbox)

#### Aproveitando o menu criado, crie um arquivo index_flexbox_resp.html e torne o menu responsivo como a figura abaixo:

<img src="https://ik.imagekit.io/3mfjmziiqmi/figura-responsivo_d3_IXPpFu.png?updatedAt=1638275774262">

[Resposta](https://github.com/andmennos/trilhaFrontEnd/tree/main/Desafio-3/index_flexbox_resp)

<h1>Grid Layout</h1>
<h2><img src="https://ik.imagekit.io/3mfjmziiqmi/grid-css_ycjM5u5xNpT.png?updatedAt=1638276323966" style="width: 20%"></h2>

#### Explique o que é Grid Layout:

- Ferramenta criada para facilitar o processo de criação do layout de uma página em duas dimensões.

#### Cite e dê exemplos das propriedades do Grid Container:

- **display: grid:** Informa o tipo de display que a página terá;
- **grid-template-columns:** Define quantas colunas o grid terá e o quanto de espaço elas ocuparão na tela;
- **grid-template-rows:** Define quantas linhas o grid terá e o quanto de espaço elas ocuparão;
- **grid-column-start:** Informa onde determinado elemento irá começar, levando em consideração as boardas das colunas;
- **grid-column-end:** Informa onde determinado elemento irá terminar, levando em consideração as bordas das colunas;
- **grid-row-start:** Informa onde determinado elemento irá terminar, levando em consideração as bordas das linhas;
- **grid-row-end:** Informa onde determinado elemento irá terminar, levando em consideração as bordas das linhas;
- **grid-area:** Determina uma área no grid, levando em consideração os valores inseridos na ordem: row-start>column-start>row-end>column-end.
- **grid-gap:** Adiciona um espaço entre as linhas e depois nas colunas, de acordo com o valor determinado.

#### Cite e dê exemplos das propriedades do Grid Item:

- **justify-items: start:** Alinha os items no inicio da célula;
- **justify-items: end:** Alinha os itens no fim da célula;
- **justify-items: center:** Alinha os itens no centro da célula;
- **justify-items: stretch:** Estica os itens em horizontal;
- **align-items: start:** Alinha os itens no inicio da célula verticalmente;
- **align-items: end:** Alinha os itens no fim da célula verticalmente;
- **align-items: center:** Alinha os itens no centro da célula verticalmente;
- **align-items: stretch:** Estica os itens verticalmente até preencher toda a célula;
- **place-items:** Define o alinhamento em uma única declaração, horizontal e verticalmente.

#### O que é unidade fr?

- São fragmentos. Você pode determinar a quantidade de colunas que a página terá e quantos fragmentos do espaço total, cada parte terá.

#### O que é a notação repeat?

- Repete as determinações para as próximas colunas, por exemplo: grid-template-columns: repeat(10, 5%) Ele irá criar 10 colunas, fazendo com que cada uma ocupe 5% de espaço.

#### O que são as linhas do Grid?

- Linhas são as divisões adicionadas no eixo X (horizontal).

#### O que é uma célula no Grid?

- Célula é a menor unidade em grid, sendo o meio entre duas linhas de colunas e duas linhas de linhas.

#### O que são áreas do Grid?

- Junção de 1 ou mais células.

#### Crie um arquivo index_grid_exer.html e desenvolva uma tela com aparência da imagem abaixo:

<img src="https://ik.imagekit.io/3mfjmziiqmi/figura-grid1_8ilS8qNjm.png?updatedAt=1638393216795">

[resposta](https://github.com/andmennos/trilhaFrontEnd/tree/main/Desafio-3/index_grid_exer)

#### Aproveitando o menu criado no item i, crie um arquivo index_grid_exerc_resp.html e torne-o responsivo como da figura 5.

<img src="https://ik.imagekit.io/3mfjmziiqmi/figura-grid_8K-salnff.png?updatedAt=1638275839903">

[resposta](https://github.com/andmennos/trilhaFrontEnd/tree/main/Desafio-3/index_grid_exer_resp)
