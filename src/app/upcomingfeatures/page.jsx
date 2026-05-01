import React from 'react';

export const metadata = {
    title: "Upcoming Features - Summer Store",
    description: "",
};

const UpcomingFeaturePage = () => {
    return (
<div className="w-[90%] mx-auto px-6 pb-20 pt-10 bg-[url('/bground.png')] bg-cover bg-no-repeat bg-center animate__animated animate__fadeIn">

  <h1 className='text-white font-bold text-4xl text-center pb-10'>
    Upcoming Features
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div className="bg-[#F6E6B4] border border-[#e6cf8d] rounded-3xl p-8 shadow-2xl animate__animated animate__fadeInLeft">

      <h2 className="text-3xl font-bold text-[#836407] mb-6">
        Shopping Features
      </h2>

      <ul className="space-y-4 text-[#5A3E2B] font-semibold list-disc pl-6">

        <li>
          Implementing Add to Cart functionality from product details page and home page.
        </li>

            <li>
            Multiple Product selection in cart, with total item count and total price.
            </li>

                <li>
                Category based product Filtering in products page.
                </li>

                <li>
                Search functionality in product page.
                </li>

                <li>
                Implementing Layout in products page.
                </li>

      </ul>
    </div>
    <div className="bg-[#F6E6B4] border border-[#e6cf8d] rounded-3xl p-8 shadow-2xl animate__animated animate__fadeInRight">

      <h2 className="text-3xl font-bold text-[#836407] mb-6">
        Authentication & Profile
      </h2>
      <ul className="space-y-4 text-[#5A3E2B] font-semibold list-disc pl-6">
        <li>
          Email verification after registration and before login.
        </li>

        <li>
          Password reset functionality.
        </li>

        <li>
          Sign in with Facebook for authentication and registration.
        </li>

        <li>
          User Registration Form will include more fields such as phone number and address.
        </li>

        <li>
          MY PROFILE page will be updated with richer user information.
        </li>

      </ul>

    </div>


    <div className="bg-[#F6E6B4] border border-[#e6cf8d] rounded-3xl p-8 shadow-2xl animate__animated animate__fadeInLeft">

      <h2 className="text-3xl font-bold text-[#836407] mb-6">Product & Review System </h2>
      <ul className="space-y-4 text-[#5A3E2B] font-semibold list-disc pl-6">

        <li>
          Adding REVIEW section in product details page.
        </li>

        <li>
          A dedicated SUMMER SALE route for discounted products.
        </li>
      </ul>
    </div>


    <div className="bg-[#F6E6B4] border border-[#e6cf8d] rounded-3xl p-8 shadow-2xl animate__animated animate__fadeInRight">
      <h2 className="text-3xl font-bold text-[#836407] mb-6">
        Checkout & Orders
      </h2>
      <ul className="space-y-4 text-[#5A3E2B] font-semibold list-disc pl-6">

        <li>
          Order summary page with product information, quantity and total price.
        </li>

        <li>
          Real date and time will be included for every order.
        </li>

                <li>
                Improved checkout flow and order confirmation system.
                </li>

      </ul>

    </div>
  </div>
</div>
    );
};

export default UpcomingFeaturePage;