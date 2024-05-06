import { Account, Avatars, Client, Databases } from "react-native-appwrite";

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platfrom: "com.aora",
    projectId: '6634adb300399f622e82',
    databaseId: '6634af8d0003d1f2ca70',
    usersCollectionId: '6634afb00004b74b1a0a',
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
const databases = new Databases(client);





export const createUser = async (email, password, username) => {
    try {
        // Log in the user
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await account.createEmailPasswordSession(email, password);

        await signIn(email, password)

        const newUser = databases.createDocument(
            config.databaseId,
            config.usersCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avater: avatarUrl
            }
        )

        return newUser;

    } catch (error) {
        console.error('Failed to create user:', error);
        // Handle the error appropriately
    }
}


export async function signIn(email, password) {
    try {
        // Delete the current session

        // Now you can create a new session
        const session = await account.createEmailPasswordSession(email, password);

        return session;
    } catch (error) {
        throw new Error(error)
    }
}