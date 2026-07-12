<script lang="ts">
  import ProductItem from '../lib/ProductItem.svelte';
  import type { Category, Product } from '../lib/products';

  export let category: Category;
  export let products: Product[];
  export let onAdd: (product: Product) => void;
  export let onNavigate: (view: string) => void;

  const categories = [
    { value: 'books', label: 'Books' },
    { value: 'pens', label: 'Pens' },
    { value: 'phones', label: 'Phones' }
  ] as const;
</script>

<section class="bg-white px-4 py-16">
  <div class="box mx-auto flex max-md:flex-col gap-8">
    <aside class="categories text-black border border-black/10 rounded-md p-6 space-y-8">
      <h2 class="text-xl font-semibold uppercase">Categories</h2>

      <div class="button-group flex flex-col gap-2">
        {#each categories as item}
          <button
            type="button"
            class="rounded-sm px-4 py-2 text-left font-bold transition hover:bg-[#f5f5f5]"
            class:active={item.value === category}
            onclick={() => onNavigate(item.value)}
          >
            {item.label}
          </button>
        {/each}
      </div>
    </aside>

    <div class="grid gap-8 flex-1">
      <div class="grid gap-6 md:grid-cols-2">
        {#each products as product}
          <ProductItem {product} {onAdd} />
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  button.active {
    background-color: var(--accent);
    color: white;
  }
</style>
