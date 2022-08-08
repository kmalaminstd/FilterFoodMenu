import meals from "./allMeals.js"

const selectors = {
    allSelectors(){
        const allMealsBtnElm = document.querySelector('.mealsBtn')
        const mealListElm = document.querySelector('.mealsList')

        return {
            allMealsBtnElm,
            mealListElm
        }
    }
}

const Ui = {
    gettingAllMeals(){
        
        meals.forEach( meal => {

            this.showInUi(meal)
            
        })
    },

    sortedMills(category){
        const {mealListElm} = selectors.allSelectors()
        mealListElm.innerHTML = ""
        meals.forEach( meal => {

            if(meal.category === category){
                this.showInUi(meal)
                // console.log(meal);
                const {mealListElm} = selectors.allSelectors()
                
            }
            
        })
    },

    showInUi(meal){
        console.log(meal);
        
        const {mealListElm} = selectors.allSelectors()
        
    //    console.log(meal);
       let elm = `
       <div class="meal">
       <div class="mealImg">
           <img src="${meal.MealImage}" alt="meal image">
       </div>
       <div class="mealDetails">
           <div class="mealSumm">
               <p class="mealName">${meal.MealName}</p>
               <p class="price">${meal.MealPrice}</p>
           </div>
           <div class="mealText">
              <p>${meal.MealDetails}</p>
           </div>
       </div>
        </div>
       `
    
       mealListElm.insertAdjacentHTML('beforeend', elm)
     // mealListElm.innerHTML = elm
    },

    initialize(){
        const{
            mealListElm,
            allMealsBtnElm
        } = selectors.allSelectors()

        this.gettingAllMeals()

        allMealsBtnElm.addEventListener('click', e => {
            if(e.target.classList.contains('all')){
                mealListElm.innerHTML = ""
                this.gettingAllMeals()
            }else if(e.target.classList.contains('breakfast')){
                this.sortedMills('breakfast')
            }else if(e.target.classList.contains('lunch')){
                this.sortedMills('lunch')
            }else if(e.target.classList.contains('shakes')){
                this.sortedMills('shakes')
            }else if(e.target.classList.contains('dinner')){
                this.sortedMills('dinner')
            }
        })

    }
}

Ui.initialize()