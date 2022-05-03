<template>
  <div>
    <Preloader />
    <TopHeader />
    <Header />
    <SubBanner />
    <Welcome />
    <Footer />
  </div>
</template>

<script>
import Preloader from "~/components/Page/Preloader";
import TopHeader from "~/components/Home/TopHeader";
import Header from "~/components/Home/Header";
import SubBanner from "~/components/Home/SubBanner";
import Welcome from "~/components/Home/Welcome";
import About from "~/components/Home/About";
import Terms from "~/components/Page/Terms";
import Counter from "~/components/Home/Counter";
import Team from "~/components/Home/Team";
import Project from "~/components/Home/Project";
import Quote from "~/components/Home/Quote";
import Tab from "~/components/Home/Tab";
import Blog from "~/components/Home/Blog";
import Reviews from "~/components/Home/Reviews";
import Footer from "~/components/Home/Footer";

export default {
  components: {
    Footer,
    Reviews,
    Blog,
    Tab,
    Quote,
    Project,
    Team,
    Counter,
    Terms,
    About,
    Welcome,
    // Slider,
    Header,
    TopHeader,
    Preloader,
    SubBanner,
  },
  head() {
    return {
      title: "AUTOBENZ | Vue Nuxt It Solutions Services Company",
    };
  },
  mounted() {
    // Page scroller initialization.
    $(window).on("scroll", function () {
      adjustHeader();
      doSticky();
      placedDashboard();
    });
    this.$store.dispatch('getCar')
    /*----------------------------
 Counter js active
------------------------------ */

    var count = $(".counter");
    count.counterUp({
      delay: 40,
      time: 3000,
    });

    /*---------------------
 wow .js
--------------------- */
    function wowAnimation() {
      new WOW({
        offset: 100,
        mobile: true,
      }).init();
    }
    wowAnimation();

    function adjustHeader() {
      var windowWidth = $(window).width();
      if (windowWidth > 0) {
        if ($(document).scrollTop() >= 100) {
          if ($(".header-shrink").length < 1) {
            $(".sticky-header").addClass("header-shrink");
          }
          if ($(".do-sticky").length < 1) {
            $(".company-logo img").attr("src", "img/logos/black-logo.png");
          }
        } else {
          $(".sticky-header").removeClass("header-shrink");
          if (
            $(".do-sticky").length < 1 &&
            $(".fixed-header").length == 0 &&
            $(".fixed-header2").length == 0
          ) {
            $(".company-logo img").attr("src", "img/logos/logo.png");
          } else {
            $(".company-logo img").attr("src", "img/logos/black-logo.png");
          }
        }
      } else {
        $(".company-logo img").attr("src", "img/logos/black-logo.png");
      }
    }

    function doSticky() {
      if ($(document).scrollTop() > 40) {
        $(".do-sticky").addClass("sticky-header");
        //$('.do-sticky').addClass('header-shrink');
      } else {
        $(".do-sticky").removeClass("sticky-header");
        //$('.do-sticky').removeClass('header-shrink');
      }
    }

    function placedDashboard() {
      var headerHeight = parseInt($(".main-header").height(), 10);
      $(".dashboard").css("top", headerHeight);
    }
  },
};
</script>

<style>
</style>
