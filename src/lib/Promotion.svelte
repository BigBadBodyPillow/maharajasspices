<script lang="ts">
  export let item = 'Dolor';
  export let text = 'Lorem ipsum dolor sit amet.';
  export let price = 'R16.99';
</script>

<div class="rounded-lg relative overflow-hidden min-h-60 group">
  <img
    src="https://picsum.photos/600/300"
    alt="Become a Stockist"
    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    loading="lazy"
    decoding="async"
  />
  <div class="absolute inset-0 bg-linear-to-r from-black/70 to-black/60"></div>
  <div class="relative z-10 p-8 flex flex-col justify-center h-full">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 f">{item}</h2>
    <p class="text-lg mb-6" style="animation-delay: 0.1s;">{text}</p>
    <p class="text-2xl mb-3 font-bold" style="animation-delay: 0.1s;">Starting at {price}</p>
    <a
      class="bg-(--accent) inline-flex items-center justify-center gap-2 text-sm font-bold uppercase transition-all hover:scale-105 h-11 rounded-md px-8 w-fit"
      style="animation-delay: 0.2s;"
      href="/become-stockist">Shop Now</a
    >
  </div>
</div>
