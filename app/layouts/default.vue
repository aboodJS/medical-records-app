<template>
  <main>
    <nav>
      <h1>hello world</h1>
      <ul>
        <li><button>login</button></li>
      </ul>
    </nav>
    <slot></slot>
  </main>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95vw;
  margin-inline: auto;
}

nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  gap: 12px;
}

button {
  height: 35px;
  width: 65px;
  font-size: large;
  font-weight: bold;
  border: 0;
  border-radius: 3px;
  background-color: cyan;
  cursor: pointer;
  transition: 150ms;
}

button:hover {
  background-color: darkcyan;
  color: white;
}
</style>
