'use client'

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TopCategories from "./components/TopCategories";
import LatestProducts from "./components/LatestProducts";
import Feature from "./components/TopProduct";
import Offers from "./components/Offers";
import Unique from "./components/Unique";
import TrendingProducts from "./components/Trending";
import Discount from "./components/Discount";
import BlogSection from "./components/Blogs";
import Newslater from "./components/News";

function Homepage(){
  return(
    <div>
      <Header />
      <Hero />
      <LatestProducts />
      <Feature />
      <Unique />
      <Offers />
      <Discount />
      <TrendingProducts />
      <TopCategories />
      <Newslater />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default Homepage;