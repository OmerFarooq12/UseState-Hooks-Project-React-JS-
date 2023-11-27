import React from 'react'

export default function Card(props) {
  return (
    <div className='container-fluid mt-5'>
        <h1 className={`text-center my-5 text-uppercase ${props.mode === 'light' ? '' : 'text-light'}`}>Services</h1>
        <div className='row'> 
            <div className='col-md-4'>
                <div className={`card p-3 ${props.mode === 'light' ? '' : 'bg-dark'}`}>
                     <i className={`fa  fa-laptop text-center fa-lg  ${props.mode === 'light' ? '' : 'text-light'} `} aria-hidden="true"></i>
                    <div className="card-body">
                    <p className={`card-text  ${props.mode === 'light' ? '' : 'text-light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
            </div>
            </div>
            <div className='col-md-4'>
                <div className={`card p-3 ${props.mode === 'light' ? '' : 'bg-dark'}`}>
                     <i className={`fa  fa-television text-center fa-lg  ${props.mode === 'light' ? '' : 'text-light'} `} aria-hidden="true"></i>
                    <div className="card-body">
                    <p className={`card-text  ${props.mode === 'light' ? '' : 'text-light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
            </div>
            </div>
            <div className='col-md-4'>
                <div className={`card p-3 ${props.mode === 'light' ? '' : 'bg-dark'}`} >
                     <i className={`fa  fa-mobile text-center fa-lg  ${props.mode === 'light' ? '' : 'text-light'} `} aria-hidden="true"></i>
                    <div className="card-body">
                    <p className={`card-text  ${props.mode === 'light' ? '' : 'text-light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
            </div>
            </div>
        </div>
    </div>
  )
}
