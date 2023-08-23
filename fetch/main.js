async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed:', response.status);
    }
    const message = await response.json();
    console.log(message);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchUsers();
