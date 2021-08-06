import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import SongItem from '@/components/SongItem.vue';

// * Mock dependency like firebase
// * Return empty dependency
jest.mock('@/includes/firebase', () => {

});

describe('Home.vue', () => {
  test('renders list of songs', () => {
    // * Use Mock data instead of request from API
    const songs = [{}, {}, {}];

    // * Mock methods
    Home.methods.getSongs = () => false;

    // * The shallowMount is the reason why router-link doesn't need to be mocked this time
    const component = shallowMount(Home, {
      data() {
        return {
          songs,
        };
      },

      // * Do not import plugin like i18n. This test need to be independent.
      global: {
        mocks: {
          $t: (message) => message,
        },
      },
    });
    const items = component.findAllComponents(SongItem);

    expect(items).toHaveLength(songs.length);

    // * To Check if the list is in correct order
    // * The parent data and the child data should match
    items.forEach((wrapper, i) => {
      expect(wrapper.props().song).toStrictEqual(songs[i]);
    });
  });
});
