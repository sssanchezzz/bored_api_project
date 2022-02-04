import classes from './card.module.css';
import Cardfield from './CardField';

const Card = (props) => {
    const { data, isLoading } = props;
    // console.log(isLoading);
    return isLoading ? (
        <h1>Loading</h1>
    ) : (
        <div className={classes['card-inner-container']}>
            {data.activity ? (
                <ul className={classes['card-activities-list']}>
                    <li>
                        <Cardfield left='Activity: ' right={data.activity} />
                    </li>
                    <li>
                        <Cardfield left='Type: ' right={data.type} />
                    </li>
                    <li>
                        <Cardfield
                            left='Participants: '
                            right={data.participants}
                        />
                    </li>
                    <li>
                        <Cardfield left='Price: ' right={data.price} />{' '}
                    </li>
                </ul>
            ) : (
                <div className={classes['card-error']}>{data.error}</div>
            )}
        </div>
    );
};

export default Card;
