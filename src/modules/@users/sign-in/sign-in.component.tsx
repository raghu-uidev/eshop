import { useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { loginUser } from "../usersSlice";
import './sign-in.css';

const SignIn = () => {
    /** props */
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const actionDispacther: any = useAppDispatch();
    const navigate = useNavigate();
    const { loginStatus } = useAppSelector(state => state.userData);
    const { failed, success, isLoginInProgress, statusMessage } = loginStatus;
    const onLoginFormSubmit = (data: any) => {
        actionDispacther(loginUser(data));
     }

   /** effects */
    useEffect(() => {
        if(success) {
            navigate('/');
        }
    }, [success]);

  

    return (
        <div className="form-container">
             { failed && (
                <Alert variant="danger"  dismissible>
                    <span>{statusMessage}</span>
                </Alert>
            )}
            <div className="registration-form">
                <form onSubmit={handleSubmit(onLoginFormSubmit)}>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Email"  {...register("email", { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/, message: 'Please enter a valid email' } })} />
                        </div>
                        {errors.email && (<div className="error">{errors.email?.message?.toString()}</div>)}
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password"  {...register("password", { required: 'Password is required' })} />
                        </div>
                        {errors.password && (<div className="error">{errors.password?.message?.toString()}</div>)}
                    </div>
                    <div className="form-row">
                        <Button type='submit'>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
