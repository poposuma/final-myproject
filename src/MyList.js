import { useEffect, useState } from 'react';
import video from './dog.mp4';
import NotesForTheDay from './NotesForTheDay';
import uuid from 'react-uuid';


const MyList = () => {
    
      const [mealPlans, setMealPlans] = useState(
        localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
      const [selecteDay, setSelecteDay] = useState(false)
    
      useEffect(() => {
        localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
      }, [mealPlans])
    
      const addMeal = () => {
        const newMeal = {
          title: "Today is...",
          id:uuid(),
          mealForYourDay: "",
          walkingForYourDay: "",
          appointment: ""
          }
    
          setMealPlans([newMeal, ...mealPlans])
          
      }
      
      const deleteDay = (mealId) => {
        setMealPlans(mealPlans.filter(({id}) => id !== mealId))
      }
    
      const updateDay = (myUpdatedMeal) => {
        const updatedMeals = mealPlans.map((mealPlan) => {
          if (mealPlan.id === myUpdatedMeal.id) {
            return myUpdatedMeal;
          }
          return mealPlan;
        })
        setMealPlans(updatedMeals)
      }
      
      const getActiveMeal = () => {
        return mealPlans.find(({id})=> id === selecteDay)
      }
    
    return  <div className="container">
                <video autoPlay muted loop>
                <source src={video} type="video/mp4"/>
                </video>
                <h1>Complete a weekly plan for your dog</h1>

                <div className='chekList'>
                    <div>
                    <button className="button-add" onClick={addMeal}>Add a day</button>
                    </div>
                    <div>
                        {mealPlans.map(({id, title, mealForYourDay, appointment}) => (
                            <div key={id} className={`meal ${id === selecteDay ? "selected" : "default"}`}
                            onClick={() => setSelecteDay(id)}
                            >
                                <p className='field'>{title}</p>
                                <p className='field'>{mealForYourDay.substring(0, 60)}</p>
                                <p className='field'>{appointment.substring(0, 60)}</p>
                                <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
                            </div>
                        ))}
                    </div>

                    <div>
                    <NotesForTheDay selecteDay={getActiveMeal()} updateDay={updateDay}/>
                    </div>
                </div>
            </div>
            
}



export default MyList;