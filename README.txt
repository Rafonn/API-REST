API REST em TypeScript com Morgan e Winston
Este repositório contém uma API REST desenvolvida em TypeScript, utilizando Morgan para registro de logs HTTP e Winston para logs detalhados e estruturados.

Tecnologias
Node.js: Ambiente de execução JavaScript/TypeScript.
TypeScript: Superset do JavaScript com tipagem estática.
Express: Framework minimalista para servidores HTTP em Node.js.
Morgan: Middleware para log de requisições HTTP.
Winston: Biblioteca de logging robusta, usada para criar logs estruturados e persistentes.

1. Uso do Morgan:
O Morgan é um middleware utilizado para logar todas as requisições HTTP realizadas na API. Ele ajuda a rastrear o tráfego da API e fornece logs no console para acompanhar o status de cada requisição.

2. Uso do Winston:
O Winston é configurado para logar mensagens detalhadas, incluindo níveis de log (info, warn, error), e permite a gravação de logs em arquivos ou outros destinos. O Winston oferece flexibilidade, como a gravação de logs em formato JSON ou texto.