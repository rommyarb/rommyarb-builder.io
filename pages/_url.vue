<template>
  <div>
    <div>URL: /{{ $route.params.url }}</div>
    <div v-if="notFound">
      <!-- Show your 404 content. -->
      Page not found
    </div>
    <div v-else>
      <RenderContent
        :key="$route.path"
        model="page"
        @contentLoaded="contentLoaded"
        @contentError="contentError"
        :options="{
          url: $route.path,
        }"
        :customComponents="getRegisteredComponents"
      />
    </div>
  </div>
</template>

<script>
import { builder, RenderContent } from "@builder.io/vue";
import { REGISTERED_COMPONENTS } from "../utils/init-builder";

builder.init("0618a5892d0c4216bb4e0cf2dc7f668c");

export default {
  name: "PageUtama",
  data: () => ({
    notFound: false,
  }),
  components: { RenderContent },
  methods: {
    contentLoaded(content) {
      console.log("CONTENT:", content);
      console.log(0);
      if (!content) {
        console.log(1);
        if (this.$nuxt.context.ssrContext) {
          console.log(2);
          this.$nuxt.context.ssrContext.res.statusCode = 404;
        }
        this.notFound = true;
      }
    },
    contentError(err) {
      console.log("CONTENT LOAD ERROR:", err);
    },
    getRegisteredComponents() {
      return REGISTERED_COMPONENTS;
    },
  },
};
</script>
