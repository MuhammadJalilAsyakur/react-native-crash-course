import { Account, Avatars, Client, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platfrom: "com.aora",
    projectId: '6634adb300399f622e82',
    databaseId: '6634af8d0003d1f2ca70',
    usersCollectionId: '6634af8d0003d1f2ca70',
    videosCollectionId: '6634afdb001b56e13b6a',
    storageId: '6634b14d002c7c01bfcd'
}

// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platfrom) // Your application ID or bundle ID.
    ;


const account = new Account(client);
const avatars = new Avatars(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username)

        await signIn()
    } catch (error) {
        console.log(error)
        throw new Error(error)

    }
}
