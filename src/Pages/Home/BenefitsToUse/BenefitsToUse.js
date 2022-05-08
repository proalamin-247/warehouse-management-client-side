import React from 'react';
import './BenefitsToUse.css'

const BenefitsToUse = () => {
    return (
        <section className="container my-5" id="faq">
            <h1 className="text-center">Benefits of use <span className='text-primary'>warehouse management</span></h1>
            <div className="row  m-5">
                <div className="col-md-6 col-12">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                    What are the advantages of using a warehouse management system?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    The WMS will benefit their operational efficiency for both labor and physical space by monitoring work processes at various levels, enhancing productivity, and increasing asset utilization.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                    What is an inventory management system?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    An inventory management system is a tool that allows you to track goods across your business’s supply chain. It optimizes the entire spectrum spanning from order placement with your vendor to order delivery to your customer, mapping the complete journey of a product.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                    Inventory management software features:-
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    Barcode scanning, Inventory optimization, Stock notifications, Report generation, Multilocation management, Stock returns handling, Material grouping. (as soon as this features added. right now under maintanance)
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                    Finding the right inventory management system
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    If you’re looking to purchase inventory management software to suit your business needs visit the Warehouse Management to evaluate options from over hundreds of products. You can filter the products by the number of intended users, popular features, deployment type, etc.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src="https://www.18wheelslogistics.com/uploads/blog_post/large/TheAdvantagesofUsingaWarehouseManagementSystem.jpg" width="400" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default BenefitsToUse;