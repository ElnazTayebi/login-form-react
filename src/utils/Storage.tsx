export const setUser = (userName: string) => {
    localStorage.setItem('userName', userName);
};

export const getUser = () => {
    return localStorage.getItem('userName');
};

export const removeUser = () => {
    localStorage.removeItem('userName');
};

