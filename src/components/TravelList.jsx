import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);
  function handleDelete(clickedId) {
    const filteredCards = plans.filter((aPlan) => {
      if (aPlan.id !== clickedId) {
        return true;
      }
    });
    setPlans(filteredCards);
  }
  return (
    <div className="cards-wrapper">
      {plans.map((plan) => {
        return (
          <div key={plan.id} className="card">
            <img
              src={plan.image}
              alt={plan.destination}
              className="card-img"
            ></img>
            <div className="card-text">
              <h3 className="card-header">
                {plan.destination} ({plan.days} days)
              </h3>
              <p className="card-description">{plan.description}</p>
              <p>
                <strong>Price:</strong>
                {plan.totalCost} €
              </p>
              <div>
                {plan.totalCost < 350 ? (
                  <span className="btn btn-deal">Great Deal</span>
                ) : null}
                {plan.totalCost > 1500 ? (
                  <span className="btn btn-premium">Premium</span>
                ) : null}
                {plan.allInclusive ? (
                  <span className="btn btn-all-incl">All-Inclusive</span>
                ) : null}
              </div>
              <button
                className="btn btn-delete"
                onClick={() => {
                  handleDelete(plan.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
