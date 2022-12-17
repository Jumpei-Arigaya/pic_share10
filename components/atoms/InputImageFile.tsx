import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
    setPostImage: Dispatch<SetStateAction<Blob | null | undefined>>
}

const InputImageFile = ({ setPostImage }: Props) => {
    const onChangeFile = (e: any) => {
        const files = e.target.files
        if (files) {
            setPostImage(files[0])
        }
    }

    return (
        <div>
            <div>
                <input type="file" accept="image/*" onChange={onChangeFile} className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
                "/>
            </div>
        </div>
    );
}

export default InputImageFile;