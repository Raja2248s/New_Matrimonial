export interface User {
    userName: string;
    email: string;
    password: string;
    user: {
        firstName: string;
        lastName: string;
        gender: string;
        noofGuest: string;
        dateofFunction: string; // Adjust naming convention if necessary
        address: string;
        mobileNum: string; // Adjust naming convention if necessary
    };
}