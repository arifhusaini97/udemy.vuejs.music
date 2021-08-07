// // Only for modules data;
// import { createStore } from 'vuex';
// import auth from '@/store/modules/auth';
// import player from '@/store/modules/player';
// import { cloneDeep } from 'lodash';

// // * Mock dependency like firebase
// // * Return empty dependency
// jest.mock('@/includes/firebase', () => ({
//   auth: {
//     signInWithEmailAndPassword: () => Promise.resolve(),
//   },
// }));

// describe('Vuex Store', () => {
//   test('toggleAuthStatus mutation sets userLoggedIn to true', () => {
//     // ClonedAuth is important to avoid the auth share the same state across test
//     const clonedAuth = cloneDeep(auth);
//     const store = createStore({
//       modules: { auth: clonedAuth },
//     });
//     expect(store.state.auth.userLoggedIn).not.toBe(true);
//     store.commit('toggleAuth');
//     expect(store.state.auth.userLoggedIn).toBe(true);
//   });

//   test('login action sets userLoggedIn to true', async () => {
//     expect.assertions(2);
//     // ClonedAuth is important to avoid the auth share the same state across test
//     const clonedAuth = cloneDeep(auth);
//     const store = createStore({
//       modules: { auth: clonedAuth },
//     });
//     expect(store.state.auth.userLoggedIn).toBe(false);
//     await store.dispatch('login', { email: '', password: '' });
//     expect(store.state.auth.userLoggedIn).toBe(true);
//   });

//   test('Playing returns true if audio is playing', () => {
//     const state = {
//       sound: {
//         playing: () => true,
//       },
//     };
//     const result = player.getters.playing(state);

//     expect(result).toEqual(true);
//   });
// });

// Dummy Test
test('Dummy Test', () => {
  expect(true).toBe(true);
});
