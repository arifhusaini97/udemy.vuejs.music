export default {
  beforeMount(el, binding) {
    // Headphone Icon in Home
    // NOTE: v-icon-secondary="{ icon: 'headphone-alt', right: true }"
    let iconClass = `fa fa-${binding.value.icon} text-green-400 text-xl`;

    // v-slot.right
    if (binding.value.right) {
      iconClass += ' float-right';
    }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
