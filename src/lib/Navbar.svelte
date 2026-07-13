<script lang="ts">
  import menuIcon from '../assets/icons/material-symbols--menu.svg?raw';
  import { onMount } from 'svelte';

  export let onNavigate: (view: string) => void = () => {};

  let popoverElement: HTMLElement;
  let browseButton: HTMLElement;

  onMount(() => {
    popoverElement = document.getElementById('categories-popover') as HTMLElement;
    browseButton = document.getElementById('browse') as HTMLElement;

    // Handle click outside to close popover
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverElement?.matches(':popover-open')) {
        if (
          !popoverElement.contains(e.target as Node) &&
          !browseButton.contains(e.target as Node)
        ) {
          popoverElement.hidePopover();
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
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
    position: fixed;
    inset: auto auto auto auto;
  }

  #categories-popover:popover-open {
    position-anchor: --categories;
    position-area: bottom center;
    top: anchor(bottom) !important;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    nav button:not(#browse) {
      display: none;
    }

    #categories-popover:popover-open {
      position: fixed;
      width: 160px;
      right: auto;
      left: 1rem;
      transform: none;
    }
  }
</style>
