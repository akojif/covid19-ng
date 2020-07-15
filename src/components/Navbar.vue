<template>
  <c-box>
    <c-box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      py="1.5rem"
    >
      <c-button ref="btnRef" @click="isOpen = true">
        <c-icon name="align-left" color="vue.500" size="2rem"></c-icon>
      </c-button>

      <c-icon name="search" color="vue.500" size="2rem"></c-icon>
    </c-box>

    <c-drawer
      :isOpen="isOpen"
      placement="left"
      :on-close="close"
      :initialFocusRef="() => $refs.inputInsideModal"
    >
      <c-drawer-overlay />
      <c-drawer-content>
        <c-drawer-close-button />
        <c-drawer-header borderBottomWidth="1px">Menu</c-drawer-header>

        <c-drawer-body>
          <!-- Body Elements Goes Here -->
          <c-list styleType="none" my="2rem" spacing="6" fontWeight="bold">
            <c-list-item>
              <c-link href="/">Home</c-link>
            </c-list-item>
            <c-list-item>
              <c-link href="/states">All States</c-link>
            </c-list-item>
            <c-list-item>
              <c-link href="/about">About</c-link>
            </c-list-item>
          </c-list>
        </c-drawer-body>

        <c-drawer-footer mb="10rem">
          <c-text>Created with ❤️ by Akoji Francis</c-text>
        </c-drawer-footer>
      </c-drawer-content>
    </c-drawer>
  </c-box>
</template>

<script>
import {
  CBox,
  CIcon,
  CText,
  CButton,
  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerCloseButton,
  CList,
  CListItem,
  CLink
} from "@chakra-ui/vue";

export default {
  name: "Navbar",
  components: {
    CBox,
    CIcon,
    CText,
    CButton,
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton,
    CList,
    CListItem,
    CLink
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    openSomething() {
      alert("hi");
    }
  }
};
</script>
