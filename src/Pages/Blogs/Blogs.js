import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-3 text-primary'>question and answer</h1>
            <div class="card w-100 mb-5">
                <div class="card-body">
                    <h5 class="card-title"> Difference between javascript and nodejs</h5>
                    <p class="card-text">JavaScript is a simple programming language that runs in any browser JavaScript Engine.
                        <br />
                        Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                    </p>
                    <p>
                        Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.
                        <br />
                        Node JS mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.
                    </p>
                </div>
            </div>
            <div class="card w-100 mb-5">
                <div class="card-body">
                    <h5 class="card-title"> Differences between sql and Nosql databases.</h5>
                    <p class="card-text">SQL databases are relational.
                        <br />
                        NoSQL databases are non-relational.
                    </p>
                    <p>
                        SQL databases use structured query language and have a predefined schema. 
                        <br />
                        NoSQL databases have dynamic schemas for unstructured data.
                    </p>
                    <p>
                        SQL databases are vertically scalable.
                        <br />
                        NoSQL databases are document, key-value, graph, or wide-column stores.
                    </p>
                </div>
            </div>
            <div class="card w-100 mb-5">
                <div class="card-body">
                    <h5 class="card-title">When should you use nodejs and when should you use mongodb?</h5>
                    <p class="card-text">
                        Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                    </p>
                    <p>
                        MongoDB is an open-source, non-relational database developed by MongoDB, Inc. MongoDB stores data as documents in a binary representation called BSON (Binary JSON).MongoDB is horizontally scalable, which helps reduce the workload and scale your business with ease.The database doesn’t require a database administrator. Since it is fairly user-friendly in this way, it can be used by both developers and administrators.It’s high-performing for simple queries.You can add new columns or fields on MongoDB without affecting existing rows or application performance.
                    </p>
                </div>
            </div>



        </div>
    );
};

export default Blogs;