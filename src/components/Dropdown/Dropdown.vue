<template>
  <div class="dropdown" ref="dropdown">
    <div class="dropdown__select row align-items-center justify-contents-between pa-4" @click="toggleDropdown">
      <p>{{ label }}</p>
      <DropdownArrowUp v-if="isOpenDropdown"/>
      <DropdownArrowDown v-else/>
    </div>
    <div class="dropdown__body" v-if="isOpenDropdown">
      <ul class="pa-4" v-if="items.length > 0">
        <li :class="[Object.keys(selectedItem).length ? (selectedItem.name === item.name ? 'selected-item' : '') : '']"
            v-for="item in items" :key="item" @click="selectItem(item)">
          {{ item.name }}
        </li>
      </ul>
      <p v-else>항목이 존재하지 않습니다.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, onMounted, ref, Ref} from 'vue';
import DropdownArrowUp from '@/components/Icons/DropdownArrowUp.vue';
import DropdownArrowDown from '@/components/Icons/DropdownArrowDown.vue';

interface ItemInterface {
  id: string;
  name: string;
  country: string;
  coord: {
    lon: number,
    lat: number
  }
}

interface DropdownPropsInterface {
  label?: string;
  items?: ItemInterface[];
  selectedItem?: ItemInterface;
}

const props = withDefaults(defineProps<DropdownPropsInterface>(), {
  label: 'Select item',
  items: () => [] as ItemInterface[],
  selectedItem: () => {
    return {} as ItemInterface
  },
});
const emit = defineEmits(['select']);

const dropdown: Ref<HTMLElement> = ref(null);
const isOpenDropdown: Ref<boolean> = ref(false);
const toggleDropdown: (e: Event) => void = e => {
  e.stopPropagation();
  isOpenDropdown.value = !isOpenDropdown.value;
};

const closeDropdown: (e: Event) => void = e => {
  const dropdownEl = dropdown.value;
  if (dropdownEl) {
    if (!dropdownEl.contains(e.target as HTMLElement)) isOpenDropdown.value = false;
  }
}

const selectItem: (targetItem: ItemInterface) => void = targetItem => {
  emit('select', {...targetItem});
  isOpenDropdown.value = false;
};

onMounted(() => {
  document.body.addEventListener('click', closeDropdown);
});

onBeforeMount(() => {
  document.body.removeEventListener('click', closeDropdown);
});

</script>

<style lang="scss" scoped>
@import "../../assets/scss/common/variables";
@import "../../assets/scss/common/mixins";

$selectHeight: 40px;

.dropdown {

  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  position: relative;

  &__select {
    cursor: pointer;
    background-color: $white-color;
    font-size: 16px;
    height: $selectHeight;
  }

  &__body {
    position: absolute;
    left: 0;
    right: 0;

    ul {
      max-height: 500px;
      overflow: auto;
      background-color: $white-color;
      border: 1px solid $border-color;

      li {
        list-style: none;
        cursor: pointer;
        font-size: 14px;
      }

      li:not(:last-child) {
        padding: 4px 0;
      }

      li:last-child {
        padding-top: 4px;
      }

      @include pointer-fine() {
        li:hover {
          color: $primary-color;
          background: #f8f8f8;
        }
      }

      @include pointer-coarse() {
        li:active {
          color: $primary-color;
          background: #f8f8f8;
        }
      }

      .selected-item {
        font-weight: 700 !important;
        color: $secondary-color !important;
      }

    }
  }
}
</style>
