import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    console.log(option)
    const {name, features, price} = option;
    return (
        <div className='bg-blue-700 p-6 rounded-lg flex flex-col'>
            <h2 className=' text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-4 text-center'>{name}</h4>
            <div className='ml-10 flex-grow'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className='bg-green-600 font-bold mt-6 w-full py-3 rounded-lg hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;