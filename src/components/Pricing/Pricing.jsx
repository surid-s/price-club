import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {

    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Ajaira Feature',
                'Kool Feature',
                'Hudai Feature',
                'Good Feature',
            ]
        },
        {
            id: 2, name: 'Premium', price: 9.99, features: [
                'Everythin on free',
                'Extra Feature',
                'Unnecessary Feature',
                'Ajaira Feature',
                'Kool Feature',
                'Hudai Feature',
                'Good Feature',
            ]
        },
        {
            id: 3, name: 'Gold', price: 19.90, features: [
                'Everythin on Premium',
                'Extra Feature',
                'Unnecessary Feature',
                'Ajaira Feature',
                'Kool Feature',
                'Hudai Feature',
                'Good Feature',
            ]
        }
    ]
    return (

        <div>
            <h2 className="text-5xl font-bold bg-teal-900 text-white p-12 mt-12">Best Deal of the Town!</h2>
            <div className='mt-4 grid md:grid-cols-3 gap-3'>

                {
                    pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;