import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StepComponent],
  template: `
    <main class="flex flex-col flex-1 p-4">
      <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
      >
        <div
          class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
          <h2 class="font-medium text-4xl sm:text-5xl md:text-6xl">
            Hi! I'm <br /><span class="poppins text-violet-400">Prasun</span>
            Chakraborty <br />A Software
            <span class="poppins text-violet-400">Engineer</span>
          </h2>
          <p class="text-base sm:text-lg md:text-xl">
            My <span class="text-violet-400"> Tech Stack</span> includes <br />
            JavaScript for
            <span class="text-violet-400">Full Stack Development</span> Express,
            Nest, Angular, React <br />
            Python for
            <span class="text-violet-400">Machine Learning</span> Numpy, Pandas,
            Tenserflow
            <br />
          </p>
          <button
            class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
          >
            <div
              class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            ></div>
            <h4 class="relative z-9">
              <a href="#projects">Open Source Projects &rarr;</a>
            </h4>
          </button>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
          <img
            src="assets/images/certs.png"
            alt="Certificates"
            class="object-cover z-[2] max-h-[70vh]"
          />
        </div>
      </section>
      <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
          <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Explore My
            <span class="poppins text-violet-400">Open Source </span
            >Initiatives!
          </h3>
          <h6 class="text-large sm:text-xl md:text-2xl">
            Engage in open source projects. Your skills can make a world of
            difference.
            <span class="poppins text-violet-400">Collaborate now!</span>
          </h6>
        </div>

        <div class="flex justify-center space-x-4 -mt-10">
          <a
            href="https://topmate.io/prasunchakra"
            target="_blank"
            class="px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 hover:border-violet-700 duration-200"
          >
            <i class="fa-regular fa-comment-dots"></i>
            <p>Book a Brainstorm Session</p>
          </a>
          <a
            href="https://discord.gg/2jRyenRP"
            target="_blank"
            class="px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 hover:border-violet-700 duration-200"
          >
            <i class="fa-brands fa-discord"></i>
            <p>Join to discuss</p>
          </a>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          <app-step [step]="steps[0]">
            <p>
              Connect over content: Embrace a unique streaming experience where
              you
              <strong class="text-violet-400"
                >Create, curate, and consume!</strong
              >
              This platform boosts community ties with interactive features like
              shared playlists, live Q&A sessions, and more, all designed to
              deepen your media journey.
            </p>
          </app-step>
          <app-step [step]="steps[1]">
            <p>
              Discover a world of possibilities with our all-in-one platform
              <strong class="text-violet-400">book exotic trips,</strong>
              <strong class="text-violet-400">savor global cuisines,</strong>
              &
              <strong class="text-violet-400">
                and shop for rare treasures</strong
              >
              Everything from adventures to gourmet food and unique items,
              curated globally to enhance your life's journey.
            </p>
          </app-step>
          <app-step [step]="steps[2]">
            <p>
              Embark on a journey of
              <strong class="text-violet-400">financial discovery</strong>
              with an app designed to illuminate your path. Subtle yet profound,
              our tools evolve with your needs, offering insights that guide
              your every decision. Your future, reimagined—join us to explore
              the possibilities.!
            </p>
          </app-step>
        </div>
      </section>
    </main>
  `,
  styles: [``],
})
export class HomeComponent {
  steps = [
    {
      name: 'streamFusion',
      icon: 'fa-solid fa-film',
      description:
        'Smoljames Store is a a merchanising store created with Next.js, Commerce.js & Stripe! Commerce.js is a CMS for managing project and Stripe is used for all transaction handling.',
      href: 'https://streamfusion.prasunchakra.org/',
    },
    {
      name: 'feastFly',
      icon: 'fa-solid fa-cart-flatbed-suitcase',
      description:
        'Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.',
      href: 'https://feastfly.prasunchakra.org/',
    },
    {
      name: 'finView',
      icon: 'fa-solid fa-chart-line',
      description:
        'Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).',
      href: 'https://finview.prasunchakra.org/',
    },
  ];
}
