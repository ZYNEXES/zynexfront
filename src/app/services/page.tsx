import React from 'react';
import {Navbar} from '@/components/navbar';
import {Footer} from '@/components/footer';

const ContactPage: React.FC = () => {
    return (
        
        <div>
            <Navbar/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Coming Soon</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactPage;