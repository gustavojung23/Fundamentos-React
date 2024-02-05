# Hooks React

Estudos de casos sobre os Hooks do React.


## useState
O principal propósito é **gerenciar valores**.
Pode **consultar** um valor e **alterar**.
Permite **re-renderizar um componente**, o que não acontece com a manipulação de variáveis.


## useReducer
Tem a possibilidade de **executar um função na hora da alteração do valor**.
O useReducer recebe um **valor** para gerenciar e **uma função** para alterar este valor.


## useEffect
Pode realizar desde **alterações na DOM a requisições HTTP**.
Consegue **controlar quantas vezes algo acontece**.
A sintaxe é formada por **uma função a ser executada** e **um array de dependências**.


## useContext
O **useContext** é o hook utilizado para consumir um contexto, da Context API.
Precisa **criar o contexto** e também o **Provider**.
**Envolver os componentes** que receberão os valores compartilhados.
Fazer o uso do hook onde necessário.


## useRef
Pode ser utilizado como **useState** para gerenciar valores. A diferença é que ele é um **objeto**, seu valor está na propriedade **current**.
Ele **não re-renderiza o componente ao ser alterado** sendo interessante em alguns casos.


## useCallback
Pode ser utilizado para duas situações.
**Memoriza a função**, fazendo ela **não ser reconstruída a cada renderização** do componente.
O primeiro caso é quando estamos prezando pela **performance**, então queremos uma função muito complexa não reconstruída toda vez.
O segundo caso é quando o **próprio React nos indica que uma função deveria estar contida em um useCallback**, para evitar problemas de perfomance.


## useMemo
O **useMemo** pode ser utilizado para garantir a **referência de um obejto**.
Fazendo com que algo possa ser atrelado a uma referência e não um valor.
Com isso, conseguindo **condicionar useEffect a uma variável** de maneira mais inteligente.