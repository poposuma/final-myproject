const NotesForTheDay = ({ selecteDay, updateDay }) => {
    
    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selecteDay,
            [myInput]: value
        })
    }
    
    if (!selecteDay) return <p>Plan your week</p>

    return <div className="plan">
        <div className="adiding">
            <input
            type="text"
            className="myInput"
            placeholder="Monday"
            id="title"
            value={selecteDay.title}
            onChange = {(e) => editMyMeal("title", e.target.value)}
            />

            <textarea
            placeholder="Food...morning/evening feeding...vitamins"
            id="mealForYourDay"
            value={selecteDay.mealForYourDay}
            onChange={(e) => editMyMeal("mealForYourDay", e.target.value)}
            />

            <textarea
            placeholder="Walking... time.. km..."
            id="mealForYourDay"
            value={selecteDay.walkingForYourDay}
            onChange={(e) => editMyMeal("walkingForYourDay", e.target.value)}
            />

            <textarea
            placeholder="Other notes... groomer appointment, vet appointment"
            id="mealForYourDay"
            value={selecteDay.appointment}
            onChange={(e) => editMyMeal("appointment", e.target.value)}
            />



        </div>

    </div>
}

export default NotesForTheDay;