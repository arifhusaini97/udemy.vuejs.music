import About from '@/views/About.vue';
import { mount } from '@vue/test-utils';

describe('About.vue', () => {
  test('renders inner text', () => {
    // const wrapper = shallowMount(About);
    const wrapper = mount(About, {
      shallow: true,
    });

    expect(wrapper.text()).toContain('about');
  });
});
