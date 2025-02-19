import React from 'react';
import Paragraph from '../shared/Paragraph';

export default function AboutMe() {
  return (
    <section className="flex w-full flex-col">
      <Paragraph title="About Me">
        <p className="font-light">
          Hey there! 👋 I&apos;m a passionate Mobile and Frontend Developer who loves
          bringing ideas to life across all screens! I dive deep into native iOS
          development with both UIKit and SwiftUI, while on the Android side,
          I&apos;m right at home with Kotlin and Java. Need apps that work
          everywhere? I&apos;ve got you covered with Flutter and React Native for
          smooth cross-platform experiences! When it comes to web development, I
          enjoy crafting beautiful, interactive experiences using React.js and
          Vue.js. Whether it&apos;s a mobile app or a web platform, I&apos;m all about
          creating solutions that don&apos;t just work great – they feel great to use
          too! I&apos;m always excited to take on new challenges and transform ideas
          into reality. Let&apos;s build something awesome together! ✨
        </p>
      </Paragraph>
    </section>
  );
}
