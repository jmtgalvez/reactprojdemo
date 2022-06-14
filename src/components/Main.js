import React from 'react';
import logo from '../logo.svg';
import BulletinBoard from './BulletinBoard';
import PersonnelList from './PersonnelList.js'
import Welcome from './Welcome';
import BoardData from './BoardData.js';


let message = <h2>This is my first React page!</h2>;
let message2 =
<div>
<h3>
    Time now is {new Date().toLocaleTimeString()}
</h3>
</div>;

// const ME = {
//     firstname: 'miguel',
//     lastname: 'galvez',
//     email: 'sample@email.com'
// }

const personnels = [
    {
        id: 0,
        firstname: 'Henson',
        lastname: 'Hendaughter',
        email: 'henson@hendaughter.com',
        contactno: '8-7000'
    },
    {
        id: 1,
        firstname: 'Adonis',
        lastname: 'Adonephew',
        email: 'adonis@adonephew.org',
        contactno: '789-9999'
    },
    {
        id: 2,
        firstname: 'Nike',
        lastname: 'Adidas',
        email: 'nike@adidas.net',
        contactno: '8-6236'
    },
    {
        id: 3,
        firstname: 'Richae',
        lastname: 'Poorae',
        email: 'richae@poorae.ph',
        contactno: '*121#'
    },
    {
        id: 4,
        firstname: 'Juan',
        lastname: 'Two',
        email: 'juan@two.com',
        contactno: '*143#'
    },
    {
        id: 5,
        firstname: 'Tristan',
        lastname: 'Dostan',
        email: 'tristan@dostan.gg',
        contactno: '171'
    },
    {
        id: 6,
        firstname: 'Argel',
        lastname: 'Arwax',
        email: 'argel@arwax.com',
        contactno: '211'
    },
    {
        id: 7,
        firstname: 'Ken',
        lastname: 'Kenat',
        email: 'ken@kenat.com',
        contactno: ''
    },
    {
        id: 9,
        firstname: 'Spencer',
        lastname: 'Spencil',
        email: 'spencer@spencil.com',
        contactno: ''
    }
]

// const boardData = [
//     {
//         id: 1,
//         category:'Curent Events',
//         post: 'Our current event for the day'
//     },
//     {
//         id: 2,
//         category: 'Announcement',
//         post: "We have an announcment"
//     },
//     {
//         id: 3,
//         category: 'Quotes of the Day',
//         post: 'Quotable quotes here'
//     },
//     {
//         id: 4,
//         post: 'We will keep you posted'
//     },
//     {
//         id: 5,
//         category: "Don't overthink"
//     }
// ]



function Main() {
    const boardData = BoardData.map( data => (
                        <BulletinBoard
                            id={data.id}
                            category={data.category}
                            post={data.post}
                        />
                      ))

    return (
        <main>
            <div className="App-header">
                {message}
                {message2}
                {boardData}
                {/* {boardData.map( data => (
                    <BulletinBoard
                        category={data.category}
                        post={data.post}
                    />
                ))} */}
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                <PersonnelList
                    personnels = {personnels}
                />
                {personnels.map( person => (
                    <Welcome 
                        name={person.firstname}
                    />
                ))}
            </div>
        </main> 
    );
}

export default Main;