import Head from 'next/head'
import Link from 'next/link';
import React, { useState } from 'react';
import ResourceGrid from '../components/ResourceGrid';
import TagFilter from '../components/TagFilter';
import styles from '../components/index.module.css';


const resources = [
  {
    title: 'Designing for the Digital Age',
    url: 'https://example.com/resource1',
    description: 'A giant behemoth of a textbook about designing digital products. Remarkably helpful if you can make it through!',
    tags: ['Books', 'Product design']
  },
  {
    title: 'What Can a Body Do?',
    url: 'https://example.com/resource2',
    description: 'About designing for all different bodies.',
    tags: ['Books', 'Accessibility']
  },
  {
    title: 'The Component Library',
    url: 'https://example.com/resource2',
    description: 'An index of public component libraries and the components that make them up.',
    tags: ['Websites', 'Design systems']
  },
  // Add more resources as needed
];

const allTags = [...new Set(resources.flatMap(resource => resource.tags))];

export default function Home() {

  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Josefin Sans:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"
          />
    </Head> 

      <main>
        <div className={styles.container}>
        <h1>Resources</h1>
        <p>I'm <Link href='www.hanacoon.com'>Hana</Link>, a product designer and creative who loves to learn and share what I know. The following resources include anything that has ever helped me in my design career.</p>
        <TagFilter tags={allTags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
        <ResourceGrid resources={resources} selectedTag={selectedTag} />
      </div>
      </main>
    </div>
  )
}
