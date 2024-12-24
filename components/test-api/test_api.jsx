const endpoint = 'http://localhost:3000/api';

async function getAsyncApi() {
    try {
        const response = await fetch((endpoint + '/bill?' + new URLSearchParams({
            destination: "Mysore"
        }).toString()));
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(endpoint + '/bill?' + new URLSearchParams({
            destination: "hello"
        }).toString());
        return data;
    } catch (error) {
        console.error('Error fetching API:', error);
        return null;
    }
}

export default async function TestApi() {
    // const data = await getAsyncApi();
    const data = await getAsyncApi();
    return (
        <div>
            Here is the data love:
            <p>{JSON.stringify(data)}</p>
        </div>
    );
}
