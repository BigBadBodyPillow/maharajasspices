<script>
  import Header from './lib/Header.svelte';
  import Navbar from './lib/Navbar.svelte';
  import Hero from './lib/Hero.svelte';

  const images = [
    { path: 'https://picsum.photos/1400/600', id: 'image1' },
    { path: 'https://picsum.photos/1500/600', id: 'image2' },
    { path: 'https://picsum.photos/1600/600', id: 'image3' }
  ];
</script>

<main>
  <Header />
  <Navbar />
  <Hero {images} imageWidth={1400} imageSpacing={0} />
</main>
