// Higher Order Component - A component (HOC) that renders another component
// Reuse code

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1> Info </h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponenet => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponenet {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponenet => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponenet {...props} />
      ) : (
        <p>Please login to view the info.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="These are the details" />,
  document.getElementById('app')
);
// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="These are the details" />,
//   document.getElementById('app')
// );
