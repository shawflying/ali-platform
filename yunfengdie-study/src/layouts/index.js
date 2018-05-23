import React from 'react';
import withRouter from 'umi/withRouter';

function Layout({ children, location }) {
    return (
        <div>
            layouts/布局
     {children}
        </div>
    );
}

export default withRouter(Layout);
