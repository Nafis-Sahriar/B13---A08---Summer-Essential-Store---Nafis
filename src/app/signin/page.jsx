"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import 'animate.css';
import { toast } from "react-toastify";



export default function SignInPage() 
{
  const onSubmit = async (e) => 
  {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

        // console.log(data);

        const {data, error} = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: "/"
        })

        if(error){
            toast.error(error.message);
        }
        if(data){
            toast.success("Logged in successfully!");
        }




  };

   const handleGoogleSignUp = async () => {
          const {data, error} = await authClient.signIn.social({
              provider: "google",
              callbackURL: "/"
          })}

  return (
    <Card className="bg-[url('/bground.png')] bg-cover bg-no-repeat bg-center shadow-2xl mx-auto w-full md:w-125 py-10 mt-5 bg-amber-50 animate__animated animate__fadeInUp">
      <h1 className="font-black text-2xl text-center text-white">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" className="bg-linear-to-r from-yellow-400 via-orange-500 to-red-500">
            <Check />
           Sign In
          </Button>
          <Button type="reset" className="bg-gray-300 text-gray-700 hover:bg-gray-400">
            Reset
          </Button>
        </div>

        <div className="text-center p-5">
            <p className="text-sm text-gray-600">
                Do not have an account?{' '}
                <Link href="/register" className="text-green-700  font-bold hover:text-green-800 hover:font-bold hover:underline ">
                    Register
                </Link>
            </p>
        </div>

        <Separator></Separator>
            <p className="text-center text-gray-700">or</p>

         <div className="flex gap-2">
                  <Button onClick={handleGoogleSignUp} variant="outline" className=" shadow-2xl hover:scale-102 border-none text-gray-700 hover:text-green-600 bg-linear-to-r from-orange-100 via-yellow-300 to-green-600 w-full">
                    <FaGoogle></FaGoogle>
                    Continue with Google
                  </Button>
                 
                </div>
      </Form>
    </Card>
  );
}