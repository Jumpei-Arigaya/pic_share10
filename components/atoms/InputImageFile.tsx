import React, { useState } from "react";

const InputImageFile = () => {
    const [file, setFile] = useState<File | null>(null);
    const onChangeFile = (e: any) => {
        const files = e.target.files
        if (files && files[0]) {
            setFile(files[0])
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