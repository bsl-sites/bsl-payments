import Head from "next/head";
import Image from "next/image";
import React from "react";
import AboutCompany from "../components/AboutCompany";
import AccreditationSection from "../components/AccreditationSection";
import BusinessSection from "../components/BusinessSection";
import Footer from "../components/Footer";
import HeroBackgroundImage from "../components/HeroBackgroundImage";
import HomePageLayout from "../components/HomePageLayout";
import PaymentEcosystem from "../components/PaymentEcosystem";
import ProductSection from "../components/ProductSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <HomePageLayout>
      <HeroBackgroundImage />
      <PaymentEcosystem />
      <AboutCompany />
      <Footer />
    </HomePageLayout>
  );
}
