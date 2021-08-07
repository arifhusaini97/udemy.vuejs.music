import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import SongItem from '@/components/SongItem.vue';

// Snapshot compare two ui. It is very sensitive to a single pixel
describe('Snapshots SongItem.vue', () => {
  test('renders correctly', () => {
    const song = {
      docID: 'abc',
      modified_name: 'test',
      display_name: 'test',
      comment_count: 5,
    };

    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: {
        components: {
          'router-link': RouterLinkStub,
        },
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
