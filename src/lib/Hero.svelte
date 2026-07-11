<script lang="ts">
  import { flip } from 'svelte/animate';
  import { onDestroy, onMount } from 'svelte';

  import chevronIcon from '../assets/icons/glyphs--chevron-bold.svg?raw';

  type HeroImage = {
    id: string;
    path: string;
    heading?: string;
    p?: string;
  };

  export let images: HeroImage[] = [];
  export let speed = 500;

  const AUTO_ROTATE_DELAY = 3000;
  let activeIndex = 0;
  let orderedImages: HeroImage[] = [];
  let currentImage: HeroImage | undefined;
  let autoRotateInterval: number | undefined;

  $: orderedImages = images.length
    ? [...images.slice(activeIndex), ...images.slice(0, activeIndex)]
    : [];
  $: currentImage = images.length ? images[activeIndex % images.length] : undefined;

  const setImageOpacity = (id: string, value: string) => {
    const imageElement = document.getElementById(id);

    if (imageElement) {
      imageElement.style.opacity = value;
    }
  };

  const stopAutoRotate = () => {
    if (autoRotateInterval !== undefined) {
      clearInterval(autoRotateInterval);
      autoRotateInterval = undefined;
    }
  };

  const startAutoRotate = () => {
    stopAutoRotate();

    autoRotateInterval = setInterval(() => {
      rotateRight();
    }, AUTO_ROTATE_DELAY);
  };

  const resetAutoRotate = () => {
    stopAutoRotate();
    startAutoRotate();
  };

  const goToIndex = (index: number) => {
    if (images.length === 0) return;
    activeIndex = index % images.length;
    resetAutoRotate();
  };

  const rotateLeft = () => {
    if (images.length === 0) return;
    const transitioningImage = orderedImages[orderedImages.length - 1];

    setImageOpacity(transitioningImage.id, '0');
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    setTimeout(() => setImageOpacity(transitioningImage.id, '1'), speed);
    resetAutoRotate();
  };

  const rotateRight = () => {
    if (images.length === 0) return;
    const transitioningImage = orderedImages[0];

    setImageOpacity(transitioningImage.id, '0');
    activeIndex = (activeIndex + 1) % images.length;
    setTimeout(() => setImageOpacity(transitioningImage.id, '1'), speed);
    resetAutoRotate();
  };

  onMount(startAutoRotate);
  onDestroy(stopAutoRotate);
</script>

<div id="carousel-container">
  <div id="carousel-images">
    {#each orderedImages as image (image.id)}
      <img
        src={image.path}
        alt={image.id}
        id={image.id}
        animate:flip={{ duration: speed }}
        loading="lazy"
      />
    {/each}
  </div>

  <div class="w-full h-full absolute top-0">
    <div class="hero-text box mx-auto h-full">
      <div class="mx-25 h-full flex flex-col justify-center gap-4 animate-fade-in">
        <div>
          <h1 class="text-4xl font-bold">{currentImage?.heading ?? 'Lorem, ipsum dolor.'}</h1>
          <p class="text-xl">
            {currentImage?.p ?? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
          </p>
        </div>
        <button class="bg-(--accent) font-bold w-fit px-4 py-2 rounded-md">SHOP NOW</button>
      </div>
    </div>
  </div>

  <div id="carousel-markers">
    {#each images as _, index}
      <button
        class={`marker ${index === activeIndex ? 'active' : ''}`}
        onclick={() => goToIndex(index)}
        aria-label={`go to image ${index + 1}`}
      ></button>
    {/each}
  </div>

  <button id="left" onclick={rotateLeft} class="control">
    <slot name="left-control">
      <span class="text-white -rotate-90 p-3.5 [&_svg]:size-5">{@html chevronIcon}</span>
    </slot>
  </button>

  <button id="right" onclick={rotateRight} class="control">
    <slot name="right-control  ">
      <span class="text-white rotate-90 p-3.5 [&_svg]:size-5">{@html chevronIcon}</span>
    </slot>
  </button>
</div>

<style>
  #carousel-container {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  #carousel-images {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    filter: opacity(50%);
  }

  .control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.353);

    &:hover {
      background-color: black;
    }
  }

  .control:focus-visible {
    outline: auto;
  }

  #left {
    left: 10px;
  }

  #right {
    right: 10px;
  }

  #carousel-markers {
    display: flex;
    justify-content: center;
    gap: 10px;
    position: absolute;
    width: 100%;
    bottom: 10px;
  }

  .marker {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    background: #d9d9d9d8;
    transition: background-color 0.2s ease;

    transition: width 0.2s ease-out;
    &:hover {
      background-color: white;
    }
  }

  .marker.active {
    width: 48px;
    background: #dc2626;
  }
</style>
