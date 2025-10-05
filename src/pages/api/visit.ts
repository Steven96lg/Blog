export async function get() {
    const res = await fetch("http://127.0.0.1:8000/visit")
    const data = await res.json()
    console.log("Data from /visit API:", data) // Log the fetched data for debugging
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    })
}