<script lang="ts">
  import menuIcon from '../assets/icons/material-symbols--menu.svg?raw';
</script>

<nav class="bg-(--accent) w-full h-fit">
  <div class="box mx-auto flex items-center gap-1 px-4 h-13">
    <button
      class="gap-2 flex items-center justify-center font-medium rounded-md h-10 px-4 py-2 [&_svg]:size-5 [&_svg]:shrink-0"
      popovertarget="categories-popover"
    >
      {@html menuIcon}
      <span>Browse Shop</span>
    </button>
    <a href="/" class="py-4 md:px-2 px-4">Home</a>
    <a href="/" class="py-4 md:px-2 px-4">About Us</a>
    <a href="/" class="py-4 md:px-2 px-4">Contact</a>
    <a href="/" class="py-4 md:px-2 px-4">Shop</a>
    <a href="/" class="py-4 md:px-2 px-4">Recipies</a>
    <a href="/" class="py-4 md:px-2 px-4">Forum</a>
  </div>
</nav>

<div class="z-50 fixed bg-white text-black w-40 p-1 rounded-md" id="categories-popover" popover>
  <div class="categories flex flex-col">
    <a href="/" class="px-2 py-2 hover:bg-amber-400 rounded-md">Books</a>
    <a href="/" class="px-2 py-2 hover:bg-amber-400 rounded-md">Pens</a>
    <a href="/" class="px-2 py-2 hover:bg-amber-400 rounded-md">phones</a>
  </div>
</div>

<style>
  .box button {
    anchor-name: --categories;
  }

  #categories-popover {
    position-anchor: --categories;
    position-area: bottom center;
  }

  @media (max-width: 768px) {
    nav a {
      display: none;
    }
  }
</style>
