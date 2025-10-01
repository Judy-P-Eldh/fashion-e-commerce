"use client";

import Form from "next/form";
import toast from "react-hot-toast";

export default function SignUpForm() {
  const addToMailingList = (formData: FormData) => {
    const email = formData.get("email") as string;

    toast.success(
      `Thanks for signing up! Your discount code will be sent to ${email}`,
      { duration: 4000 }
    );
  };

  return (
    <Form className="breakout" action={addToMailingList}>
      <h2 className="mb-5 font-courier-prime text-xl">
        Sign up for our newsletter and get 10% off your first order
      </h2>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <div className="flex gap-4">
        <input
          type="text"
          id="email"
          required
          name="email"
          className="bg-light"
        />
        <button type="submit" className="button p-1 px-2">
          Sign me up
        </button>
      </div>
    </Form>
  );
}
