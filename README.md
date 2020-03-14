# Boas vindas ao repositório do projeto star wars planets em REACT!

LINK DA PAGINA DO PROJETO: https://wxhbr.github.io/Talentos-Digitais-Localiza/

OBS: CASO O LINK NAO ESTEJA SAINDO DO LOADING, É PORQUE O SITE DA API ESTÁ INSTÁVEL E ACONSELHO TENTAR APÓS UNS 5 MIN OU QUANDO ESTE SITE ESTEJA ATIVO(https://swapi.co/documentation).

## O que deverá ser desenvolvido

Esse é um projeto em React utilizando Redux para controle de estado. A aplicação consistirá de uma tabela com informações acerca dos planetas no universo fictício da série _Star Wars_. A tabela foi alimentada com dados retornados de uma [API](https://swapi.co/documentation) real. Tem, também, vários filtros que permitirão a quem usa selecionar e encontrar com facilidade a informação desejada.

## Funcionalidades:

-O projeto contem um campo input com o placeholder "Digite um nome", esse campo serve para filtrar dados da coluna nome da tabela, de acordo com o que o usuário deseja.  
-Logo abaixo possui 3 filtragens diferentes, 2 campos selects e 1 campo input, ao clicar neles, o usuario poderá selecionar alguns valores do subtitulo(population, orbital planet, rotation planet, diameter...) da tabela.                  	
-Quando os 3 campos acima estiverem preeenchidos, aparecerá um botão de filtragem.  	
-Clicando no bota de filtragem, a tabela mostrará os planetas que foram filtrados pelo usuário, limpará os campos de filtro, desaparecerá e irá aparecer na tela uma campo com todas as filtragens selecionadas.	  
-Enquanto existir filtragens ativas os valores das colunas filtradas não aparecerão no select de escolha da coluna. Por ex:
-Caso exista 2 filtros ativos, 1 com o valor population e outro com o valor orbital planet, no campo select estes valores não poderão ser selecionados.  	
-O usuário poderá remover os filtros ativos clicando no "x".  	

### Tecnologias usadas:

-React

-Redux  	           
-Git e GitHub  	           
-Javascript	                 
-CSS	  


### Cuidado tomados durante o desenvolvimento

Durante o desenvolvimento do projeto foi adotado algumas práticas muito importantes para deixar o código mais organizado, limpo e reaproveitável. O projeto foi organizado em vários componentes que foram nomeados de acordo com suas respectivas funçoes dentro do código, em pastas também nomeadas de acordo com as funções dos arquivos dentro delas. Por ex: Pasta components possui todos os components e seus respectivos css. 

Foi tomado cuidado na hora de escrever o código para que ele seja muito bem entendido por qualquer pessoa que queira usá-lo ou trabalhar em cima dele. Foi respeitado as normas do codeclimate(um bot que possui regras de organizacao e code-clean do airbnb).

O projeto não possui testes, porém entendo a importância dos testes para saber se toda a aplicação está funcionando corretamente para vários tipos de casos de uso e também para caso outra pessoa queira trabalhar em cima disso não se perder na hora de fazer várias mudanças. Por ex: Alguns testes que eu gostaria de ter feito nesse projeto seriam, testar se a api está sendo carregada na tela corretamente, testar se todas as filtragens estão funcionando corretamente, é muito importante também testar se as interações do usuário com a aplicação estão funcionando corretamente, entre outros testes. Para fazer os testes eu usaria a biblioteca RTL(React-testing-library), porque é uma biblioteca que no momento eu estou mais familiarizado com ela.


### REVISANDO UM PULL REQUEST

Uma prática muito importante na hora de fazer projetos e grupo é o code review que serve para podermos analisar, marcar correções e compreender os códigos das outras pessoas do nosso grupo e para mantermos um padrão para que o projeto esteja todo correto e organizado da melhor forma possível.

