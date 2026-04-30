import React from 'react';

export const metadata = {
    title: "Contact Us - Summer Store",
    description: "",
};

const ContactPage = () => {
    return (
        <div className='min-h-[50vh] w-[90%] mx-auto flex flex-col items-center justify-center'>
            <h1 className='text-3xl text-center font-bold text-orange-500'>Contact Us</h1>
            <p className='text-center text-gray-600 mt-4'>
                Have questions or anything? I am here to help! Reach out to me through any of the following links from footer or About Us Page. You will find FaceBook , LinkedIN and GitHub profile of mine there.
            </p>
        </div>
    );
};

export default ContactPage;