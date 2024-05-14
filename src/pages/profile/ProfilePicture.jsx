import React, { useState, useRef } from 'react';

const ProfilePicture = () => {
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);

    const defaultProfileImage = "../../assets/imgpadrao.png"; 

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
            <div>
                <div>
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
                            className="profile-image-placeholder"
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
                    className="profile-image-button"
                >
                    Mudar imagem
                </button>
            </div>
        </div>
    );
};

export default ProfilePicture;

