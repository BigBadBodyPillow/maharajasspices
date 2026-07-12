<script lang="ts">
  import { onMount } from 'svelte';
  export let onLogin: (name: string) => void;

  let authMode: 'login' | 'register' = 'login';
  let fullName = '';
  let email = '';
  let password = '';
  let confirmPassword = '';

  const STORAGE_KEY = 'maharajasspices_users';

  function loadUsers() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveUsers(users: any[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }

  function register(event: Event) {
    event.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      alert('Please complete all fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const users = loadUsers();
    if (users.find((u: any) => u.email === email)) {
      alert('An account with this email already exists.');
      return;
    }

    users.push({ fullName, email, password });
    saveUsers(users);
    alert('Account created and saved locally. You can now log in.');
    authMode = 'login';
  }

  function login(event: Event) {
    event.preventDefault();
    if (!email || !password) {
      alert('Please provide email and password.');
      return;
    }

    const users = loadUsers();
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (!found) {
      alert('Invalid login credentials');
      return;
    }

    onLogin(found.fullName);
  }

  onMount(() => {
    const users = loadUsers();
    if (users.length === 1) {
      const user = users[0];
      email = user.email || '';
    }
  });
</script>

<section class="bg-[#f5f5f5] px-4 py-16">
  <div class="box mx-auto rounded-lg bg-white p-8 border border-black/10 max-w-125">
    <h2 class="text-2xl font-semibold text-center text-(--accent)">Welcome</h2>
    <p class="text-md text-center text-black/50">Sign in to your account or create a new one</p>

    <div class="mt-5 text-sm text-black/70 bg-[#f5f5f5] rounded-md p-1.5 flex">
      <button
        class=" w-full py-2 rounded-sm font-semibold"
        style={authMode === 'login' ? 'background-color:white;font-weight: 700' : ''}
        onclick={() => (authMode = 'login')}>Login</button
      >
      <button
        class="w-full py-2 rounded-sm"
        style={authMode !== 'login' ? 'background-color:white;font-weight: 700' : ''}
        onclick={() => (authMode = 'register')}>Register</button
      >
    </div>

    <form
      class="mt-8 flex flex-col gap-1 space-y-4 text-black"
      onsubmit={authMode === 'login' ? login : register}
    >
      {#if authMode === 'register'}
        <label for="name">
          Full Name
          <input
            id="name"
            bind:value={fullName}
            type="text"
            placeholder="John Doe"
            class="w-full rounded-lg border border-black/10 px-4 py-3 text-black"
          />
        </label>
      {/if}

      <label for="email">
        Email
        <input
          id="email"
          bind:value={email}
          type="email"
          placeholder="you@example.com"
          class="w-full rounded-lg border border-black/10 px-4 py-3 text-black"
        />
      </label>

      <label for="password">
        Password
        <input
          id="password"
          bind:value={password}
          type="password"
          placeholder="••••••••"
          class="w-full rounded-lg border border-black/10 px-4 py-3 text-black"
        />
      </label>

      {#if authMode === 'register'}
        <label for="confirm">
          Confirm Password
          <input
            id="confirm"
            bind:value={confirmPassword}
            type="password"
            placeholder="••••••••"
            class="w-full rounded-lg border border-black/10 px-4 py-3 text-black"
          />
        </label>
      {/if}

      {#if authMode === 'login'}
        <button
          type="submit"
          class="w-full rounded-lg bg-(--accent) px-4 py-3 text-sm font-semibold uppercase text-white"
        >
          Log In
        </button>
      {:else}
        <button
          type="submit"
          class="w-full rounded-lg bg-(--accent) px-4 py-3 text-sm font-semibold uppercase text-white"
        >
          Register
        </button>
      {/if}
    </form>
  </div>
</section>
