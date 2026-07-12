<script lang="ts">
  import type { ShippingAddress } from '../lib/shipping';
  import { getCourierShippingCost } from '../lib/shipping';
  import type { CartItem } from '../lib/products';

  export let cart: CartItem[] = [];
  export let cartTotal: number = 0;

  let fullName = '';
  let email = '';
  let phone = '';
  let streetAddress = '';
  let city = '';
  let province = 'KwaZulu-Natal';
  let postalCode = '';
  let deliveryType: 'courier' | 'pickup' = 'pickup';
  let courierCost = 0;
  let loading = false;
  let itemsCount = 0;
  let lastCourierQuery = '';

  $: itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  $: if (deliveryType === 'courier') {
    const allFilled = streetAddress.trim() && city.trim() && province.trim() && postalCode.trim();
    if (allFilled) {
      const query = [
        streetAddress.trim(),
        city.trim(),
        province.trim(),
        postalCode.trim(),
        itemsCount
      ].join('|');
      if (!loading && query !== lastCourierQuery) {
        lastCourierQuery = query;
        updateCourierCost();
      }
    } else {
      courierCost = 0;
      lastCourierQuery = '';
    }
  } else {
    courierCost = 0;
    lastCourierQuery = '';
  }

  async function updateCourierCost() {
    if (deliveryType !== 'courier') {
      courierCost = 0;
      return;
    }

    loading = true;
    courierCost = await getCourierShippingCost(itemsCount, {
      fullName,
      email,
      phone,
      streetAddress,
      city,
      province,
      postalCode
    });
    loading = false;
  }
</script>

<section class="bg-white px-4 py-16 text-black">
  <h2 class="text-2xl text-center font-bold">Secure Checkout</h2>
  <div class="box mx-auto rounded-2xl bg-white p-8">
    <div class="flex flex-col gap-8 lg:flex-row">
      <div class="flex-1 space-y-6">
        <form class="space-y-6 border border-black/10 p-8 rounded-lg">
          <h2 class="text-xl font-bold">Shipping information</h2>

          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label for="name">Full name *</label>
              <input
                id="name"
                class="w-full rounded-lg border border-black/10 px-4 py-2"
                placeholder="John Doe"
                bind:value={fullName}
                required
              />
            </div>
            <div>
              <label for="email">Email Address *</label>
              <input
                id="email"
                class="w-full rounded-lg border border-black/10 px-4 py-2"
                type="email"
                placeholder="john@example.com"
                bind:value={email}
                required
              />
            </div>
            <div class="col-span-2">
              <label for="street">Street Adress *</label>
              <input
                id="street"
                class="w-full rounded-lg border border-black/10 px-4 py-2"
                placeholder="123 Main Street, Apartment 4B"
                bind:value={streetAddress}
                required={deliveryType === 'courier'}
              />
            </div>
            <div>
              <label for="city">City *</label>
              <input
                id="city"
                class="w-full rounded-lg border border-black/10 px-4 py-2"
                placeholder="Durban"
                bind:value={city}
                required={deliveryType === 'courier'}
              />
            </div>
            <div>
              <label for="province">Province *</label>
              <select
                id="province"
                class="w-full rounded-lg border border-black/10 px-4 py-2"
                bind:value={province}
                required={deliveryType === 'courier'}
              >
                <option value="Eastern Cape">Eastern Cape</option>
                <option value="Free State">Free State</option>
                <option value="Gauteng">Gauteng</option>
                <option value="KwaZulu-Natal" selected>KwaZulu-Natal</option>
                <option value="Limpopo"> Limpopo</option>
                <option value="Mpumalanga">Mpumalanga</option>
                <option value="North West">North West</option>
                <option value="Northern Cape">Northern Cape</option>
                <option value="Western Cape">Western Cape</option>
              </select>
            </div>
            <div>
              <label for="postcode">Postal Code * </label>
              <input
                id="postcode"
                class="w-full rounded-lg border border-black/10 px-4 py-2"
                placeholder="4001"
                bind:value={postalCode}
                required={deliveryType === 'courier'}
              />
            </div>
            <div>
              <label for="phone">Phone Number *</label>
              <input
                id="phone"
                class="w-full rounded-lg border border-black/10 px-4 py-2"
                placeholder="083 123 4567"
                bind:value={phone}
                required
              />
            </div>
            <div class="col-span-2">
              <label for="note">Order Note (optional)</label>
              <textarea
                id="note"
                class="w-full rounded-lg border border-black/10 px-4 py-2 min-h-20"
                placeholder="Any special instruction for your order (e.g delivery instructions, gift message)..."
              ></textarea>
            </div>
          </div>
        </form>

        <div class="rounded-2xl border border-black/10 p-6 space-y-4">
          <h3 class="text-xl font-semibold">Delivery options</h3>
          <label
            class="flex items-center gap-3 rounded-md border border-black/10 px-4 py-4 cursor-pointer hover:bg-amber-400"
          >
            <input
              type="radio"
              name="delivery"
              value="pickup"
              bind:group={deliveryType}
              onchange={updateCourierCost}
              class="accent-(--accent)"
            />
            <div class="flex flex-col text-sm">
              <span class="font-bold">Store pickup</span>
              <span class="text-[#737373]">Collect from our store</span>
            </div>
          </label>
          <label
            class="flex items-center gap-3 rounded-md border border-black/10 px-4 py-4 cursor-pointer hover:bg-amber-400"
          >
            <input
              type="radio"
              name="delivery"
              value="courier"
              bind:group={deliveryType}
              onchange={updateCourierCost}
              class="accent-(--accent)"
            />
            <div class="flex flex-col text-sm">
              <span class="font-bold">Courier delivery</span>
              <span class="text-[#737373]">Delivered to your door</span>
            </div>
          </label>
        </div>
      </div>

      <div class="w-full max-w-sm rounded-lg border border-black/10 p-6">
        <h3 class="text-xl font-semibold">Cart items</h3>
        <div class="mt-4">
          {#each cart as item}
            <div class="rounded-2xl bg-white pt-4 pb-1">
              <div class="flex items-center justify-between gap-3">
                <div class="flex gap-4 items-center">
                  <img src={item.image} class="w-10 h-10" alt="product" />
                  <div>
                    <p class="font-semibold">{item.name}</p>
                    <p class="text-sm text-black/60">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p class="font-semibold">R {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
            <hr class="mb-4 text-black/5" />
          {/each}
        </div>

        <div class="border-y border-black/10 py-6 space-y-4">
          <div class="flex items-center justify-between">
            <span>Items total</span>
            <span>R {cartTotal.toFixed(2)}</span>
          </div>
          <div class="flex items-center justify-between">
            <span>Shipping</span>
            <span
              >{deliveryType === 'pickup' ? 'Free (Pickup)' : `R ${courierCost.toFixed(2)}`}</span
            >
          </div>
          <div class="flex items-center justify-between text-black/70">
            <span>{deliveryType === 'pickup' ? 'VAT (15%)' : `Vat (15%) inc. shipping`}</span>
            <span>R {((cartTotal + courierCost) * 0.15).toFixed(2)}</span>
          </div>
          <hr class="border-black/10" />
          <div class="flex items-center justify-between text-lg font-semibold">
            <span>Total</span>
            <span class="text-(--accent)">R {((cartTotal + courierCost) * 1.15).toFixed(2)}</span>
          </div>
          <hr class="border-black/10" />
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            class="w-full rounded-lg bg-(--accent) px-4 py-2 text-sm font-semibold uppercase text-white"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
