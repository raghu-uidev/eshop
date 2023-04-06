import { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { registerUser, UserRegisterObj } from "../usersSlice";
import './sign-up.css';

export interface SignUpProps {
    test: string,
    testFun: () => void;
    testBool: boolean;
}

const SignUp = (props: any) => {
    //const [alertState, setAlertState] = useState(false);
    const actionDispacther = useAppDispatch();
    const { isRegistrationInProgress, registrationStatus } = useAppSelector(state => state.userData);
    /**
     *  const x =  registrationStatus;
     *  const success =  registrationStatus.success;
     *  const fialed = registrationStatus.failed;
     * 
     *  const {success , failed} = registrationStatus
     * 
     */
    const { success, failed, statusMessage } = registrationStatus;
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onFormSubmit = (data: any) => {
        const userData: UserRegisterObj = {
            userName: [data.firstName, data.lastName].join(','),
            email: data.email,
            password: data.password
        }

        actionDispacther(registerUser(userData));
    }

    return (
        <div className="container form-container">
            {(success || failed) && (
                <Alert variant={success ? 'success' : 'danger'}  dismissible>
                    <span>{statusMessage}</span>
                </Alert>
            )}
            <div className="registration-form">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name"  {...register("firstName", { required: 'First Name is required' })} />
                            {errors.firstName && errors.firstName.type === 'required' && (
                                <div className="error">{errors.firstName?.message?.toString()}</div>
                            )}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name"  {...register("lastName", { required: 'Last Name is required' })} />
                            {errors.lastName && errors.lastName.type === 'required' && (
                                <div className="error">{errors.lastName?.message?.toString()}</div>
                            )}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Email"  {...register("email", { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/, message: 'Please enter a valid email' } })} />
                            {errors.email && (
                                <div className="error">{errors.email?.message?.toString()}</div>
                            )}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password"  {...register("password", {
                                required: 'Password is required',
                                validate: {
                                    checkForMinLength: (value: string) => value.length >= 6,
                                    checkForMaxLength: (value: string) => value.length <= 15,
                                }
                            })} />
                            {errors.password && errors.password.type === 'required' && (
                                <div className="error">Password is required</div>
                            )}
                            {errors.password && errors.password.type === 'checkForMinLength' && (
                                <div className="error">Password must be minimum of 6 characters</div>
                            )}
                            {errors.password && errors.password.type === 'checkForMaxLength' && (
                                <div className="error">Password must be maximum of 15 characters</div>
                            )}
                        </div>
                    </div>


                    <div className="form-row">
                        {isRegistrationInProgress ? (
                            <Button variant="primary" disabled>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Registering...
                            </Button>
                        ) : (<Button type='submit'>Register</Button>)
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;