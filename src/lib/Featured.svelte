<script lang="ts">
  import heartIcon from '../assets/icons/mdi--heart.svg?raw';
  import cartIcon from '../assets/icons/mdi--cart.svg?raw';

  export let img = 'https://picsum.photos/400/400';
  export let brand = "Maharaja's Spices";
  export let title = '7 Pistol Seasoning';
  export let price = 'R6.99 - R103.99';
  export let sizes = '4 sizes available';
</script>

<div class="animate-fade-in-up" style="animation-delay: 0s;">
  <div
    class="rounded-lg group overflow-hidden transition-all duration-300 animate-fade-in cursor-pointer border-2 border-mauve-100"
  >
    <a class="block" href="/"
      ><div class="relative overflow-hidden aspect-square bg-white">
        <img
          src={img}
          alt={title}
          class="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
        /><button
          class="favourite absolute top-2 text-black left-2 p-2.5 bg-white/80 hover:bg-white rounded-full transition-all z-10 min-w-11 min-h-11 flex items-center justify-center opacity-0 group-hover:opacity-100"
          aria-label="Add to favorites"
          aria-pressed="false"
        >
          {@html heartIcon}
        </button>
      </div>
      <div class="p-3 md:p-4">
        <p class="text-xs md:text-sm text-mauve-500 mb-1 truncate">Brand: {brand}</p>
        <h3
          class="font-semibold text-sm md:text-base line-clamp-2 mb-2 min-h-10 transition-colors duration-300 group-hover:text-(--accent) text-black"
        >
          {title}
        </h3>

        <div class="flex items-center gap-2 mb-2">
          <span class="text-base md:text-lg font-bold text-(--accent)">{price}</span>
        </div>
        <p class="text-xs text-mauve-500">{sizes}</p>
      </div></a
    >
    <div class="p-4 pt-0 flex items-center gap-2">
      <button
        class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-(--accent) text-white hover:bg-(--accent)/90 transition-all hover:scale-105 h-10 px-4 py-2 flex-1 min-h-11"
        >{@html cartIcon}<span>Select Size</span><span class="sr-only"> - {title}</span></button
      >
    </div>
  </div>
</div>
