import axios from "axios";
import React, { useState } from "react";

function CloudinaryThumbnail() {
    const [file, setFile] = useState<File | null>(null);
    const [originalUrl, setOriginalUrl] = useState<string>("");
    const [thumbnailUrl, setThumbnailUrl] = useState<string>("");

    const handleUpload = async () => {
        if (!file) {
            alert("Vui lòng chọn file");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");

        try {
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dstdfgsnp/image/upload",
                formData
            );

            if (res.status === 200) {
                const secureUrl = res.data.secure_url; // ảnh gốc
                const thumbUrl = secureUrl.replace(
                    "/upload/",
                    "/upload/w_150,h_150,c_fill/"
                ); // thumbnail

                setOriginalUrl(secureUrl);
                setThumbnailUrl(thumbUrl);
            }
        } catch (err) {
            console.error("Upload error:", err);
        }
    };

    return (
        <div>
            <input
                type="file"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files) setFile(e.target.files[0]);
                }}
            />
            <button onClick={handleUpload}>Upload</button>

            {thumbnailUrl && (
                <div>
                    <h3>Thumbnail</h3>
                    <img
                        src={thumbnailUrl}
                        alt="Thumbnail"
                        style={{ cursor: "pointer", border: "1px solid #ccc" }}
                        onClick={() => window.open(originalUrl, "_blank")} // mở ảnh gốc
                    />
                </div>
            )}
        </div>
    );
}

export default CloudinaryThumbnail;
