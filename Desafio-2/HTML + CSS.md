DESAFIO 2 HTML + CSS

<h1>HTML</h1>
<h2><img src="https://ik.imagekit.io/3mfjmziiqmi/html5_gLbNm6lYH.png?updatedAt=1638140965020" style="width:25%"></h2>


 #### Cite as principais tags HTML e para que servem respectivamente. Dê exemplos de situações reais de onde são usadas:

- **<'DOCTYPE>** Tag utilizada para informar a versão do html utilizada para o navegador.
É utilizada em toda criação de página, exemplo:
**<'!DOCTYPE html>**

- **<'html>** Tag de conteúdo, utilizada para informar o html que deve ser renderizado no navegador. 
Sendo necessário fecha-lá ao término: **<'html>  <'/html>**

- **<'head>** Tag utilizada para separar as informações que devem ser lidas para o navegador antes de exibir o conteúdo.

- **<'link>** Tag de informação, utilizada para criar um link de informação com outro arquivo. 
Podendo ser o arquivo de estilização (CSS) ou outro.

- **<'title>** Tag utilizada para definir o título da página.

- **<'body>** Tag utilizada para separar as informações de conteúdo da página que deve ser renderizado pelo navegador.

- **<'header>** Tag utilizada para informar ao navegador que tudo dentro dessa tag é um cabeçalho.

- **<'main>** Tag utilizada para separar de forma semântica as informações que fazem parte do corpo principal de uma página.

- **<'footer>** Tag utilizada para informar ao navegador que tudo dentro dessa tag é um rodapé.

- **<'div>** Tag utilizada para fazer a divisão em bloco das informações. 
Podemos utilizar essa divisão para estilizar todo um bloco de informação.

- **<'section>** Tag utilizada para separar as informações para o navegador em sessões. 
Para a divisão por conteúdo, mas que semânticamente faz sentido.

- **<'article>** Tag utilizada para separar informação do que é um artigo, conteúdo da página. 
Geralmente utilizado em fóruns, blogs ou páginas de noticias.

- **<'img>** Tag utilizada para inserir uma imagem na página, como banners e fotos de produtos.
Sempre indicando o endereço da imagem.

- **<'ul>** Tag de conteúdo utilizada para criar uma lista sem ordem definida. 
Quando não é necessário que os elementos de uma lista tenham uma ordem específica.

- **<'ol>** Tag de conteúdo utilizada para criar uma lista que possue uma ordem definida.

- **<'li>** Tag que marca o item de uma lista. Sendo identada com uma **<'ul>** ou **<'ol>**.

- **<'h>** Tag para utilização em títulos (heading). Se constitui de 6 níveis diferentes de títulos. São eles:
**<'h1>, <'h2>, <'h3>, <'h4>, <'h5>, <'h6>**.

- **<'p>** Tag utilizada para marcar parágrafos (paragraph). Utilizada na organização de textos


#### Explique com suas palavras a importância do HTML semântico:

Um HTML semântico ajuda o navegador a fazer leitura do código, entendendo a hierarquia do conteúdo. 
As tags semânticas informão para que serve a tag, fazendo com que o navegador não se force a descobrir sozinho, diminuindo a quantidade de dados utilizado e aumentando a velocidade de processamento.

#### Com base nos conceitos aprendidos no exercicio anterior, crie um arquivo index.html que siga o exemplo a seguir:

<h2><img src="https://ik.imagekit.io/3mfjmziiqmi/exemploTela_dj_b24C9e.png?updatedAt=1638023430193"></h2>

