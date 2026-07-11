<script module lang="ts">
  export interface Product {
    id: string;
    image: string;
    brand: string;
    name: string;
    price: number;
  }
</script>

<script lang="ts">
  import cartIcon from '../assets/icons/mdi--cart.svg?raw';

  export let product: Product;
  export let onAdd: (product: Product) => void;
</script>

<article class="rounded-2xl bg-white p-6 border border-black/10 group">
  <img
    src={product.image}
    alt={product.name}
    class="rounded-lg object-cover transition-transform duration-300 group-hover:scale-104"
  />
  <h3 class="mt-4 text-xs font-semibold tracking-[0.2em] text-[#737373]">Brand: {product.brand}</h3>
  <h3
    class="text-lg font-semibold text-black group-hover:text-(--accent) transition-colors duration-300"
  >
    {product.name}
  </h3>
  <div class="mt-6 flex flex-col gap-3">
    <span class="text-xl font-bold text-(--accent)">R{product.price}</span>
    <button
      class="w-full h-fit flex justify-center gap-3 rounded-md bg-(--accent) px-4 py-2 text-sm font-semibold text-white [&_svg]:size-6 [&_svg]:shrink-0 hover:scale-105 transition-all"
      onclick={() => onAdd(product)}
    >
      {@html cartIcon}
      Add to cart
    </button>
  </div>
</article>
