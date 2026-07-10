<script lang="ts">
  export let title = '';
  export let text = '';
</script>

<a
  href="/"
  class="flex flex-col items-center justify-between min-h-50 min-w-71.75 transition-all group"
>
  <img
    src="https://picsum.photos/83/83"
    alt="temp brand"
    class="h-20.75 w-20.75 object-contain mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
  />
  <h3 class="font-bold text-2xl text-center mb-4">{title}</h3>
  <p class="text-center">
    {text}
  </p>
</a>
