import styles from './CardsContainer.module.css';

function Card({ cardObj, onClick }) {
    return (
        <div onClick={() => onClick?.(cardObj)} className={styles.card} data-id={cardObj.idMeal}>
            <div>
                <img
                    className={styles.cardImg}
                    src={cardObj.strMealThumb}
                    alt={cardObj.strMeal}
                    style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                />
            </div>
            <p>{cardObj.strMeal}</p>
            <hr style={{backgroundColor: '#202020', width: '100%'}}/>
            <div className='flex'>
                <p>{cardObj.strArea}</p><hr style={{height: '100%'}}/><p>{cardObj.strCategory}</p>
            </div>
            <p className={styles.clickAnimation} style={{fontFamily: 'sans-serif'}}>Click for more details!</p>
        </div>
    );
}

export default Card;