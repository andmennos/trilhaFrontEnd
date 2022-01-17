<h1>DESAFIO 9 - Desafio Final</h1>
<h1>Angular - Desafio Final</h1>
<h2><img src="https://ik.imagekit.io/3mfjmziiqmi/angular_gUKFNTt1j.jpg?updatedAt=1639076604509" style="width: 20%"></h2>

## Desafio Final

### Com base no curso de “Angular 11 Avançado: Criando uma Arquitetura Master/Detail” responda as seguintes questões.

#### a) - Qual a responsabilidade do package.json no projeto?

- Definir as configurações de ferramentas, como suas dependências e scripts.

#### b) Qual a responsabilidade do angular.json no projeto?

- Definir as configurações do projeto por padrão de usabilidade do angular cli e toda sua parte estática da aplicação, como imagens, definições de aplicação de estilos

#### c) Qual a finalidade da tag <router-outlet></router-outlet>?

- Para definir a saída de uma rota. Busca no path dentro da rota criada e coloca dentro da tag router-outlet.


#### d) Qual a diferença entre as duas declarações de rotas a seguir? Qual delas é denominada de eager-load e lazy-load?

**Declaração 1:**

<img src="https://ik.imagekit.io/3mfjmziiqmi/DEC1_C__rcLI6f.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642261927788">

**Declaração 2:**

<img src="https://ik.imagekit.io/3mfjmziiqmi/DEC2_9gH3gUeC8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642261927888">

- **A declaração** 1 é eager-load, carrega todos os módulos e componentes no momento da inicialização da aplicação;

- **A declaração 2** é lazy-load, carrega módulo por módulo de acordo com as interações do usuário. Melhora a velocidade pela diminuição de dados carregados simultaneamente. Carregando apenas o que é necessário.

#### e) Qual a importância da componentização?

- Além de melhorar a velocidade e consumo de dados, a componentização é o melhor caminho para um ambiente de manutenções em aplicação com maior facilidade.

#### f) Quais componentes reaproveitáveis foram criados no projeto?

- 2 componentes, category-form e entry-form.

#### g) No arquivo bread-crumb.component.ts qual funcionalidade da linha a seguir:

<img src="https://ik.imagekit.io/3mfjmziiqmi/DEC3_wmew1byJ7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642261927947">

- Decorator input, cria uma lista dentro do objeto BreadCrumbItem; 

#### h) Com base no exercício anterior para qual finalidade a anotação a seguir é utilizada?

<img src="https://ik.imagekit.io/3mfjmziiqmi/DEC4_PCHJgic5Oge.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642261927946">

- Decorator output faz a comunicação entre componentes filhos para os pais. 

#### i) Sobre a arquitetura proposta no curso, descreva os requisitos para se enquadrar em cada um dos níveis a seguir: **core, pages e shared**

<img src="https://ik.imagekit.io/3mfjmziiqmi/DEC5_JRTr1rTpUj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642261928158">

- **core**: Componentes responsáveis pelo funcionamento da aplicação;

- **pages**: Componentes responsáveis pel que é renderizado na tela; e

- **shared**: Componentes que são responsáveis pelo compartilhamento de dados e/ou funções. 

#### j) Qual o papel do arquivo in-memory-database.ts?

- Utilizada para aplicar o serviço InMemoryDbService. Serve para ser um banco de dados para serem retornados quando for feita uma requisição http.


#### k)  Liste  5  métodos  e  5  propriedades  de  um  objeto  do  tipo  FormBuilder  e  suas  respectivas funcionalidades. Segue exemplo abaixo de declaração.

<img src="https://ik.imagekit.io/3mfjmziiqmi/DEC6_XETX0lSzGY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642261928409">

#### Métodos

- enable(): Habilita o controle. Seu status é é recalculdo com base nos valores de seus validadores.

- clearValidators(): Esvazia a lista de validadores síncronos;

- setValue(): Define o valor do controle;

- getError(): Informa dados de erros ao controle conforme o caminho; e

- setError(): Configura erros no formControl ao executar as validações manualmente.

#### Propriedades

- value: O valor atual do controle;

- touched: Define como verdadeiro quando o elemento é tocado;

- errors: Um objeto contendo quaisquer erros gerados por falha na validação ou nulo se não houver erros.

- valid / invalid: Define um controle valido ou invalido de acordo com o seu status ; e

- root: Recupera o ancestral de nível superior do controle.


#### l) Explique o funcionamento da seguinte sentença:

<img src="https://ik.imagekit.io/3mfjmziiqmi/DEC7_MTXNugZir.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642261928683">

- Se a variável currentAction for igual a "edit", utilize o observable paramMap e aplique um pipe com swicthMap (considerando apenas a última requisição, anulando a anterior);
- Envia os parametros para lancamento serem pegos por id em lancamentoService e transforma o id em um número;
- Se subscreve para o retorno do id. É feita uma função lancamento que redefine o valor do objeto lancamento;
- Configura os valores de lacamentoForm com um bind em lancamento; e
- E se caso ocorrer um erro, dispare um alerta com a mensagem "Ocorreu um erro no servidor, tenta mais tarde".

#### m) A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ouinjeção de dependências?

<img src="https://ik.imagekit.io/3mfjmziiqmi/DEC8_K0GkjmlL4Ym.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642261928921">

- É uma **Herança.** A classe EntryFormComponent (filho) está recebendo os métodos, inputs e outputs do componente pai BaseResourceFormComponent<'Entry'>

#### n) A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ouinjeção de dependências?

<img src="https://ik.imagekit.io/3mfjmziiqmi/DEC9_42lwg2q6r.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642261929095">

- É um **Polimorfismo.** A loadCategories() possui um efeito próprio e altera o funcionamento dos métodos da classe pai.

#### o) A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ouinjeção de dependências? Existe outra maneira?

<img src="https://ik.imagekit.io/3mfjmziiqmi/DEC10_vTVQ8h3yE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642261929209">

- É uma **Injeção de dependência.** A classe de serviço está sendo declarada em providers e estará disponível para toda a aplicação.

**FIM**