/*
 * Auth
 *
 * List all the features
 */
// import React from 'react';
import React, { useEffect, memo } from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import H2 from 'components/H2';
import messages from './messages';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { changeUsername,changePassword,signIn,signOut } from './actions';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { makeSelectUsername,makeSelectPassword,
  makeSelectUserId,makeSelectUserToken } from './selectors';

import Form from './Form';
import Input from './Input';
import Section from './Section';
import reducer from './reducer';
import saga from './saga';

const key = 'auth';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

 function Auth({
  username,
  password,
  userId,userToken,
  loading,
  error,
  repos,
  onSubmitForm,
  onLogout,
  onChangeUsername,
  onChangePassword,
}) {
  
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const reposListProps = {
    loading,
    error,
    repos,
  };

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    // if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  console.log(".. Auth functional component, userToken",userToken)

  if (userToken != '' && userToken != null)
  return(
    <div>
    <Helmet>
      <title>Authentication</title>
      <meta
        name="description"
        content="Feature page of React.js Boilerplate application"
      />
    </Helmet>
    <H1>
      <FormattedMessage {...messages.header} />
    </H1>
    <Section>
      <Form onSubmit={onLogout}>
        <div>
            <label htmlFor="username">
              <FormattedMessage {...messages.yourWelcome} />              
            </label>
        </div>
        <div>
            <input type="submit" value="Logout"/>	
        </div>
      </Form>
    </Section>
  </div>
  )
  else
  return (
    <div>
      <Helmet>
        <title>Authentication</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
       <Form onSubmit={onSubmitForm}>
         <div>
            <label htmlFor="username">
              <FormattedMessage {...messages.enterUsername} />
              &nbsp;&nbsp;&nbsp;
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={onChangeUsername}
              />

            </label>
            </div>
            <div>

            <label htmlFor="password">
              <FormattedMessage {...messages.enterPassword} />
              &nbsp;&nbsp;&nbsp;

              <Input
                id="password"
                name="password"
                type="text"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
              />
            </label>
            </div>


            <div>
            <input type="submit"/>	
            </div>
        </Form> 
        
        {/* <ReposList {...reposListProps} /> */}
        </Section>
    </div>
  );
}


Auth.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  onLogout: PropTypes.func,
  
  username: PropTypes.string,
  password: PropTypes.string,
  userId: PropTypes.string,
  userToken: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  userId: makeSelectUserId(),
  userToken: makeSelectUserToken(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      console.log('I was triggered during onSubmitForm')
      let userIdv = ''
      let userTokenv = null;
      if (username.value == 'user' && password.value == 'pass'){
        userIdv = '980'
        userTokenv = 'something';
        console.log('I was triggered inside the if ',userIdv,userTokenv)

      }else       console.log('I was triggered during in the else statement',username.value,password)

      dispatch(signIn(userIdv,userTokenv));

    },
    onLogout: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(signOut('',null));
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Auth);
