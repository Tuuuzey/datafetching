export async function updateUserPlaces(places) {
    const respone = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: { 'Content-Type': 'application/json' }
    });
    const resData = await respone.json();
    if(!respone.ok) {
        throw new Error('Failed to update user data')
    
    }
    return resData.message
}