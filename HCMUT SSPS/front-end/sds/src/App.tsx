import React from "react";
import { Button } from "./ui/primitives";

function App() {
    return (
        <div>
            <h1>Welcome to My Project</h1>
            <Button
                onPress={() => alert("Clicked!")}
                variant="subtle"
            >
                Click Me
            </Button>
        </div>
    );
}

export default App;
