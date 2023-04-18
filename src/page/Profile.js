import React from 'react'
import RecipeForm from '../Component/RecipeForm'
import RecipeList from '../Component/RecipeList'
const recipes = []
export default function Profile() {
    return (
        <div>
            <div className="flex-row ">

            </div>

            <div className="flex-row justify-space-between ">
                <div className="col-12 col-lg-8">
                    <RecipeList recipes={recipes} />
                </div>
            </div>
            <div > <RecipeForm /></div>
        </div>
    )
}
