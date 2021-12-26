import Head from "next/head";
import Image from "next/image";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Categories from "../components/home/Categories";
import FeaturesCourses from "../components/home/FeaturesCourses";
import Hero from "../components/home/Hero";
import HeroSteps from "../components/home/HeroSteps";
import StudentReview from "../components/home/StudentReview";
import styles from "../styles/Home.module.css";

export default function Home({ courseCategories }) {
  return (
    <>
      <Head>
        <title>Satamo HOME</title>
      </Head>
      <div id="tmbLoader"></div>
      <Header />
      <main className="main-page-content">
        <Hero />
        <HeroSteps />
        <Categories categories={courseCategories} />
        <FeaturesCourses />
        <StudentReview />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const data = await fetch(`${process.env.PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {

        courseCategories{
          data{
            id
            attributes{
              title
              thumbnail{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }
      `,
    }),
  });
  const courseCategories = (await data.json()) || {};
  return {
    props: {
      courseCategories,
    }, // will be passed to the page component as props
  };
}