- [Resposta](https://github.com/andmennos/trilhaFrontEnd/blob/main/Desafio-2/index.html)


#### O que é acessibilidade em páginas web?

Acessibilidade em páginas web, é tornar o conteúdo e a interação da web acessível para pessoas com deficiência e/ou certas limitações.
O criador da página faz com que uma pessoa com deficiência tenha acesso ao conteúdo daquela página, independente se ela não enxerga, ou se possui daltonismo entre outras.
Incluir legendas para pessoas com deficiência auditiva, não criar referências apenas visuais, não utilizar apenas feedback visuais, adaptar para leitor de tela entre diversas outras tecnologias e boas práticas.

#### Quais são as boas práticas que devemos adotar ao construir uma página web para que ela seja acessível?

Podemos verificar em WCAG, Diretrizes de Acessibilidade para Conteúdo da Web. O documento define a forma de como tornar o conteúdo da web mais acessível para pessoas com deficiência.
Seguir também a padronização W3C World Wide Consortium.
Algumas das práticas são:
- Utilizar o atributo Alt em imagens, descrevendo todo seu conteúdo;
- Site responsivo, que possa ser utilizado em celulares, tablets e desktops;
- Não sublinhar textos que não possuam link;
- Evitar a utilização de popup;
- Não utilizar CAPTCHA com apenas imagens;
- Não apresentar informações apenas com cores; 
- Possibilitar navegação na página utilizando as teclas tab, shift-tab, return e esc; e
- Utilizar marcadores em listas.

#### Com base nos conceitos de acessibilidade, crie um arquivo index_acessibilidade.html e siga as especificações:

<h2><img src= "https://ik.imagekit.io/3mfjmziiqmi/exemploAcessibilidade_574eMXMq7.png?updatedAt=1638143006557"></h2>


- [Resposta](https://github.com/andmennos/trilhaFrontEnd/blob/main/Desafio-2/index_acessibilidade.html)

<h1>CSS</h1>
<h2><img src="https://ik.imagekit.io/3mfjmziiqmi/css3_BymCYK0tl1B.png?updatedAt=1638140975887"style="width:25%"></h2>

#### Explique com suas palavras a importância do CSS:
Como todo o HTML serve para criar a estrutura de uma página, o CSS irá funcionar como parte externa, visual, o estilo de uma página web.
Toda a parte estética de uma página é feita com CSS, fazendo com que a página criada seja mais atrativa, melhorando a experiência do usuário e sua usabilidade.
É criada em um arquivo diferente do HTML e pode ser aplicada em mais de uma página.
Separando as funções, também temos a melhoria no tempo de processamento de uma página.


#### Explique a diferença entre class e id:
- **id:** Dentro de um HTML só se pode ter um elemento com id. 
O id é único, é identificada com # dentro de um arquivo de estilo e está no topo da hierarquia entre os seletores, com força 100.

- **class:** Pode ser multipla, podemos utilizar mais de uma vez Utilizando o seletor class, é possível utilizar a mesma formatação/estilização em mais de um elemento.
Class pode ser multipla, possui força 10 entre os seletores e é identificada com . dentro de um arquivo de estilo.


#### Como podemos fazer a inserção do CSS na página?

- **CSS Inline:** Podemos adicionar uma propriedade style em alguma tag, dentro do style e entre aspas, propriedade: valor. 
<'p style="font-size: 15px">Teste de texto<'/p>;

- **Tag style:** Podemos abrir uma tag <'style> dentro do <'head>', selecionar o elemento e propriedade: valor
<'head>
    <'title>Teste de texto<'/title>
'
    <'style>
        p {
            font-size: 15px
        }
    <'/style'>
<'/head>
 
 - **Arquivo externo:** Utilizando a tag link e referenciando seu relacionamento com a propriedade rel e endereço de referência com href. 
 '<'link rel="stylesheet" href="style.css">'
 A forma mais indicada de se fazer para separar os tipos de códigos, 
 criando a possibilidade de aplicar o mesmo código em CSS em outros arquivos HTML. 

#### Explique o que é encadeamento e agrupamento de seletores:

- Com o encadeamento de seletores, podemos selecionar elementos específicos em um HTML. Exemplo
.conteudo li h2 {font-size: 15px;}


- Com o agrupamento de seletores, podemos adicionar diversos elementos do HTML dentro de um mesmo bloco de código de CSS, 
separando cada seletor por virgula, exemplo:
.conteudo, .principal, .conteudo-beneficios, .mapa-conteudo, .video {font-size:15px;}


#### O que é box-model e dê 3 exemplos de aplicação:

Box-model ou modelo de caixa, é o total de espaço que o elemento ocupa na tela, sendo que os mesmos são exibidos em formato de caixa, são retangulares ou quadrados.
Existem algumas propriedades do CSS que interfere no cálculo desse espaço, como border, margin, padding, width e height.

**Aplicação:**
- Desenvolvimento do layout de páginas;
- Posição, tamanho e espaçamentos dos elementos; e
- Manipular o comportamento dos elementos.

#### Explique a diferença entre margin e padding:

- padding: Adiciona um espaçamento interno, entre a borda do elemento e o texto/conteúdo; e
- margin: Manipula o espaçamento externo de um elemento, sua margem.

#### Explique o que é position e dê um exemplo de cada.
Position é uma propriedade que define como um elemento pode ser posicionado,
e trabalha em conjunto com as outras propriedades top, bottom, right e left.

Tipos de position:
- position: static: O padrão de qualquer elemento;
- position: fixed: Faz o elemento ficar fixado na página. Posicionado de acordo com a viewport.
- position: sticky: Posicionado com base na posição de rolagem da tela. Fica fixo quando tocado pelas "paredes" da tela.
- position: relative: Posicionado em relação a ele mesmo.
- position: absolute: Posicionado em relação ao elemento mais próximo do position:relative ou absoluto ao corpo da página.


#### Crie um arquivo index_tabuleiro.html, nele você irá criar 2 tabuleiros iguais ao da figura 2, sendo que o primeiro será usando a tag **DIV** e o segundo usando a tag **TABLE**.


<h2 style="text-align:center"><img src="https://ik.imagekit.io/3mfjmziiqmi/TABULEIRO_JR2VsFqgq.png?updatedAt=1638143293656"></h2>


- [Resposta](https://github.com/andmennos/trilhaFrontEnd/blob/main/Desafio-2/index_tabuleiro.html)