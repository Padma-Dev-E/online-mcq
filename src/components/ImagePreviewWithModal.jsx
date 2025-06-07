import React, {useState} from "react";
import {Subheading} from "@/components/heading";

export function ImagePreviewWithModal({imageUrl}) {
    const [showModal, setShowModal] = useState(false);

    if (!imageUrl) {
        return null; // No image to show
    }

    return (
        <>
            {/* Small preview inside alert */}
            <div
                className="mt-4 cursor-pointer w-24 h-24 border border-gray-300 rounded overflow-hidden hover:opacity-80"
                onClick={() => setShowModal(true)}
            >
                <img
                    src={imageUrl}
                    alt="Question preview"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className={"pt-1"}>
                <Subheading>Click on the image above to enlarge it.</Subheading>
            </div>

            {/* Large modal preview */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setShowModal(false)}
                >
                    <img
                        src={imageUrl}
                        alt="Full preview"
                        className="max-w-4xl max-h-[90vh] rounded shadow-lg"
                        onClick={(e) => e.stopPropagation()} // prevent closing modal on image click
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/400x400?text=Image+Error";
                        }}
                    />
                </div>
            )}
        </>
    );
}
