# Projeto HorariosFatec
 
Esse projeto foi criado a partir da matéria de Gestão de Projetos da faculdade, onde cada grupo deveria criar e apresentar sistemas passando por todas as etapas (Documentação e Desenvolvimento).

A criação foi dividida entre os membros da seguinte forma: <br>
**Documentação**: Vancley Vieira e Eyshila Santos <br>
**Desenvolvimento**: João Vitor Andrade

No projeto **HorariosFatec**, o objetivo do grupo foi criar um sistema visando a agilidade e eficiência em buscar informações das aulas de nossa instituição.

## Ferramentas
### Front-End
Para o front-end foi utilizado o **Javascript/jQuery**, levando em consideração sua eficiência na manipulação de elementos HTML das páginas. Foi essencial tanto pelas transições quanto pela validação dos dados dos formulários.

### Back-end
Com o back-end, a linguagem escolhida foi o **C# com .NET Core (MVC)**. Essa linguagem foi escolhida pela sua eficiência na organização do código, facilitando na manutenção e pela sua integração com o banco de dados.

### Banco de Dados
Como banco de dados, foi optada a utilização do **SQL Server**. Sua criação e manipulação se tornam ágeis junto com o .NET Framework.

## Utilização
O sistema conta com duas telas apenas, sendo elas a tela do usuário e a tela de adaministração.

A tela do usuário conta com botões que realizam os desdobramentos necessários. 

Eles possuem a seguinte hierarquia: <br>
**Botão 'Curso':** Faz o desdobramento que exibe as opções de curso; <br>
**Botões de cursos:** Depois do curso escolhido, faz o desdobramento que exibe os botões referentes aos semestres; <br>
**Botões de semestres:** Esses botões realizam o ultimo desdobramento, ao qual são exibidas as tabelas referentes ao curso + semestre escolhidos.

As tabelas são dividas entre os dias da semana (Segunda até Sábado) e contam com as informações 'Curso', 'Aula', 'Sala', 'Bloco' e 'Horário'.

Para entrar na página de administração, é necessário realizar o login. <br>
Ela foi criada em base da página do usuário, com algumas informações a mais. Nas tabelas existem a possibilidade de editar as informações ou inativar uma linha. Essa inativação faz com que ela não seja exibida para o usuário.

As informações das tabelas são fixas, não podendo alterar ou excluir. <br>
Foi mapeado dessa forma porquê na instituição não ocorre variação de quantidade de aulas por curso/turno. Sendo assim, não é necessário acrescentar ou excluir informações.

## Conclusão
A apresentação do projeto para o docente foi muito bem sucedida. O objetivo dele foi concluído e é de grande eficiência para a instituição e os alunos.

Para as próximas etapas, o objetivo será implementá-lo para a utilização no ambiente produtivo.

Enquanto isso, estaremos discutindo melhorias e expansões do projeto para outras instituições.
