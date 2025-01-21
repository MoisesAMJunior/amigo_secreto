# Projeto "Amigo Secreto"

Este é um projeto em JavaScript para a criação de funcionalidades que realizam o sorteio de amigo secreto de forma automática. O objetivo é simplificar o processo de sorteio, garantindo que todos os participantes sejam sorteados sem repetições ou erros.

## Funcionalidades

- **Sorteio de Participantes**: O sistema sorteia de forma aleatória os amigos secretos entre os participantes.
- **Exclusão de Repetições**: Cada participante terá um amigo secreto único, sem repetições.
- **Armazenamento de Resultados**: O resultado do sorteio é exibido para cada participante, garantindo a privacidade.

## Tecnologias Utilizadas

- **JavaScript**: A principal linguagem para a implementação das funcionalidades.
- **HTML/CSS**: Para criar a interface do usuário.
- **Node.js** (opcional): Para rodar o script no backend, caso deseje implementar uma versão mais robusta do sorteio.

## Como Executar

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/amigo-secreto.git
    ```

2. Acesse a pasta do projeto:
    ```bash
    cd amigo-secreto
    ```

3. Abra o arquivo `index.html` em um navegador para rodar o sorteio de amigo secreto na interface gráfica.

4. Caso queira rodar o script Node.js no terminal:
    - Instale as dependências:
      ```bash
      npm install
      ```

    - Execute o sorteio:
      ```bash
      node sorteio.js
      ```

## Como Funciona o Sorteio

O sorteio é feito de forma aleatória, onde cada participante é associado a outro sem repetições. O sistema garante que ninguém tire a si mesmo como amigo secreto.

## Contribuição

Se você quiser contribuir com o projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
