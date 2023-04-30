import { apiBaseURL } from "./apiSettings";

export interface UserCredantials{
  token: string;
  username: string;
  email: string;
}

export interface LoginUserResponse{
  data?:UserCredantials;
  errors?:string[];
}

export interface LoginCredentials {
  Email: string;
  Password: string;
};

export async function loginUser (credentials: LoginCredentials): Promise<LoginUserResponse> {
  try{
    const response = await fetch(`${apiBaseURL}/Account/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(credentials),
    });
    const loginUserResponse: LoginUserResponse = await response.json();
  
    if(loginUserResponse.data){
      localStorage.setItem('token', loginUserResponse.data.token);
    }
  
    return loginUserResponse;
  } catch(error){
    console.log('Failed to fetch: ', error);
    return { errors: ["Failed to connect to the server, please try again later"]};
  }
};

export interface RegisterCredentials {
  Email: string;
  Username:string;
  Password: string;
  ConfirmPassword: string;
};

export interface RegisterUserResponse{
  data?:UserCredantials;
  errors?:string[];
}

export async function registerUser(credentials: RegisterCredentials): Promise<RegisterUserResponse> {
  try{
    const response = await fetch(`${apiBaseURL}/Account/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const registerUserResponse: RegisterUserResponse = await response.json();
  
    if(registerUserResponse.data){
      localStorage.setItem('token', registerUserResponse.data.token);
    } 

    return registerUserResponse;
  }
  catch (error) {
    console.log('Failed to fetch: ', error);
    return { errors: ["Failed to connect to the server, please try again later"]};
  }
};

export default {
  registerUser,
  loginUser,
};