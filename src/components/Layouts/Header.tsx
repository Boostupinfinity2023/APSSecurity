import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { toggleRTL, toggleTheme, toggleSidebar } from '../../store/themeConfigSlice';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import IconMenu from '../Icon/IconMenu';
import Swal from 'sweetalert2';
import IconLogout from '../Icon/IconLogout';

const Header = () => {
    const location = useLocation();
    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [location]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    function createMarkup(messages: any) {
        return { __html: messages };
    };

    const [search, setSearch] = useState(false);

    const setLocale = (flag: string) => {
        setFlag(flag);
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
    };
    const [flag, setFlag] = useState(themeConfig.locale);

    const { t } = useTranslation();
    function deleteCookie(name: any) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    function SignOut() {
        Swal.fire({
            title: 'Log Out',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log Out',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                const cookiesToDelete = ['jwt'];
                const localStorageKeysToDelete = [
                    'auth_token', 'UserEmail', 'USERID', 'profileurl', 'is_admin', 'SSID', 'UserName', 'SID', 'assigned_role'
                ];

                // Delete cookies
                cookiesToDelete.forEach(deleteCookie);


                localStorageKeysToDelete.forEach((key) => localStorage.removeItem(key));
                // message.success(`Logged Out !`);

                // window.location.href = '/';

            }
        });
    }


    return (
        <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
            <div className="shadow-sm">
                <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">
                    <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
                        <Link to="/" className="main-logo flex items-center shrink-0">
                            <img className="w-[50px] ltr:-ml-1 rtl:-mr-1 inline" src="/assets/images/APS-logo.png" alt="logo" />
                        </Link>

                    </div>

                    <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                        <div className="sm:ltr:mr-auto sm:rtl:ml-auto">
                            <button
                                type="button"
                                className="collapse-icon w-8 h-8 rounded-full flex items-center  dark:text-white-light transition duration-300 rtl:rotate-180"
                                onClick={() => dispatch(toggleSidebar())}
                            >
                                <IconMenu className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="dropdown shrink-0 flex">
                            <Dropdown>
                                <DropdownTrigger>
                                    <div className='flex'>
                                        <Avatar className="mr-3 Mediamobile" showFallback isBordered src={''} />
                                        <p className="nav_text2">Sukhvinder <br></br><span>ADMIN</span></p>
                                    </div>
                                </DropdownTrigger>
                                <DropdownMenu variant="faded" aria-label="Static Actions">

                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-semibold">Signed in as</p>
                                        <p className="font-semibold">Admin@gmail.com</p>
                                    </DropdownItem>
                                    <DropdownItem key="settings" href={`/admin/profile`}>
                                        My Profile
                                    </DropdownItem>

                                    <DropdownItem key="delete" className="text-danger" color="danger" onClick={SignOut} startContent={<IconLogout className="text-danger text-xl" />}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
