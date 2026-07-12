<script lang="ts">
  import CartItem from '../lib/CartItem.svelte';
  import type { CartItem as CartItemType } from '../lib/products';
  export let cart: CartItemType[] = [];
  export let cartTotal: number = 0;
  export let onUpdate: (id: string, delta: number) => void;
  export let onRemove: (id: string) => void;
  export let onCheckout: () => void;
  export let onNavigate: (view: string) => void;
</script>

<section class="bg-white px-4 py-16">
  <div class="box mx-auto rounded-2xl bg-white p-8">
    {#if cart.length === 0}
      <div class=" flex flex-col items-center">
        <div
          class="mt-8 rounded-2xl border border-dashed border-black/10 p-8 text-center text-black/70"
        >
          <h2 class="text-2xl font-bold">Your cart is empty.</h2>
          Looks like you haven't added any items to your cart yet.
        </div>
        <button
          class="w-fit rounded-md border bg-(--accent) px-4 py-2 text-md font-bold"
          onclick={() => onNavigate('home')}>Continue shopping</button
        >
      </div>

      <div
        class="flex flex-col justify-center items-center gap-4 mt-8 rounded-md border border-black/10 w-fit mx-auto py-6"
      >
        <h3 class="text-black text-2xl">Cart Features</h3>
        <p class="text-black/50">
          Your cart information is securely stored and ready for checkout.
        </p>

        <div class=" flex justify-around p-8 gap-4">
          <div class=" bg-[#f5f5f5] flex flex-col items-center px-12 py-4">
            <h3 class="text-black">✓ Save Items</h3>
            <p class="text-black/50">Save your favourites</p>
          </div>
          <div class=" bg-[#f5f5f5] flex flex-col items-center px-12 py-4">
            <h3 class="text-black">✓ Secure Checkout</h3>
            <p class="text-black/50">100% secure payment</p>
          </div>
          <div class=" bg-[#f5f5f5] flex flex-col items-center px-12 py-4">
            <h3 class="text-black">✓ Fast Delivery</h3>
            <p class="text-black/50">Track your order</p>
          </div>
        </div>
      </div>
    {:else}
      <h2 class="text-black text-3xl font-bold">Shopping Cart</h2>
      <div class=" flex gap-12">
        <div class="mt-8 space-y-4 w-full">
          {#each cart as item}
            <CartItem {item} {onUpdate} {onRemove} />
          {/each}
        </div>

        <div
          class="flex flex-col gap-6 mt-8 rounded-2xl border border-black/10 p-6 text-black w-full md:w-125 h-fit"
        >
          <h2 class="text-xl font-bold">Order Summary</h2>
          <hr class=" text-black/10" />
          <div class="flex items-center justify-between text-lg font-semibold">
            <span>Subotal: </span><span>R {cartTotal.toFixed(2)}</span>
          </div>
          <p class="text-sm text-black/60">Tax and shipping calculated at checkout</p>
          <button
            class=" w-full rounded-lg bg-(--accent) px-4 py-3 text-sm font-semibold uppercase text-white hover:scale-105 transition-all"
            onclick={onCheckout}>Proceed to Checkout</button
          >

          <button
            class="w-full rounded-lg bg-white border text-black border-black/10 px-4 py-3 text-sm font-semibold uppercase hover:bg-amber-400"
            onclick={() => onNavigate('home')}>Continue shopping</button
          >
        </div>
      </div>
    {/if}
  </div>
</section>
