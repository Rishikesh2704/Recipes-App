import { Suspense } from "react"
import SearchUI from "./SearchUI"

const FetchResults = async (query:string) =>{
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((data) => data.json()).then( (meals) => meals.meals )
    
}

export default async function({params}:{params:Promise<{search:string}>}) {
    const { search } = await params
    console.log(search)
    const list = FetchResults(search)
    return(
        <Suspense fallback={<h2>Loading...</h2>}>
            <SearchUI results={list} />
        </Suspense>
    )
}