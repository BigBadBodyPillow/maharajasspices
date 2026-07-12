<script lang="ts">
  import CategoryPage from './CategoryPage.svelte';
  import type { Product } from '../lib/products';

  export let products: Product[];
  export let onAdd: (product: Product) => void;
  export let onNavigate: (view: string) => void;
</script>

<CategoryPage category="pens" {products} {onAdd} {onNavigate} />
