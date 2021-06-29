# Voiceflow Interview Frontend Project 💬

# Decisions

- Redux: Nothing too much concept here. We could do it with useReducer and context API as well, whatever because of timing and mainly because boilerplate redux toolkit helped me to setup it. Besides that for caching I'm using the redux persistor that already satisfies the business requirement without too much effort.

- Custom hooks: I created custom hooks to abstract data fetching. The idea it's to hide the logic how to get this data from the screens/components.

- Tests: I couldn't make time to test everything, so I covered more integrations tests inside the screens. With integrations tests like this we can cover more behaviors.

# To do

- [] Terminar testes do dashboard
- [] Espaçamento create new user
- [] Criar loom vídeo para readme
- [] Terminar de escrever o readme
