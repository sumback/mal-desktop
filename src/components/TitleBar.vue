<script setup lang="ts">
import { ipcRenderer } from 'electron';

function minimize() {
  ipcRenderer.send('minimize-window');
}

function fullscreen() {
  ipcRenderer.send('fullscreen-window');
}

function close() {
  ipcRenderer.send('close-window');
}
</script>

<template>
  <div class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 bg-gray-800 text-white shadow">
    <div class="flex-none justify-between">
      <h1 class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
        <!-- TODO -->
      </h1>
    </div>
    <div class="grow w-auto electron-drag">&nbsp;</div>
    <div class="flex-none items-center px-2">
      <a id="btn-minimize" href="#" @click="minimize()"> – </a>
    </div>
    <div class="flex-none items-center px-2">
      <a id="btn-fullscreen" href="#" @click="fullscreen()"> □ </a>
    </div>
    <div class="flex-none items-center px-2">
      <a id="btn-close" href="#" @click="close()"> x </a>
    </div>
  </div>
</template>
