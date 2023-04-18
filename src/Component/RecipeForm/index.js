import React from 'react';


const RecipeForm = () => {

  return (
    <main className='flex-row justify-center '>
      <div className='col-12 col-md-9'>
        <div className='card'>
          <h4 className='card-header'>Add to the baby favourites</h4>
          <div className='card-body'>
            <form
              className="flex-row justify-center justify-space-between-md align-stretch"
            >
              <textarea
                placeholder="Recipe Text"

                className="form-input-recipe "

              ></textarea>
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecipeForm;
