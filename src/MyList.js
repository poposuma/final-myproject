import video from './dog.mp4';
import NotesForTheDay from './NotesForTheDay';

const MyList = ({addMeal, mealPlans, deleteDay, selecteDay, setSelecteDay, updateDay, getActiveMeal}) => {
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
                            <div className={`meal ${id === selecteDay ? "selected" : "default"}`}
                            onClick={() => setSelecteDay(id)}
                            >
                                <p className='field'>{title}</p>
                                <p className='field'>{mealForYourDay.substring(0, 150)}</p>
                                <p className='field'>{appointment.substring(0, 150)}</p>
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