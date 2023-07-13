import React, { useState } from "react";

    const App =()=>{
        const [selectedFile, setSelectedFile] = useState(null);
        return (
            <div className="App">
            {/* <form>
                <input
                type="file"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}
                />
            </form> */}
            </div>
        )
    }