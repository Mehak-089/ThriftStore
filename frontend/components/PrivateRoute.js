// import { Route, Redirect } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import React, { Component } from 'react';

// import { authAtom } from '_state';

// export { PrivateRoute };

// function PrivateRoute({ component: Component, ...rest }) {
//     const auth = useRecoilValue(authAtom);
//     return (
//         <Route {...rest} render={props => {
//             if (!auth) {
//                 // not logged in so redirect to login page with the return url
//                 return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//             }

//             // authorized so return component
//             return <Component {...props} />
//         }} />
//     );
// }