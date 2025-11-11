let dataPromiseCache = null;

async function getData() {
  // If a promise is already in the cache, return it immediately
  if (dataPromiseCache) {
    console.log("Returning cached promise...");
    return dataPromiseCache;
  }
  // If there is no promise, create a new one
  console.log("Fetching new data and caching the promise...");
  dataPromiseCache = new Promise(async (resolve) => {
    // Simulate an asynchronous operation
    await new Promise(res => setTimeout(res, 2000));
    const data = "This is the fulfilled data";
    resolve(data);
  });
  return dataPromiseCache;
}

// --- Usage ---

// First call: initiates the async operation
getData().then(result => console.log(`First call result: ${result}`));

// Second and third calls, made immediately after:
// They will find the pending promise in the cache and attach to it.
getData().then(result => console.log(`Second call result: ${result}`));
getData().then(result => console.log(`Third call result: ${result}`));

/*
The console output with caching:

Fetching new data and caching the promise...
Returning cached promise...
Returning cached promise...
// After a 2-second delay for the promise to resolve...
First call result: This is the fulfilled data
Second call result: This is the fulfilled data
Third call result: This is the fulfilled data
*/

