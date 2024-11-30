import React from 'react';

const PageLayout = ({children}) => {
    return (
        <div className="container at-4 mb-4">
            {children}
        </div>
    );
}

export default PageLayout