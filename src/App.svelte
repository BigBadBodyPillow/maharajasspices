<script lang="ts">
  import Header from './lib/Header.svelte';
  import Navbar from './lib/Navbar.svelte';
  import Hero from './lib/Hero.svelte';
  import Brand from './lib/Brand.svelte';
  import Footer from './lib/Footer.svelte';
  import CartItem from './lib/CartItem.svelte';
  import BooksPage from './pages/BooksPage.svelte';
  import PensPage from './pages/PensPage.svelte';
  import PhonesPage from './pages/PhonesPage.svelte';
  import CheckoutPage from './pages/CheckoutPage.svelte';
  import HomePage from './pages/HomePage.svelte';
  import AuthPage from './pages/AuthPage.svelte';
  import CartPage from './pages/CartPage.svelte';
  import {
    productCatalog,
    type Category,
    type Product,
    type CartItem as CartItemType
  } from './lib/products';

  const images = [
    {
      path: 'https://picsum.photos/1400/600',
      id: 'image1',
      heading: 'Heading text 1',
      p: 'Some Longer Body Text 1'
    },
    {
      path: 'https://picsum.photos/1500/600',
      id: 'image2',
      heading: 'Heading text 2',
      p: 'Some Longer Body Text 2'
    },
    {
      path: 'https://picsum.photos/1600/600',
      id: 'image3',
      heading: 'Heading text 3',
      p: 'Some Longer Body Text 3'
    }
  ];

  type View = 'home' | 'auth' | 'cart' | 'checkout' | Category;

  let currentView: View = 'home';
  let isLoggedIn = false;
  let fullName = '';
  let cart: CartItemType[] = [];

  let activeCategory: Category;
  $: activeCategory =
    currentView === 'books' || currentView === 'pens' || currentView === 'phones'
      ? (currentView as Category)
      : 'books';

  $: cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  $: cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function navigate(view: string) {
    currentView = view as View;
  }

  function addToCart(product: Product) {
    const existing = cart.find((c) => c.id === product.id);
    if (existing) {
      existing.quantity += 1;
      cart = [...cart];
    } else {
      cart = [...cart, { ...product, quantity: 1 }];
    }
  }

  function updateQuantity(id: string, delta: number) {
    cart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
      )
      .filter((item) => item.quantity > 0);
  }

  function removeFromCart(id: string) {
    cart = cart.filter((i) => i.id !== id);
  }

  function checkout() {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    currentView = 'checkout';
  }

  // function handlePlaceOrder(payload: {
  //   address: any | null;
  //   deliveryType: 'courier' | 'pickup';
  //   courierCost: number;
  // }) {
  //   const purchasedProducts = cart.map((item) => ({
  //     product: item.name,
  //     quantity: item.quantity,
  //     price: item.price,
  //     lineTotal: item.quantity * item.price
  //   }));
  //   console.log('Order placed', {
  //     deliveryType: payload.deliveryType,
  //     courierCost: payload.courierCost,
  //     address: payload.address,
  //     items: purchasedProducts,
  //     total: cartTotal + payload.courierCost
  //   });
  //   alert('Your order has been placed successfully.');
  //   cart = [];
  //   currentView = 'home';
  // }
</script>

<main>
  <Header
    onNavigate={navigate}
    {cartCount}
    userLabel={isLoggedIn ? fullName : 'Log in / Register'}
  />

  <Navbar onNavigate={navigate} />

  {#if currentView === 'home'}
    <Hero {images} />

    <section class="shop-and-apply bg-white px-4 py-8">
      <div class="box mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          class="transition-all duration-700 ease-out opacity-100 translate-y-0 translate-x-0 scale-100 animate-fade-in"
        >
          <div class="group relative min-h-75 overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/600/300"
              alt="Become a Stockist"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div class="absolute inset-0 bg-linear-to-r from-black/70 to-black/30"></div>
            <div class="relative z-10 flex h-full flex-col justify-center p-8">
              <h2 class="mb-4 text-3xl font-bold md:text-4xl">
                Lorem <br />ipsum <br />dolor sit.
              </h2>
              <p class="mb-6 text-lg">Lorem ipsum, dolor sit amet consectetur.</p>
              <a
                href="/"
                class="inline-flex h-11 w-fit items-center justify-center rounded-md bg-(--accent) px-8 text-sm font-bold uppercase transition-all hover:scale-105"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div class="group relative min-h-75 overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/600/300"
            alt="Become a Stockist"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div class="absolute inset-0 bg-linear-to-r from-(--accent)/90 to-(--accent)/60"></div>
          <div class="relative z-10 flex h-full flex-col justify-center p-8">
            <h2 class="mb-4 text-3xl font-bold md:text-4xl">
              Dolor<br />sit amet<br />consectetur.
            </h2>
            <p class="mb-6 text-lg">Lorem ipsum dolor sit amet.</p>
            <a
              href="/"
              class="inline-flex h-11 w-fit items-center justify-center rounded-md bg-(--bg) px-8 text-sm font-bold uppercase transition-all hover:scale-105"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="our-brand bg-(--bg) py-16">
      <div class="box mx-auto px-4">
        <h2 class="mb-12 w-full text-center text-3xl font-bold text-(--accent) animate-fade-in">
          Our Brands
        </h2>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </div>
      </div>
    </div>
  {:else if currentView === 'auth'}
    <AuthPage
      onLogin={(name) => {
        isLoggedIn = true;
        fullName = name || 'Guest';
        currentView = 'home';
      }}
    />
  {:else if currentView === 'cart'}
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
              onclick={() => navigate('home')}
            >
              Continue shopping
            </button>
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
                <CartItem {item} onUpdate={updateQuantity} onRemove={removeFromCart} />
              {/each}
            </div>

            <div
              class="flex flex-col gap-6 mt-8 rounded-2xl border border-black/10 p-6 text-black w-full md:w-125 h-fit"
            >
              <h2 class="text-xl font-bold">Order Summary</h2>
              <hr class=" text-black/10" />
              <div class="flex items-center justify-between text-lg font-semibold">
                <span>Subotal: </span>
                <span>R {cartTotal.toFixed(2)}</span>
              </div>
              <p class="text-sm text-black/60">Tax and shipping calculated at checkout</p>
              <button
                class=" w-full rounded-lg bg-(--accent) px-4 py-3 text-sm font-semibold uppercase text-white hover:scale-105 transition-all"
                onclick={checkout}
              >
                Proceed to Checkout
              </button>

              <button
                class="w-full rounded-lg bg-white border text-black border-black/10 px-4 py-3 text-sm font-semibold uppercase hover:bg-amber-400"
                onclick={() => navigate('home')}
              >
                Continue shopping
              </button>
            </div>
          </div>
        {/if}
      </div>
    </section>
  {:else if currentView === 'books'}
    <BooksPage products={productCatalog.books} onAdd={addToCart} onNavigate={navigate} />
  {:else if currentView === 'pens'}
    <PensPage products={productCatalog.pens} onAdd={addToCart} onNavigate={navigate} />
  {:else if currentView === 'phones'}
    <PhonesPage products={productCatalog.phones} onAdd={addToCart} onNavigate={navigate} />
  {:else if currentView === 'checkout'}
    <CheckoutPage {cart} {cartTotal} />
  {/if}

  <Footer />
</main>
