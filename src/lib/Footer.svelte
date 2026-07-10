<script lang="ts">
  import searchIcon from '../assets/icons/mynaui--search.svg?raw';
  import FacebookIcon from '../assets/icons/ic--baseline-facebook.svg?raw';
  import InstagramIcon from '../assets/icons/line-md--instagram.svg?raw';
  import TiktokIcon from '../assets/icons/ic--baseline-tiktok.svg?raw';
</script>

<footer class="bg-(--bg)">
  <div class="box mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12">
    <div class="flex flex-col gap-3">
      <h3 class="text-xl font-bold">Adress</h3>
      <address class="text-[#737373]">
        Unit 17, 10 A, Rockwood Business Park, Woodlands Dr, Waterfall, Durban, 3610
      </address>
      <div class="links flex gap-4">
        <a href="/" class="[&amp;_svg]:size-6 text-(--accent) hover:text-(--accent)/50"
          >{@html FacebookIcon}</a
        >
        <a href="/" class="[&amp;_svg]:size-6 text-(--accent) hover:text-(--accent)/50"
          >{@html InstagramIcon}</a
        >
        <a href="/" class="[&amp;_svg]:size-6 text-(--accent) hover:text-(--accent)/50"
          >{@html TiktokIcon}</a
        >
      </div>
      <button
        class="w-fit px-4 py-2 bg-(--accent) rounded-md hover:scale-105 transition-all duration-300"
        >Subscrive to Our Newsletter</button
      >
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-xl font-bold">Quick Links</h3>
      <div class="flex flex-col gap-2 text-[#737373]">
        <a href="/" class="hover:text-(--accent)">Terms & Conditions</a>
        <a href="/" class="hover:text-(--accent)">Privacy Policy</a>
        <a href="/" class="hover:text-(--accent)">POPIA Compliance</a>
        <a href="/" class="hover:text-(--accent)">Shipping Policy</a>
        <a href="/" class="hover:text-(--accent)">Refund Policy</a>
        <a href="/" class="hover:text-(--accent)">careers</a>
      </div>
    </div>

    <div>
      <h3 class="uppercase text-xl font-bold">Search</h3>
      <div class=" my-4 flex flex-1 max-w-2xl mx-auto max-sm:mx-4">
        <div class="w-full relative">
          <div class="flex gap-2 w-full items-stretch justify-center">
            <div class=" relative flex-1 m-0">
              <input
                class="search bg-white flex h-full w-full px-3 py-2 md:text-sm rounded-md text-black"
                type="search"
                placeholder="Search products..."
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
    </div>
  </div>
  <hr />
  <div class="box mx-auto flex py-16 px-4 text-[#737373]">
    &copy; 2026 Maharaja's Spices | All Rights Reserved
  </div>
</footer>
