import { useEffect, useState } from "react"

const useApp = () => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch("../Apps.json")
        .then(res => res.json())
        .then(data => setApps(data)
        .finally(() => setLoading(false))
        )
    },[])

    return {apps, loading}
}

export default useApp;