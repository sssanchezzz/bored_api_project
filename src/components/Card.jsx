import BoredButton from '../components/ui/BoredButton';

const Card = (props) => {
    const { data, buttonHandler } = props;

    return (
        <div className='card'>
            <div className='card-inner-container'>
                {data.activity ? (
                    <ul className='card-activities-list'>
                        <li>
                            <span>Activity: </span>
                            <span>{data.activity}</span>
                        </li>
                        <li>Type: {data.type}</li>
                        <li>Participants: {data.participants}</li>
                        <li>Price: {data.price}</li>
                    </ul>
                ) : (
                    <div className='card-error'>{data.error}</div>
                )}
            </div>

            <BoredButton onClick={buttonHandler}>One More</BoredButton>
        </div>
    );
};

export default Card;
