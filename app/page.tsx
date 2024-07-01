import { Header } from "../components/Header";
import { About } from "../components/About/index";
import { Airport } from "../components/Airport/index";
import React from "react";
import { Testimonial } from "@/components/Testimonial";
import { ArticleOne } from "../components/article-1/index";
import { ArticleTwo } from "../components/article-2/index";
import { Blog } from "../components/Blog";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Airport />
      <Testimonial />
      <ArticleOne />
      <ArticleTwo />
      <Blog />
      <Footer />
    </React.Fragment>
  );
}
