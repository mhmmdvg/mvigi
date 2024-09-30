import React from 'react';
import Paragraph from '../shared/Paragraph';

export default function AboutMe() {
  return (
    <section className="flex w-full flex-col">
      <Paragraph title="About Me">
        <p className="font-light">
          I&apos;m an enthusiastic Frontend and Mobile Developer with a strong
          focus on crafting responsive and dynamic web applications and mobile
          apps. With expertise in modern frameworks like React.js, Vue.js, React
          Native, as well as Swift and Kotlin for mobile development, I
          specialize in building seamless user interfaces that not only look
          great but also provide exceptional user experiences.
        </p>
      </Paragraph>
    </section>
  );
}
