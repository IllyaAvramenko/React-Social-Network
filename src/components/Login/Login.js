import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import s from './Login.module.scss';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router';

const LoginForm = ({ handleSubmit, error, }) => {

    return (
        <form onSubmit={ handleSubmit } >
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                    validate={ [ required ] } />
            </div>
            <div>
                <Field type={'password'} placeholder={'Password'} name={'password'} component={Input}
                    validate={ [ required ] } />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
            </div>

            { error && <div className={s.formSummaryError}>{error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);


const Login = ({ isAuth, login }) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData;

        login(email, password, rememberMe);
    };

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);