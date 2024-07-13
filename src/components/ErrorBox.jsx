import React from 'react';

const ErrorBox = ({ message }) => {
    return (
        <div className="bg-red-100 mt-5 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{message}</span>
        </div>
    );
};

export default ErrorBox;
