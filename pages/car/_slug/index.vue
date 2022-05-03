<template>
  <div>
    <Preloader />
    <TopHeader />
    <Header />
    <ItemDetails />
    <Footer />
  </div>
</template>

<script>
import Preloader from "~/components/Page/Preloader";
import TopHeader from "~/components/Home/TopHeader";
import Header from "~/components/Home/Header";
import ItemDetails from "~/components/Page/ItemDetails";
import Footer from "~/components/Home/Footer";
export default {
  name: "carDetails",
  components: {
    Header,
    TopHeader,
    Preloader,
    ItemDetails,
    Footer,
  },
  head() {
    return {
      title: "AUTOBENZ | Item Details",
    };
  },
};
</script>

<style scoped>
.content-area-5 {
  padding: 180px 0;
}
</style>
