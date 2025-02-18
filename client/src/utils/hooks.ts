import { useCallback, useEffect, useState } from "react"

const API_URI = "http://localhost:3000/api"

export const useData = (endpoint: string) => {
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (data || loading) { return }
		console.log("requesting data")
		setLoading(true)
		fetch(`${API_URI}/${endpoint}`, { method: "GET" })
			.then(async (res) => await res.json())
			.then((res) => {
				console.log(res)
				setData(res)
				setLoading(false)
			})
			.catch(e => console.error(e))
	}, [])

	return { data, loading }
}

export const useMutation = <TData extends {},>(endpoint: string, initialBody?: TData) => {
	const [data, setData] = useState<TData>();
	const [loading, setLoading] = useState(false);

	const mutate = useCallback(
		(body?: TData) => {
			setLoading(true)
			fetch(
				`${API_URI}/${endpoint}`,
				{ method: "POST", body: JSON.stringify(body || initialBody), headers: { "Content-Type": "application/json" } }
			)
				.then(res => res.json())
				.then(res => {
					console.log(res)
					setData(res)
					setLoading(false)
				})
		},
		[endpoint, data]
	)

	return [mutate, data, loading]
}

export default {}