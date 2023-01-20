import * as React from "react"

import Navbar from "../components/navbar/Navbar"
import Hero from "../components/home/hero/Hero"
import Feature from "../components/home/feature/Feature"
import Content from "../components/home/content/Content"
import Footer from "../components/footer/Footer"

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Feature />
    <Content />
    <Footer />
    </>
  )
}
