<script lang="ts">
  import menuIcon from '../assets/icons/material-symbols--menu.svg?raw';

  let categoriesVisible = $state(false);

  function toggleCategoriesVisible() {
    categoriesVisible = !categoriesVisible;
  }
</script>

<nav class="bg-(--accent) w-full h-fit">
  <div class="box mx-auto flex items-center gap-1 px-4 h-13">
    <button
      class="[anchor-name:--categories] gap-2 flex items-center justify-center font-medium rounded-md h-10 px-4 py-2 [&_svg]:size-4 [&_svg]:shrink-0"
      onclick={toggleCategoriesVisible}
    >
      {@html menuIcon}
      <span>Browse Shop</span></button
    >
    <a href="/" class="py-4 md:px-2 px-4">Home</a>
    <a href="/" class="py-4 md:px-2 px-4">About Us</a>
    <a href="/" class="py-4 md:px-2 px-4">Contact</a>
    <a href="/" class="py-4 md:px-2 px-4">Shop</a>
    <a href="/" class="py-4 md:px-2 px-4">Recipies</a>
    <a href="/" class="py-4 md:px-2 px-4">Forum</a>
  </div>
</nav>

<div
  class="categories fixed [position-anchor:--categories] [position-area:bottom_center] flex-col bg-white text-black w-40 p-1 rounded-md"
  class:active={categoriesVisible}
>
  <a href="/" class="px-2 py-2 hover:bg-amber-400 rounded-md">Books</a>
  <a href="/" class="px-2 py-2 hover:bg-amber-400 rounded-md">Pens</a>
  <a href="/" class="px-2 py-2 hover:bg-amber-400 rounded-md">phones</a>
</div>

<style>
  .categories {
    display: none;
  }
  .categories.active {
    display: flex;
  }
  @media (max-width: 768px) {
    nav a {
      display: none;
    }
  }
</style>
