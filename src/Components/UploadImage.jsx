import React, { useState} from "react";
import "./Upload.css"



function UploadImage({ onUpload }) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);



    const uploadImage = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setLoading(true);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ecommerce_upload"); // Ensure this matches your Cloudinary preset

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/dkrpginfm/image/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.secure_url) {
                setImage(data.secure_url);
                onUpload(data.secure_url); // Pass image URL to parent component
            }
        } catch (err) {
            console.error("Upload failed", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-container">
            <input type="file" accept="image/*" onChange={uploadImage} />
            {loading && <p>Uploading...</p>}
            {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
        </div>
    );
}

export default UploadImage;
