<script module lang="ts">
  export interface CartItem {
    id: string;
    image: string;
    brand?: string;
    name: string;
    price: number;
    quantity: number;
  }
</script>

<script lang="ts">
  import binIcon from '../assets/icons/mdi--bin.svg?raw';

  export let item: CartItem;
  export let onUpdate: (id: string, delta: number) => void;
  export let onRemove: (id: string) => void;
</script>

<div class="flex flex-row items-center gap-3 rounded-2xl border border-black/10 p-4">
  <img
    src={item.image}
    alt={item.name}
    class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded shrink-0 bg-[#f5f5f5]"
  />
  <div class="flex flex-1 flex-col gap-4">
    <div class="flex flex-col">
      <h3 class="text-lg font-semibold text-black">{item.name}</h3>
      <p class="font-bold text-(--accent)">R{item.price}</p>
    </div>

    <div class="flex items-center gap-3 h-fit">
      <div class="border border-black/10 rounded-sm flex items-center gap-0">
        <button
          class="rounded-sm w-10 h-10 px-3 py-1 text-black hover:bg-amber-400 font-bold"
          onclick={() => onUpdate(item.id, -1)}
        >
          -
        </button>
        <span class="w-10 h-full text-center font-semibold text-black">{item.quantity}</span>
        <button
          class="rounded-sm w-10 h-10 px-3 py-1 text-black hover:bg-amber-400 font-bold"
          onclick={() => onUpdate(item.id, 1)}
        >
          +
        </button>
      </div>
      <button
        type="button"
        class="flex rounded-sm gap-2 hover:bg-amber-400 px-3 py-2 text-sm text-(--accent) [&_svg]:size-6 [&_svg]:shrink-0"
        onclick={() => onRemove(item.id)}
      >
        {@html binIcon}
        Remove
      </button>
    </div>
  </div>
</div>
