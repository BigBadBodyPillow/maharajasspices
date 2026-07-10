<script>
  import maharajaspicesLogo from '../assets/logo-main-fcbb9625.webp';
  import searchIcon from '../assets/icons/mynaui--search.svg?raw';
  import cartIcon from '../assets/icons/mdi--cart.svg?raw';
  import favouriteIcon from '../assets/icons/mdi--heart.svg?raw';
  import recentIcon from '../assets/icons/material-symbols--history.svg?raw';
  import logInIcon from '../assets/icons/material-symbols--person.svg?raw';
  import chevronIcon from '../assets/icons/glyphs--chevron-bold.svg?raw';
</script>

<header class=" top-0 bg-(--bg)">
  <div
    class="quick-access box flex mx-auto px-4 py-2 justify-between text-(--accent) max-md:hidden"
  >
    <div class="contact flex items-center gap-4">
      <a href="tel:068405137" class="text-xs lg:text-sm font-semibold hover:underline"
        >Hotline: 068 405 1374</a
      >
      <span class="divider"></span>
      <a
        href="mailto:e-commerce@maharajasspices.co.za"
        class="text-xs lg:text-sm hover:underline max-lg:hidden">e-commerce@maharajasspices.co.za</a
      >
    </div>

    <div class="button-group flex items-center gap-4">
      <a href="/" class="text-xs lg:text-sm hover:underline">Become a Stockist</a>
      <span class="divider"></span>
      <a href="/" class="text-xs lg:text-sm hover:underline">Track Order</a>
      <span class="divider"></span>
      <a href="/" class="text-xs lg:text-sm hover:underline">Store Locator</a>
    </div>
  </div>

  <div class="main-header box mx-auto p-4 flex items-center justify-between gap-2 sm:gap-4">
    <a href="/" class="gap-2 flex items-center shrink-0 animate-fade-in">
      <img
        src={maharajaspicesLogo}
        alt="Maharajas Spices Logo"
        class="h-16 sm:h-20 md:h-28 lg:h-32 w-auto hover:scale-110 transition-transform duration-300"
      />
    </a>

    <div class="hidden md:flex flex-1 max-w-2xl mx-4">
      <div class="w-full relative">
        <div class="flex w-full items-stretch justify-center">
          <button
            class="flex items-center justify-between rounded-md px-3 py-2 text-sm w-32 h-auto rounded-r-none bg-white text-foreground"
          >
            <span class="text-mauve-800">All</span>

            <span
              class="text-mauve-800 rotate-180 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
              >{@html chevronIcon}</span
            >
          </button>

          <div class=" relative flex-1 m-0">
            <input
              class="search bg-white flex h-full w-full px-3 py-2 md:text-sm rounded-none border-x-0 text-black"
              type="search"
              placeholder="I'm shopping for..."
              value=""
            />
          </div>

          <button
            class="bg-(--accent) inline-flex items-center justify-center gap-2 text-sm font-medium [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all hover:scale-105 rounded-md px-8 rounded-l-none h-auto"
          >
            {@html searchIcon}
            Search</button
          >
        </div>
      </div>
    </div>

    <div class="button-group flex gap-4 items-center">
      <a href="/" class="[&_svg]:size-6 [&_svg]:shrink-0">{@html cartIcon}</a>
      <a href="/" class="[&_svg]:size-6 [&_svg]:shrink-0">{@html favouriteIcon}</a>
      <a href="/" class="[&_svg]:size-6 [&_svg]:shrink-0">{@html recentIcon}</a>
      <a href="/" class="[&_svg]:size-6 [&_svg]:shrink-0 flex flex-col items-center">
        {@html logInIcon}
        <span
          class="text-[8px] md:text-[10px] lg:text-xs mt-0.5 sm:mt-1 leading-tight sm:block text-center"
        >
          Log in <br /> Register
        </span>
      </a>
    </div>
  </div>

  <div class="md:hidden my-4 flex flex-1 max-w-2xl mx-auto max-sm:mx-4">
    <div class="w-full relative">
      <div class="flex gap-2 w-full items-stretch justify-center">
        <button
          class="flex items-center justify-between rounded-md px-3 py-2 text-sm w-32 h-auto bg-white text-foreground"
        >
          <span class="text-mauve-800">All</span>
          <span
            class="text-mauve-800 rotate-180 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            >{@html chevronIcon}</span
          >
        </button>
        <div class=" relative flex-1 m-0">
          <input
            class="search bg-white flex h-full w-full px-3 py-2 md:text-sm rounded-md text-black"
            type="search"
            placeholder="I'm shopping for..."
            value=""
          />
        </div>
        <button
          class="bg-(--accent) inline-flex items-center justify-center gap-2 text-sm font-medium [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all hover:scale-105 rounded-md px-4 h-auto"
        >
          {@html searchIcon}
        </button>
      </div>
    </div>
  </div>
</header>

<style>
  .divider {
    width: calc(var(--spacing) * 0.5) /* 0.125rem = 2px */;
    height: calc(var(--spacing) * 3) /* 0.75rem = 12px */;
    background-color: hsl(0, 0%, 45%) /* #737373 */;
  }

  @media (max-width: 1024px) {
    .divider {
      display: none;
    }
  }
</style>
