import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Rel() {
    const navigate = useNavigate()
    useEffect(() => {
        navigateToWorkers()
    })

    const navigateToWorkers = () => {
        navigate('/worker')
    }
}