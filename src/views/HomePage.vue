<template>
  <c-box w="100%">
    <c-box
      v-if="isLoading"
      d="flex"
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <c-stack>
        <c-spinner
          thickness="4px"
          speed="0.65s"
          empty-color="green.200"
          color="vue.500"
          size="xl"
          class="alignItem"
        />
        <c-text textAlign="center" fontSize="4xl" color="vue.500"
          >Loading</c-text
        >
      </c-stack>
    </c-box>
    <c-box v-else>
      <c-box
        px="3rem"
        py="2rem"
        bg="#0d8e541a"
        h="auto"
        roundedBottomRight="50px"
        roundedBottomLeft="50px"
      >
        <!-- Navigation Bar -->
        <Navbar />

        <c-box
          mt="3rem"
          d="grid"
          :gridTemplateColumns="[
            'repeat(auto-fill, minmax(120px, 1fr))',
            'repeat(auto-fill, minmax(150px, 1fr))',
            'repeat(auto-fill, minmax(300px, 1fr))'
          ]"
          gridGap="8px"
          pb="2rem"
        >
          <DataBox
            :icon="confirmedIcon"
            caseName="Confirmed Cases"
            :caseCount="cases.confirmedCases"
          />
          <DataBox
            :icon="deathIcon"
            caseName="Total Death"
            :caseCount="cases.death"
          />
          <DataBox
            :icon="recoveredIcon"
            caseName="Total Recovered"
            :caseCount="cases.discharged"
          />
          <DataBox
            :icon="newCasesIcon"
            caseName="Active Cases"
            :caseCount="cases.activeCases"
          />
        </c-box>
      </c-box>

      <c-box px="3rem" py="4rem">
        <c-text fontSize="4xl" fontWeight="800" letterSpacing="1.2px"
          >Preventions</c-text
        >
        <c-box d="flex" justifyContent="space-between" py="2rem">
          <c-stack>
            <c-image :src="washhandIcon"></c-image>
            <c-text
              fontWeight="600"
              color="vue.600"
              textAlign="center"
              mt="1rem"
              >Wash Hand</c-text
            >
          </c-stack>

          <c-stack>
            <c-image :src="usemasksIcon"></c-image>
            <c-text
              fontWeight="600"
              color="vue.600"
              textAlign="center"
              mt="1rem"
              >Use Masks</c-text
            >
          </c-stack>

          <c-stack>
            <c-image :src="cleanIcon"></c-image>
            <c-text
              fontWeight="600"
              color="vue.600"
              textAlign="center"
              mt="1rem"
              >Clean Disinfect</c-text
            >
          </c-stack>
        </c-box>
      </c-box>

      <c-box px="3rem" pb="3rem">
        <c-image :src="bottomBanner" width="100%" />
      </c-box>
    </c-box>
  </c-box>
</template>

<script lang="js">
import { CBox, CText, CStack, CImage, CSpinner} from '@chakra-ui/vue'
import DataBox from "@/components/DataBox";
import Navbar from "@/components/Navbar";

export default {
  name: 'page',
  components: {
    CBox,
    CText,
    CStack,
    CImage,
    CSpinner,
    DataBox,
    Navbar
  },
  data() {
    return {
      cases: [],
      isLoading: true
    }
  },
  computed: {
     confirmedIcon() {
      return require("../assets/confirmedIcon.svg");
    },
    deathIcon () {
      return require("../assets/deathIcon.svg");
    },
    recoveredIcon () {
      return require("../assets/recoveredIcon.svg");
    },
    newCasesIcon () {
      return require("../assets/newcasesIcon.svg");
    },
    washhandIcon () {
      return require("../assets/washhandIcon.svg");
    },
     usemasksIcon () {
      return require("../assets/usemasksIcon.svg");
    },
     cleanIcon () {
      return require("../assets/cleanIcon.svg");
    },
    bottomBanner () {
      return require("../assets/bottombanner.svg");

    }
  },
  created () {
    this.fetchTotal();
  },
  methods: {
       async fetchTotal() {
      try {
        const baseUrl = "https://covid19ngr.herokuapp.com/api/totals/";
        let apiCall = await this.$http.get(baseUrl);
        let apiJsonResponse = await apiCall.json();
        let data = apiJsonResponse.data;
        this.cases = data;
        this.isLoading = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.alignItem {
  margin-left: 20px;
}
</style>
