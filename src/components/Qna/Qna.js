import React from 'react';
import './Qna.css'
const Qna = () => {
    return (
        <div>
            <h2 className='qna-header'>question and answer</h2>
            <div className='qna-body'>
            <h4> How works react ?</h4>
            <p>react is java script libary its not a farame work . thats create user interfaces . it use to make single page application . react works in declaratibe code . i use decalarative code to create components , components are reusebale,components let you split the ui independent, components are like java script function. react uses a declaretive paradigm that make easier to reason about my application and aims both effisient and flexible. it designs simple views for each state my application, and React will efficiently updte and render just the right component when im  data changes. </p>
            <h4> Difference between State and Props ?</h4>
            <p>
                
                props :- props is an boject which stored the value of attibute of tag and work similar html attributes props are immutable i cant chance and modifide the props form inside componennt.
                1.props is read only. 2: props is immitable. 3:props allow to data form one component to any other components as a argument. 4: props acrcssed by the child components.
                <br />
                state:- state is updatable stuctur is used to contain dataa od informetion about components and chance any time. if user click of intarect , the state can change . 1: state change asynchoronus .2:state is an muatable 3:state hold components informetion. 4:state can be use dynamic change the components.
            </p>
            <h4> how works use state ?</h4>
            <p>
                use state is hook that alows my to have state vaiable in funcitonal components, i am pass the initial state to this function and it is return a variable the crant value .use state takes the initial value of the state variabl as a argument.
                 use state hook is a standared hook that ships with react and it  declared as a named export of the react moduale.
                 react keeps track of these state variables and ensures they stay up-to-date on subsekuent re renders the component
            </p>
            </div>
        </div>
    );
};

export default Qna;