import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import About from "./About";
import HomePage from "../components/HomePage";
import Timeline from "../components/Timeline";
import Link from "next/link";
export default function Home({ newsData, totalCounts }) {
  console.log(totalCounts, "homeData");
  return (
    <div>
      <div>
        <HomePage data={newsData} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const newsData = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce04abf35fd24923ad803b12003dfda3"
  ).then((res) => res.json());
  const totalCounts = await fetch(
    "https://fakerapi.it/api/v1/custom?_quantity=4&count=number&title=word"
  ).then((res) => res.json());
  return {
    props: {
      newsData,
      totalCounts,
    },
  };
}
