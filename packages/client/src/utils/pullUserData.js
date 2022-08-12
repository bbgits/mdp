
export default async function pullUserData(client, firstName) {

    const cursor = await client.db('main').collection('users').find({
        'firstName': firstName
    })

    const results = await cursor.toArray();

    const obj = results[0];

    return obj


}