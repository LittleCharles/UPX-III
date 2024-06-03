import React, { useState, useRef } from 'react';

const ProfilePicture = () => {
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);

    const defaultProfileImage = "https://github.com/shadcn.png"; 

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[300px]'>
                    {profileImage && (
                        <img
                            src={profileImage}
                            alt="Profile"
                        />
                    )}
                    {!profileImage && (
                        <img
                            src={defaultProfileImage}
                            alt="Default Profile"
                            onClick={handleImageClick}
                            className="rounded-[200px] mb-8"
                        />
                    )}
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />
                <button
                    onClick={handleImageClick}
                    className="border-2 p-2.5 rounded-lg bg-profileButton"
                >
                    Mudar imagem
                </button>
            </div>
        </div>
    );
};

export default ProfilePicture;

