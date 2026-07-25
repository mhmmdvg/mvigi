import React from 'react';
import Paragraph from '../shared/Paragraph';

export default function AboutMe() {
  return (
    <section className="flex w-full flex-col">
      <Paragraph title="About Me">
        <p className="font-light">
          Hey there! 👋 I&apos;m a passionate Mobile Developer, specializing in
          cross-platform and native development using Kotlin Multiplatform,
          SwiftUI, and Jetpack Compose. Experienced in building scalable mobile
          applications with shared business logic and fully native user
          interfaces.
        </p>
      </Paragraph>
    </section>
  );
}
