

export const userFunction = async (users, userId) => {
    const userTemp = users.filter((user) => user.id === parseInt(userId));
    return userTemp[0];
}