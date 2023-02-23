import React from 'react';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link } from 'react-router-dom';
function FeedBackCategoryLayout(props) {
    return (
        <Link className=' fixed -right-10 top-1/2 -translate-y-1/2 p-2 rounded-sm -rotate-90 bg-gray-200 flex items-center gap-2 hover:bg-gray-300'>
            <FeedbackIcon/>
            <span>PHẢN HỒI</span>
        </Link>
    );
}

export default FeedBackCategoryLayout;