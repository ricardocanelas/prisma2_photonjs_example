const Photon = require("@generated/photon");
const photon = new Photon();

// A `main` function so that we can use async/await
async function main() {
  // Retrieve all published posts
  const allUsers = await photon.users.findMany();
  console.log(`Retrieved all users: `, allUsers);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
