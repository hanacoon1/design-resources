import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import ResourceGrid from "../components/ResourceGrid";
import TagFilter from "../components/TagFilter";
import styles from "../components/index.module.css";

const resources = [
  {
    title: "Designing for the Digital Age",
    url: "https://cdn2.hubspot.net/hub/349165/file-659507523-pdf/Designing-for-the-Digital-Age.pdf",
    description:
      "A giant behemoth of a textbook about designing digital products. Remarkably helpful if you can make it through!",
    tags: ["Book", "Product design", "PDF"],
    thumbnail: "/digital-age.jpg",
  },
  {
    title: "What Can a Body Do?",
    url: "https://www.penguinrandomhouse.com/books/561049/what-can-a-body-do-by-sara-hendren/",
    description:
      "An insightful exploration of the ways design can accommodate diverse bodies and abilities, emphasizing the importance of inclusivity and accessibility.",
    tags: ["Book", "Accessibility"],
    thumbnail: "/whatcanabodydo.png",
  },
  {
    title: "The Component Gallery",
    url: "https://component.gallery/",
    description:
      "An index of public component libraries and the components that make them up.",
    tags: ["Website", "Design systems"],
    thumbnail: "/component-gallery.png",
  },
  {
    title: "Material Design",
    url: "https://m3.material.io/components",
    description:
      "Google’s open-source design system.",
    tags: ["Website", "Design systems"],
    thumbnail: "/material-design.jpg",
  },
  {
    title: "Notion",
    url: "https://www.notion.so/desktop",
    description:
      "Google’s open-source design system.",
    tags: ["App"],
    thumbnail: "/notion.jpg",
  },
  {
    title: "About Face",
    url: "https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf",
    description:
      "A comprehensive guide to interaction design, focusing on creating user-friendly digital interfaces.",
    tags: ["Book", "Product design", "PDF"],
    thumbnail: "/about-face.jpeg",
  },
  {
    title:
      "Extra Bold: A Feminist, Inclusive, Anti-racist, Nonbinary Field Guide for Graphic Designers",
    url: "https://transreads.org/wp-content/uploads/2021/08/2021-08-02_61074a87c974d_extrabold.pdf",
    description:
      "A field guide for graphic designers that emphasizes inclusivity and diversity in design practices.",
    tags: ["Book", "Graphic design", "Inclusivity", "PDF"],
    thumbnail: "/extra-bold.png",
  },
  {
    title: "Mismatch",
    url: "https://mitpress.mit.edu/9780262539487/mismatch/",
    description:
      "A book that examines the consequences of excluding people from design decisions and offers strategies for creating more inclusive products.",
    tags: ["Book", "Inclusivity", "Product design"],
    thumbnail: "/mismatch.jpg",
  },
  {
    title:
      "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
    url: "https://eng317hannah.wordpress.ncsu.edu/files/2020/01/Krug_Steve_Dont_make_me_think_revisited___a_cz-lib.org_.pdf",
    description:
      "A straightforward guide to web usability that emphasizes simplicity and user experience.",
    tags: ["Book", "Usability", "PDF"],
    thumbnail: "/dont-make-me-think.jpg",
  },
  {
    title: "Prioritizing Web Usability",
    url: "https://www.nngroup.com/books/prioritizing-web-usability/",
    description:
      "A detailed guide on web usability that focuses on prioritizing user needs and improving website functionality.",
    tags: ["Book", "Usability"],
    thumbnail: "/prioritizing-web-usability.jpg",
  },
  {
    title:
      "How to Make Sense of Any Mess: Info Architecture for Everybody",
    url: "https://www.howtomakesenseofanymess.com/chapter1/10/identify-the-mess/",
    description:
      "A practical guide to Info architecture, helping readers organize and structure Info more effectively.",
    tags: ["Book", "Info architecture"],
    thumbnail: "/make-sense-mess.jpg",
  },
  {
    title: "Thinkertoys",
    url: "https://www.amazon.com/Thinkertoys-Creative-Thinking-Techniques-Michael-Michalko-ebook/dp/B004CFAWU2",
    description:
      "A handbook of creative thinking techniques designed to help individuals and teams generate innovative ideas.",
    tags: ["Book", "Creativity"],
    thumbnail: "/thinkertoys.jpg",
  },
  {
    title: "The Artist’s Way",
    url: "https://www.amazon.com/Artists-Way-25th-Anniversary/dp/0143129252",
    description:
      "A self-help book that provides a twelve-week program to help artists and creatives recover and enhance their creativity.",
    tags: ["Book", "Creativity"],
    thumbnail: "/artists-way.jpg",
  },
  {
    title: "The Design of Everyday Things",
    url: "https://dl.icdst.org/pdfs/files4/4bb8d08a9b309df7d86e62ec4056ceef.pdf",
    description:
      "A classic book that explores the principles of good design and how they contribute to the usability of everyday objects.",
    tags: ["Book", "Product design", "PDF"],
    thumbnail: "/design-everyday-things.jpg",
  },
  {
    title: "Daily Rituals",
    url: "https://upskillshare.com/wp-content/uploads/2021/03/Daily-Rituals-pdf-_-How-Artists-Work-UPSKILLSHARE.pdf",
    description:
      "An exploration of the daily routines and habits of famous artists, writers, and thinkers, offering insights into their creative processes.",
    tags: ["Book", "Creativity", "PDF"],
    thumbnail: "/daily-rituals.jpg",
  },
  // Add more resources as needed
];


const allTags = [...new Set(resources.flatMap((resource) => resource.tags))];

export default function Home() {
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.topsection}>
            <h1>Resources</h1>
            <p>
              I'm{" "}
              <Link href="https://www.hanacoon.com/" target="_blank">
                Hana
              </Link>
              , a product designer and creative who loves learning and sharing
              what I know. Here are some resources that have helped me in my
              design career. I hope you find them useful!
            </p>
            <TagFilter
              tags={allTags}
              selectedTag={selectedTag}
              onSelectTag={setSelectedTag}
            />
          </div>{" "}
          <ResourceGrid resources={resources} selectedTag={selectedTag} />
        </div>
      </main>
    </div>
  );
}
