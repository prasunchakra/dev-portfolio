import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-white shadow-lg rounded-lg pt-36 pb-36 pr-8 pl-8">
      <div class="flex items-center space-x-8">
        <img
          src="https://i.postimg.cc/G3QJmgkm/stream-Fusion-300-x-100-px.png"
          alt="Project Logo"
          class="h-auto w-96"
        />
        <!-- <h1 class="text-2xl font-bold">Stream Fusion</h1> -->
      </div>
      <p class="mt-4 text-gray-600">
        StreamFusion is poised to revolutionize the way we consume media,
        merging the realms of audio and video streaming into a seamless,
        immersive experience. At its core, StreamFusion is built on a robust,
        open-source framework that encourages innovation and collaboration among
        developers worldwide. By leveraging the collective expertise of the
        global development community, StreamFusion continually enhances its
        offerings, integrating cutting-edge technologies like AI-driven
        recommendations, high-definition audiovisual playback, and interactive
        content features. These advancements not only improve user experience
        but also push the boundaries of what streaming platforms can achieve.
        treamFusion is more than just a streaming service; it is a dynamic,
        collaborative ecosystem that adapts and grows. It represents the future
        of entertainment, where technology and creativity converge to deliver
        unparalleled audiovisual experiences. As StreamFusion continues to
        expand and evolve, it remains committed to its mission of bringing
        people together through the power of media, fostering a global community
        where anyone can enjoy, create, and share content effortlessly.
      </p>
      <div class="mt-6">
        <a
          href="https://streamfusion.prasunchakra.org/"
          target="_blank"
          class="text-blue-500 hover:text-blue-700"
          >Visit Live Website</a
        >
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <a
          href="https://github.com/prasunchakra/Stream-Fusion-Client"
          target="_blank"
          class="block bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
        >
          Client Repository
        </a>
        <a
          href="https://github.com/prasunchakra/Stream-Fusion-Server"
          target="_blank"
          class="block bg-green-500 text-white text-center py-2 rounded hover:bg-green-600"
        >
          Server Repository
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      a {
        transition: color 0.3s ease-in-out;
      }
      .hover\\:bg-blue-600:hover {
        background-color: #2563eb;
      }
      .hover\\:bg-green-600:hover {
        background-color: #15803d;
      }
    `,
  ],
})
export class ProjectDetailsComponent {}
