import SongItem from '@/components/SongItem.vue';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';

describe('SongItem.vue', () => {
  test('render song.display_name', () => {
    const song = {
      display_name: 'test',
    };
    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: {
          // * Use Stubbing to create dummy component.
          'router-link': RouterLinkStub,
        },
      },
    });

    const compositionAuthor = wrapper.find('.text-gray-500');

    // * Use this and avoid using Boolean Assertion
    expect(compositionAuthor.text()).toBe(song.display_name);

    // expect(wrapper.text()).toContain(song.display_name);
  });
});
