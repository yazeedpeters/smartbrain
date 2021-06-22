import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
            {'Does your picture contain faces? Let me have a look and see'}
            </p>
            <div className='centre'>
                <div className='form centre pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue'>Search</button>
                </div>
            </div>
        </div>
    );
}


export default ImageLinkForm;