const endpoint = "https://dummyjson.com/products/category/";

// Womens products
export async function fetchWomensBags() {
    try {
        const response = await fetch(`${endpoint}womens-bags`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch womens bags.' }
        const data = await response.json();
        console.log(data);
        return data.results; 
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch womens bags.")
    }
}

export async function fetchWomensDresses() {
    try {
        const response = await fetch(`${endpoint}womens-dresses`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch womens dresses.' }
        const data = await response.json();
        console.log(data);
        return data.results;  
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch womens dresses.")
    }
}

export async function fetchWomensJewellery() {
    try {
        const response = await fetch(`${endpoint}womens-jewellery`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch womens jewellery.' }
        const data = await response.json();
        console.log(data);
        return data.results;  
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch womens jewellery.")
    }
}

export async function fetchWomensShoes() {
    try {
        const response = await fetch(`${endpoint}womens-shoes`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch womens shoes.' }
        const data = await response.json();
        console.log(data);
        return data.results;  
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch womens shoes.")
    }
}

export async function fetchWomensWatches() {
    try {
        const response = await fetch(`${endpoint}womens-watches`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch womens watches.' }
        const data = await response.json();
        console.log(data);
        return data.results;  
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch womens watches.")
    }
}

// Mens products

export async function fetchMensShirts() {
    try {
        const response = await fetch(`${endpoint}mens-shirts`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch mens shirts.' }
        const data = await response.json();
        console.log(data);
        return data.results;  
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch mens shirts.")
    }
}

export async function fetchMensShoes() {
    try {
        const response = await fetch(`${endpoint}mens-shoes`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch mens shoes.' }
        const data = await response.json();
        console.log(data);
        return data.results;  
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch mens shoes.")
    }
}

export async function fetchMensWatches() {
    try {
        const response = await fetch(`${endpoint}mens-watches`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch mens watches.' }
        const data = await response.json();
        console.log(data);
        return data.results;  
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch mens watches.")
    }
}

// Unisex products (tops?)

export async function fetchTops() {
    try {
        const response = await fetch(`${endpoint}tops`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch tops.' }
        const data = await response.json();
        console.log(data);
        return data.results;  
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch tops.")
    }
}

export async function fetchSunglasses() {
    try {
        const response = await fetch(`${endpoint}sunglasses`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch sunglasses.' }
        const data = await response.json();
        console.log(data);
        return data.results;  
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch sunglasses.")
    }
}