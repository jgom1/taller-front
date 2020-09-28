import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Children components */
import { ProfilePersonalData } from './ProfilePersonalData';
import { ProfileAddress } from './ProfileAddress';
import { ProfileCreditCard } from './ProfileCreditCard';
import { ProfilePassword } from './ProfilePassword';
import { ProfileManagementButtons } from './ProfileManagementButtons';

export const Profile = () => {
    const user = useSelector(selectUser);
    return (
        <section className="bg-light p-3">
            <h2 className="text-center my-3">Mi perfil</h2>
            <div className="row m-0 px-1 align-items-strench">
                <ProfilePersonalData user={user} />
                <ProfileAddress user={user} />
                <ProfileCreditCard user={user} />
                <ProfilePassword user={user} />
            </div>
            <ProfileManagementButtons user={user} />
        </section>
    );
};