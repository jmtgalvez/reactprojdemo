import React from 'react'

const PersonnelList = (props) => {
  return (
    <div className='container'>
        <table className="table table-light table-striped" style={{textAlign:'center'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact No</th>
                </tr>
            </thead>
            <tbody>
                {props.personnels.map( personnel => (
                    <tr>
                        <td>{personnel.id}</td>
                        <td>{personnel.firstname} {personnel.lastname}</td>
                        <td>{personnel.email}</td>
                        <td>{personnel.contactno}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default PersonnelList