import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Training from './Training';
import Instructions from './Instructions';
import MyList from './MyList';
import uuid from 'react-uuid';


function App() {
   
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

  return <Router>

    <nav>
      <Link to='/myList' className='link'>MyList</Link>
      <Link to='/training' className='link'>Dog training</Link>
      <Link to='/instructions' className='link'>Instructions</Link>
    </nav>
    <Routes>
      <Route path='/myList' element={<MyList mealPlans={mealPlans} addMeal={addMeal} deleteDay={deleteDay} selecteDay={selecteDay} setSelecteDay={setSelecteDay} updateDay={updateDay} getActiveMeal={getActiveMeal}/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/instructions' element={<Instructions/>}/>
    </Routes>
  </Router>

 
}

export default App;
