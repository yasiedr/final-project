import React from 'react'
import RecipeList from '../Component/RecipeList'
let recipes = []
export default function Home() {
    return (
        <main>
            <div className="flex-row justify-space-between">
                <div className={`col-13 mb-4  'col-lg-6'`}>

                    <RecipeList recipes={recipes}  />

                </div>
            </div>
        </main>
    )
}
