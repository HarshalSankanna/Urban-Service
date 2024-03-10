import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Urban Services provides a flexible and convenient solution for people who need help with 
                            specific tasks but may not have the time, skills, or resources to complete them themselves.                      </h2>
                        <p className="mt-6 text-gray-600">

                            Urban Services is an online and mobile marketplace that connects users
                            with local, skilled individuals who can help with various tasks and services.
                            The platform allows users to find and hire "Taskers" to perform a wide range of services, such as household chores,
                            moving assistance, handyman tasks, virtual assistance, event planning, and much more.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Thank You!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}