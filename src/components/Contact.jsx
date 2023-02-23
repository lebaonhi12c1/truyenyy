import React from 'react';

function Contact(props) {
    return (
        <div className=' py-2 px-6 bg-gray-200 -rotate-90 fixed right-[-60px] top-1/2 cursor-pointer -translate-y-1/2 flex items-center gap-2 hover:bg-gray-300'>
            <img src="https://www.iconpacks.net/icons/2/free-facebook-messenger-icon-2881-thumb.png" alt="" width='20px'/>
            <span>Liên Hệ QTV</span>
        </div>
    );
}

export default Contact;