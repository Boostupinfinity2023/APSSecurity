import * as React from "react"
import { Link, useNavigate } from 'react-router-dom';

import IconMail from '../../components/Icon/IconMail';
import IconLockDots from '../../components/Icon/IconLockDots';
import { Button } from "@nextui-org/react";
import Google_svg from '/assets/images/google.svg';
import { api_calling, google_login } from "@/utils/api"
const LoginBoxed = () => {

    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const route = useNavigate();
    const [Error, setError] = React.useState([]);
    async function onSubmit(event: any) {
        event.preventDefault()

        try {
            setIsLoading(true)
            const body = new FormData(event.target);
            const response = await api_calling('?route=admin/auth/login', body);
            if (response?.error) {
                setIsLoading(false)
                setError(response?.error)
            } else {
                setIsLoading(false)
                route(`/auth/two-factor/${encodeURIComponent(response?.data?.client_id)}`)
            }
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    return (
        <div>
            <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/login_bg.jpg)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                    <div className="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20">

                        <div className="mx-auto w-full max-w-[440px]">
                            <div className="mb-10">
                                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign in</h1>
                                <p className="text-base font-bold leading-normal text-white-dark">Enter your email and password to login</p>
                            </div>
                            <form className="space-y-5 dark:text-white" onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="Email">Email</label>
                                    <div className="relative text-white-dark">
                                        <input id="Email" type="email" name="username" placeholder="Enter Email" className="form-input ps-10 placeholder:text-white-dark" disabled={isLoading} />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconMail fill={true} />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="Password">Password</label>
                                    <div className="relative text-white-dark">
                                        <input id="Password" type="password" name="password" placeholder="Enter Password" className="form-input ps-10 placeholder:text-white-dark" disabled={isLoading} />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconLockDots fill={true} />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label className="flex cursor-pointer items-center">
                                        <input type="checkbox" className="form-checkbox bg-white dark:bg-black" />
                                        <span className="text-white-dark">Subscribe to weekly newsletter</span>
                                    </label>
                                </div>
                                <Button disabled={isLoading} type="submit" className="!mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                                    {isLoading ? 'Authenticate...' : 'Sign In with Email'}
                                </Button>
                            </form>
                            <div className="relative my-7 text-center md:mb-9">
                                <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"></span>
                                <span className="relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light">or</span>
                            </div>
                            <div className="mb-10 md:mb-[60px]">
                                <div className="grid gap-4">
                                    <Button disabled={isLoading} type="button" onClick={google_login}>
                                        <img src={Google_svg} alt="google-auth-svg" width={20} />
                                        Sign In with Google
                                    </Button>
                                </div>
                            </div>
                            <div className="text-center dark:text-white">
                                Don't have an account ?&nbsp;
                                <Link to="/auth/boxed-signup" className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                                    SIGN UP
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginBoxed;
