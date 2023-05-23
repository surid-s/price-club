import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Feature from '../../Feature/Feature';

const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-indigo-500 m-4 rounded-md p-3'>
            <div>
                <h2>
                    <span className='text-6xl font-bold text-yellow-50'>{option.price}</span><span className='text-white font-bold'>$/mon</span>
                </h2>
                <p className='text-3xl  my-4'>
                    {option.name}
                </p>
            </div>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='bg-green-500 w-full rounded py-2 text-white font-bold mt-4'>Buy Now</button>
        </div>
    );
};

export default PriceOption;