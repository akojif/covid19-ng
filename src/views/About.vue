<template>
  <c-box>
    <c-box px="3rem" py="2rem" bg="#0d8e541a" h="50vh">
      <Navbar />

      <c-box>
        <c-text fontSize="6xl" fontWeight="bold" py="2rem">About</c-text>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CText } from "@chakra-ui/vue";
import Navbar from "@/components/Navbar";
export default {
  name: "about",
  components: {
    CBox,
    CText,
    Navbar
  }
};
</script>
