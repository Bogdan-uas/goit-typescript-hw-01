type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
};

function createOrUpdateUser(initialValues: User, updates: Partial<User>): User {
    return { ...initialValues, ...updates };
}

const initialValues: User = {
    name: "John",
    surname: "Doe",
    email: "user@mail.com",
    password: "password123",
};

createOrUpdateUser(initialValues, {
    email: "user@mail.com",
    password: "password123",
});