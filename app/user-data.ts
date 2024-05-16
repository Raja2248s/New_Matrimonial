export interface UserData {
    user: {
      firstName: string;
      lastName: string;
      address: string;
      noOfGuest: number;
      gender: string;
      dateofFunction: string;
      mobileNum: string;
    };
    personal: {
      photograph: string; // Assuming base64 encoded image
      bloodGroup: string;
      age: number;
    };
    family: {
      familyStatus: string;
      familyType: string;
      fatherName: string;
    };
    education: {
      educationLevel: string;
      educationFiled: string;
    };
    userName: string;
    password: string;
    phoneno: number;
    email: string;
  }
  