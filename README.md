# Voiceflow Interview Frontend Project 💬

# Preview
https://user-images.githubusercontent.com/8049914/123819427-24f89480-d8d0-11eb-8efe-01ba08110688.mp4

# Decisions

**- Redux:** Nothing too much concept here. We could do it with reducer and context API as well, whatever because of timing and mainly because the boilerplate redux toolkit helped me to set up it. Besides that redux-toolkit uses Immer that help us creating a proxy object for store reducer, so we can code mutable code but it'll be immutable behind the scenes.

**- Caching:** For caching I'm using the redux persistor that already satisfies the business requirement without too much effort.

**- Custom hooks:** I created custom hooks to abstract data fetching. The idea's to hide the logic of how to get this data from the screens/components.

**- Tests:** I couldn't make time to test everything, so I covered more integrations tests inside the screens. With integrations tests like this, we can cover more behaviors.
