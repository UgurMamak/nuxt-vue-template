//Yaygın kullanılan componentleri burada tanımlayarak her sayfada import etmeden kullanabiliriz.

import Vue from "vue";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Banner from "@/components/common/Banner";

Vue.component("Header",Header);
Vue.component("Footer",Footer);
Vue.component("Banner",Banner);
