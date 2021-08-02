export default {
  beforeMount(el, binding) {
    // Headphone Icon in Home
    // NOTE: v-icon.right.yellow="'headphones-alt'" placed in the view tags
    let iconClass = `fa fa-${binding.value} text-xl`;

    // v-slot:full=
    if (binding.arg === 'full') {
      iconClass = binding.value;
    }

    // v-slot.right
    if (binding.modifiers.right) {
      iconClass += ' float-right';
    }
    // v-slot.yellow
    if (binding.modifiers.yellow) {
      iconClass += ' text-yellow-400';
    } else {
      iconClass += ' text-green-400';
    }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
