<script lang="ts">
  import Hero from '../lib/Hero.svelte';
  import Brand from '../lib/Brand.svelte';
  export let images: Array<{ path: string; id: string; heading: string; p: string }> = [];
</script>

<main>
  <Hero {images} />

  <section class="shop-and-apply bg-white px-4 py-8">
    <div class="box mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
      <div
        class="transition-all duration-700 ease-out opacity-100 translate-y-0 translate-x-0 scale-100 animate-fade-in"
      >
        <div class="group relative min-h-75 overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/600/300"
            alt="Become a Stockist"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div class="absolute inset-0 bg-linear-to-r from-black/70 to-black/30"></div>
          <div class="relative z-10 flex h-full flex-col justify-center p-8">
            <h2 class="mb-4 text-3xl font-bold md:text-4xl">
              Lorem <br />ipsum <br />dolor sit.
            </h2>
            <p class="mb-6 text-lg">Lorem ipsum, dolor sit amet consectetur.</p>
            <a
              href="/"
              class="inline-flex h-11 w-fit items-center justify-center rounded-md bg-(--accent) px-8 text-sm font-bold uppercase transition-all hover:scale-105"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div class="group relative min-h-75 overflow-hidden rounded-lg">
        <img
          src="https://picsum.photos/600/300"
          alt="Become a Stockist"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div class="absolute inset-0 bg-linear-to-r from-(--accent)/90 to-(--accent)/60"></div>
        <div class="relative z-10 flex h-full flex-col justify-center p-8">
          <h2 class="mb-4 text-3xl font-bold md:text-4xl">
            Dolor<br />sit amet<br />consectetur.
          </h2>
          <p class="mb-6 text-lg">Lorem ipsum dolor sit amet.</p>
          <a
            href="/"
            class="inline-flex h-11 w-fit items-center justify-center rounded-md bg-(--bg) px-8 text-sm font-bold uppercase transition-all hover:scale-105"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  </section>

  <div class="our-brand bg-(--bg) py-16">
    <div class="box mx-auto px-4">
      <h2 class="mb-12 w-full text-center text-3xl font-bold text-(--accent) animate-fade-in">
        Our Brands
      </h2>
      <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        <Brand />
        <Brand />
        <Brand />
        <Brand />
        <Brand />
      </div>
    </div>
  </div>
</main>
