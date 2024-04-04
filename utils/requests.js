const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//Fetch all properties
async function fetchProperties() {
	try {
		// Handle the case when the domain is not available yet
		if (!apiDomain) {
			return [];
		}
		const res = await fetch(`${apiDomain}/properties`);

		if (!res.ok) {
			throw new Error('Failed to fetch dats');
		}
		return await res.json();
	} catch (error) {
		console.error('Error fetching properties:', error);
		return [];
	}
}
//Fetch a single property by id
async function fetchProperty(id) {
	try {
		// Handle the case when the domain is not available yet
		if (!apiDomain) {
			return null;
		}
		const res = await fetch(`${apiDomain}/properties/${id}`);

		if (!res.ok) {
			throw new Error('Failed to fetch dats');
		}
		return await res.json();
	} catch (error) {
		console.error('Error fetching properties:', error);
		return null;
	}
}
export { fetchProperty, fetchProperties };
