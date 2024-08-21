import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import userImage from "@/assets/user_icon.png";

const TopBar: React.FC = () => {
    return (
        <div className='flex justify-between p-2 absolute left-0 top-0 w-full backdrop-blur-sm z-10'>
            <h6 className='text-2xl font-semibold '>Gemini</h6>
            <Avatar>
                <AvatarImage src={userImage} />
                <AvatarFallback>I</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default TopBar;