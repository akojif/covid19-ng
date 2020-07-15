<template>
  <c-box w="100%" h="auto" bg="white" borderRadius="8px" py="1.5rem" px="1rem">
    <c-box d="flex" alignItems="center">
      <c-image
        rounded="full"
        h="10px"
        w="10px"
        :src="icon"
        alt="Confirmed Cases"
      />
      <c-text fontSize="lg" ml="1rem">{{ caseName }}</c-text>
    </c-box>
    <c-box d="flex" mt="1.5rem" justifyContent="space-between">
      <c-stack>
        <c-text fontSize="4xl" fontWeight="800">{{ caseCount }}</c-text>
        <c-text fontSize="small">People</c-text>
      </c-stack>
      <c-image h="auto" :src="graphIcon" />
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CImage, CText, CStack } from "@chakra-ui/vue";
export default {
  name: "dataBox",
  props: ["icon", "caseName", "caseCount"],
  components: {
    CBox,
    CImage,
    CText,
    CStack
  },
  computed: {
    graphIcon() {
      return require("../assets/graphIcon.svg");
    }
  }
};
</script>
