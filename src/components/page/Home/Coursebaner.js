import React from 'react';
import { Link } from 'react-router-dom';

const Coursebaner = ({detls}) => {
    const { id, name, img } = detls;
    return (
      <div>
        <div data-aos="fade-up" className="max-w-xs rounded-md shadow-md mx-auto dark:bg-gray-900 dark:text-gray-100">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            </div>
            <Link
              to={`/details/${id}`}
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-blue-400 dark:text-gray-900"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Coursebaner;