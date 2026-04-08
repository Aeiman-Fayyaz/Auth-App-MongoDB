// Hook
const { useState } = React

// Create function
function App() {
    // Create states
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [contact , setContactno] = useState("")

    // Signup Function
    const signup = () => {
        // Data Fetching
        fetch("http://localhost:5000/signup" , {
            
        })
    }
}