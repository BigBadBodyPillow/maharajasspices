<script>
  import Header from './lib/Header.svelte';
  import Navbar from './lib/Navbar.svelte';
  import Hero from './lib/Hero.svelte';
  import Brand from './lib/Brand.svelte';
  import Values from './lib/Values.svelte';
  import Promotion from './lib/Promotion.svelte';

  import arrowIcon from './assets/icons/maki--arrow.svg?raw';
  import Featured from './lib/Featured.svelte';
  import Footer from './lib/Footer.svelte';

  const images = [
    {
      path: 'https://picsum.photos/1400/600',
      id: 'image1',
      heading: 'Heading text 1',
      p: 'Some Longer Body Text 1'
    },
    {
      path: 'https://picsum.photos/1500/600',
      id: 'image2',
      heading: 'Heading text 2',
      p: 'Some Longer Body Text 2'
    },
    {
      path: 'https://picsum.photos/1600/600',
      id: 'image3',
      heading: 'Heading text 3',
      p: 'Some Longer Body Text 3'
    }
  ];
</script>

<main>
  <Header />

  <Navbar />

  <Hero {images} imageWidth={1400} imageSpacing={0} />

  <section class="shop-and-apply px-4 py-8 bg-white">
    <div class="box mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        class="transition-all duration-700 ease-out opacity-100 translate-y-0 translate-x-0 scale-100 animate-fade-in"
      >
        <div class="rounded-lg relative overflow-hidden min-h-75 group">
          <img
            src="https://picsum.photos/600/300"
            alt="Become a Stockist"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div class="absolute inset-0 bg-linear-to-r from-black/70 to-black/30"></div>
          <div class="relative z-10 p-8 flex flex-col justify-center h-full">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 f">
              Lorem <br />ipsum <br />dolor sit.
            </h2>
            <p class="text-lg mb-6" style="animation-delay: 0.1s;">
              Lorem ipsum, dolor sit amet consectetur.
            </p>
            <a
              class="bg-(--accent) inline-flex items-center justify-center gap-2 text-sm font-bold uppercase transition-all hover:scale-105 h-11 rounded-md px-8 w-fit"
              style="animation-delay: 0.2s;"
              href="/">Shop Now</a
            >
          </div>
        </div>
      </div>
      <div class="rounded-lg relative overflow-hidden min-h-75 group">
        <img
          src="https://picsum.photos/600/300"
          alt="Become a Stockist"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div class="absolute inset-0 bg-linear-to-r from-(--accent)/90 to-(--accent)/60"></div>
        <div class="relative z-10 p-8 flex flex-col justify-center h-full">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 f">
            Dolor<br />sit amet<br />consectetur.
          </h2>
          <p class="text-lg mb-6" style="animation-delay: 0.1s;">Lorem ipsum dolor sit amet.</p>
          <a
            class="bg-(--bg) inline-flex items-center justify-center gap-2 text-sm font-bold uppercase transition-all hover:scale-105 h-11 rounded-md px-8 w-fit"
            style="animation-delay: 0.2s;"
            href="/become-stockist">Apply Now</a
          >
        </div>
      </div>
    </div>
  </section>

  <div class="our-brand bg-(--bg) py-16">
    <div class="box mx-auto px-4">
      <h2 class="w-full text-center text-3xl font-bold mb-12 text-(--accent) animate-fade-in">
        Our Brands
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Brand />
        <Brand />
        <Brand />
        <Brand />
        <Brand />
      </div>
    </div>
  </div>

  <div class="our-brand bg-black py-16">
    <div class="box mx-auto px-4">
      <div class="mb-12">
        <h2 class="w-full text-center text-3xl font-bold text-(--accent) animate-fade-in">
          Our Values
        </h2>
        <div class="w-125 mx-auto mt-3 text-center animate-fade-in stars"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Values
          title="Quality - No Compromise"
          text="Quality is at the heart of everything we do from the spices we source to the people we hire. We take pride in delivering only the best because we know that every pinch of spice tells a story."
        />
        <Values
          title="Integrity - Always Do What's Right"
          text="We believe in doing the right thing, even when it's the hard thing. Whether it's in our sourcing, our workplace culture, or our customer relationships, integrity guides us."
        />
        <Values
          title="Passion - Love in Every Layer"
          text="We don't just make spices, we bring them to life. Our passion is deeply rooted in our culture, our people, and our purpose. It's in the warmth of our kitchens, the joy in our team, and the unforgettable flavors we share."
        />
        <Values
          title="Innovation - Tradition with a Twist"
          text="At Maharaja's Spices, we honor our roots while embracing the future. We're constantly experimenting, improving, and reimagining how we do things."
        />
      </div>
    </div>
  </div>

  <div class="bg-white px-4 py-16">
    <div class="box mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="flex items-center justify-center">
        <div class="bg-(--accent) flex flex-col h-full rounded-lg p-12 gap-4 max-w-150">
          <h3 class="text-2xl font-bold">About Maharajas Spices</h3>
          <div class="flex flex-col gap-4 text-lg">
            <p>
              Maharaja's Spices is a wholesale and manufacturing business specializing in the
              development of premium-quality, authentic spices, seasonings, sauces, batters,
              coatings, marinades, pastes, and more.
            </p>
            <p>
              Founded in 2012 by Elaine Pillay, the business has grown from strength to strength by
              delivering consistent quality, competitive pricing, and exceptional customer service
              to the retail, food service, and manufacturing sectors.
            </p>
          </div>
          <a
            class="bg-(--bg) inline-flex items-center justify-center text-sm font-bold uppercase transition-all hover:scale-105 h-11 rounded-md px-8 w-fit"
            style="animation-delay: 0.2s;"
            href="/become-stockist">About us</a
          >
        </div>
      </div>
      <div class="rounded-lg relative overflow-hidden min-h-100 group">
        <img
          src="https://picsum.photos/600/400"
          alt="Become a Stockist"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </div>

  <div class="bg-[#f5f5f5] py-16">
    <div class="box mx-auto px-4">
      <div class="grid grid-colls-1 md:grid-cols-2 gap-6 mb-16">
        <Promotion item="Grains" text="Premium Quality Grains" price="R16.99" />
        <Promotion item="Pastes & Rubs" text="Rich flavors for authentic cooking" price="R24.99" />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          class="transition-all duration-700 ease-out opacity-100 translate-y-0 translate-x-0 scale-100"
        >
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm relative overflow-hidden min-h-100 group order-2 lg:order-1"
          >
            <img
              src="https://picsum.photos/600/400"
              alt="Our Products"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              width="1244"
              height="829"
              loading="lazy"
              decoding="async"
            />
            <div class="absolute inset-0 bg-black/60"></div>
            <div
              class="relative z-10 p-12 flex flex-col justify-center h-full text-primary-foreground"
            >
              <h2 class="text-4xl font-bold mb-4 font-playfair animate-fade-in-up">Our Products</h2>
              <p class="text-lg mb-6 animate-fade-in-up">
                Maharaja's Spices are manufacturers of their products following high-quality
                industry-standards
              </p>
              <a
                class="inline-flex bg-(--accent) items-center justify-center gap-2 text-sm [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 font-bold uppercase transition-all hover:scale-105 h-11 rounded-md px-8 w-fit"
                href="/">Shop Now</a
              >
            </div>
          </div>
        </div>
        <div
          class="transition-all duration-700 ease-out opacity-100 translate-y-0 translate-x-0 scale-100"
        >
          <div class="rounded-lg bg-(--accent) p-12 order-1 lg:order-2 transition-all">
            <h2 class="text-4xl font-bold mb-6 font-playfair animate-fade-in-up">
              Become A Franchisee
            </h2>
            <p class="text-lg mb-8 animate-fade-in-up" style="animation-delay: 0.1s;">
              Embark on a journey to entrepreneurship by joining our franchise network. We support
              individuals across South Africa.
            </p>
            <a
              class="inline-flex items-center justify-center gap-2 text-sm [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 font-bold uppercase tracking-wide transition-all hover:scale-105 h-11 rounded-md px-8 bg-(--bg)"
              style="animation-delay: 0.2s;"
              href="/"
              >Apply Now
              {@html arrowIcon}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="featured-products bg-white py-16">
    <div
      class="transition-all duration-700 ease-out opacity-100 translate-y-0 translate-x-0 scale-100 box mx-auto px-4"
    >
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-4xl font-bold font-playfair animate-fade-in-up text-black">
          Featured Products
        </h2>
        <a
          class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-10 px-4 py-2 text-(--accent) animate-fade-in"
          style="animation-delay: 0.1s;"
          href="/"
          >View All
          {@html arrowIcon}
        </a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Featured
          brand="Maharaja's Spices"
          title="7 Pistol Seasoning"
          price="R6.99 - R103.99"
          sizes="4 sizes available"
          img="https://picsum.photos/400/400"
        />
        <Featured
          brand="G-Force"
          title="G-force Thunder Sauce"
          price="R21.99"
          sizes="4 sizes available"
          img="https://picsum.photos/400/400"
        />
        <Featured
          brand="Mother's Hand"
          title="Maharaja's Mother's Hand - Creamy Butter Chicken"
          price="R34.99"
          sizes="4 sizes available"
          img="https://picsum.photos/400/400"
        />
        <Featured
          brand="Curry In A Hurry"
          title="Maharaja's Durban Curry In A Hurry - Chicken Curry"
          price="R36.99"
          sizes=""
          img="https://picsum.photos/400/400"
        />
        <Featured
          brand="Maharaja's Spices"
          title="Beef Stock"
          price="R9.99 - R169.99"
          sizes="4 sizes available"
          img="https://picsum.photos/400/400"
        />
      </div>
    </div>
  </div>

  <Footer />
</main>

<style>
  .stars {
    height: 12px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ffb839' d='m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
  }
</style>
