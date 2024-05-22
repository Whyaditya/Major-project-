import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PricingPlans = () => {
  return (<>
    <header>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal text-body-emphasis">Pricing</h1>
      <p class="fs-5 text-body-secondary">select the plan as you need </p>
    </div>
  </header>
    <main>
      <div className="row mb-3 text-center justify-content-evenly mt-5">
        <div className="col-4">
          <div className="card mb-4 rounded-3 shadow-sm ">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/lifetime</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>access to all non prime posting</li>
                <li>get contact info of non prime posting</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <Link to='/signup' className="w-100 btn btn-lg btn-outline-primary">Sign up for free</Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Prime</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
              <li>access to all prime posting</li>
                <li>get contact info of prime posting</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
            </div>
          </div>
        </div>
       
      </div>


     
    </main>
  </>
  );
};

export default PricingPlans;
