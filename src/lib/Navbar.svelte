<script lang="ts">
  import menuIcon from '../assets/icons/material-symbols--menu.svg?raw';

  export let onNavigate: (view: string) => void = () => {};
</script>

<nav class="bg-(--accent) w-full h-fit">
  <div class="box mx-auto flex items-center gap-1 px-4 h-13">
    <button
      id="browse"
      class="gap-2 flex items-center justify-center font-medium rounded-md h-10 px-4 py-2 [&_svg]:size-5 [&_svg]:shrink-0"
      popovertarget="categories-popover"
    >
      {@html menuIcon}
      <span>Browse Shop</span>
    </button>

    <button class="py-4 md:px-2 px-4" onclick={() => onNavigate('home')}>Home</button>
    <button class="py-4 md:px-2 px-4">About Us</button>
    <button class="py-4 md:px-2 px-4">Contact</button>
    <button class="py-4 md:px-2 px-4">Shop</button>
    <button class="py-4 md:px-2 px-4">Recipies</button>
    <button class="py-4 md:px-2 px-4">Forum</button>
  </div>
</nav>

<div
  class="z-50 fixed bg-white text-black w-40 p-1 rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
  id="categories-popover"
  popover
>
  <div class="categories flex flex-col">
    <button
      type="button"
      class="px-2 py-2 hover:bg-amber-400 rounded-md text-left"
      onclick={() => onNavigate('books')}>Books</button
    >
    <button
      type="button"
      class="px-2 py-2 hover:bg-amber-400 rounded-md text-left"
      onclick={() => onNavigate('pens')}>Pens</button
    >
    <button
      type="button"
      class="px-2 py-2 hover:bg-amber-400 rounded-md text-left"
      onclick={() => onNavigate('phones')}>Phones</button
    >
  </div>
</div>

<style>
  #browse {
    anchor-name: --categories;
  }

  #categories-popover {
    position-anchor: --categories;
    position-area: bottom center;
  }

  @media (max-width: 768px) {
    nav button:not(#browse) {
      display: none;
    }
  }
</style>
