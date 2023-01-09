<script>
import { builder, RenderContent } from "@builder.io/vue";
import { REGISTERED_COMPONENTS } from "../utils/init-builder";

// builder.init(process.env.BUILDER_IO_API_KEY); // entah knp, di vercel gk ke-detect, pdhl udh ditambakan env var di vercel.
builder.init("1b7eeb03c2dc4d46a05a805ff5a7824f");

export default {
  name: "Home",
  data: () => ({
    notFound: false,
  }),
  components: { RenderContent },
  methods: {
    contentLoaded(content) {
      if (!content) {
        if (this.$nuxt.context.ssrContext) {
          this.$nuxt.context.ssrContext.res.statusCode = 404;
        }
        this.notFound = true;
      } else {
        console.log("CONTENT:", content);
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

<template>
  <div>
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
</template>
