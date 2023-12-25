<script setup lang="ts">
import { reactive, ref } from 'vue'
import Fuse from 'fuse.js'
import list from './search.json'

const fuseOptions = {
	// isCaseSensitive: false,
	// includeScore: false,
	// shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// location: 0,
	// threshold: 0.6,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"title",
		"author.firstName"
	]
};

const fuse = new Fuse(list, fuseOptions);

// Change the pattern
const searchPattern = "P.D"

console.log( fuse.search(searchPattern));


const props = defineProps<{ msg: string, testObj: {} }>()
console.log(props);
const obj = reactive({ a: { b: 213 },c:{} })
console.log(props);

const count = ref(0)
const handleMsg = ()=>{
  obj.c={
    d:213
  }
}
</script>

<template>
  <h1 @click="handleMsg">{{ msg }}</h1>
  {{ obj }}
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
