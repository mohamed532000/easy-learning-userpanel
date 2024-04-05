import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { additionPlan } from "../../../../project-actions/PlansActions";
PlanCard.propTypes = {
    planStatus : PropTypes.string,
    planImg : PropTypes.string,
    planName : PropTypes.string,
    featureStatusImg : PropTypes.string,
    planFeatures : PropTypes.array,
    featureText : PropTypes.string,
    planPrice : PropTypes.number,
    loginPopubFunction : PropTypes.func,
    checkoutPlanSection : PropTypes.string
}

export default function PlanCard({planStatus , planImg , planName , planFeatures , planPrice , loginPopubFunction}) {
    let dispatch = useDispatch();
    let [premium , setPremium] = useState();
    let usersAccounts = useSelector(state => state.user);
    let [user , setUser] = useState()
    
    useEffect(()=>{
        planStatus === "premium" && setPremium(true)
    },[planStatus]);

    useEffect(()=>{
        usersAccounts.length > 0 ? setUser(true) : setUser(false);
    },[usersAccounts])

    let planWillAdd = {planName , planFeatures , planPrice , planStatus};
    return (
        <> 
            <div className="plan-card my-3 md:my-0 lg:my-0 flex flex-col rounded-lg py-3 px-8 transition-all duration-500  shadow-sm hover:shadow-2xl shadow-slate-300 hover:translate-y-[-4px]">
                <div className="plan-img-and-name flex flex-col">
                    <img loading="lazy"src={planImg} alt="plan-img" className="w-[50px] md:w-[70px] lg:w-[70px]" />
                    <h2 className="plan-name my-4 text-2xl">{planName}</h2>
                </div>
                <div className="planfeatures flex flex-col border-t py-4 border-slate-400">
                    {planFeatures.map((feature , index)=>{
                        return (
                            <div key={index} className="feature-div flex justify-start items-center my-2">
                            {
                            planStatus === "standard" ?
                            feature === "Personal Instructor Assitance" || feature === "Interactive practice sessions"
                            ?
                            <> 
                                <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/icons/cross.svg" alt="img" />
                                <p className="text-sm md:text-xl lg:text-xl ml-1">{feature}</p>
                            </>
                            :
                            <>
                                <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/icons/tick-2.svg" alt="img" />
                                <p className="text-sm md:text-xl lg:text-xl ml-1">{feature}</p>
                            </>
                            :
                            <> 
                                <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/icons/tick-2.svg" alt="img" />
                                <p className="text-sm md:text-xl lg:text-xl ml-1">{feature}</p>
                            </>
                            }
                            </div>
                        )
                    })}
                </div>
                <div className="plan-price flex flex-col my-2">
                    <h2 className="price text-sm md:text-xl lg:text-xl mb-2 text-[#9c4df4] font-bold">$ {planPrice} /  Yearly</h2>
                    <button className={`w-full rounded-lg py-3 md:py-04 lg:py-4 flex justify-center items-center ${premium ? `bg-[#9b4df4]` : `bg-[#9b4df486]` }  hover:translate-y-[-4px] shadow-md hover:shadow-slate-500 transition-all duration-500 my-2 md:my-4 lg:my-4 font-bold tracking-wide text-sm md:text-xl lg:text-xl text-white`} onClick={()=>{
                        if(user){
                            dispatch(additionPlan(planWillAdd));
                        }else {
                            loginPopubFunction();
                        }
                    }}>Become A Member</button>
                </div>
            </div>
        </>
    )
}