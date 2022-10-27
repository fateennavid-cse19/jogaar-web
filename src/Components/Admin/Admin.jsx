import React from 'react'
import './Admin.css';

const Admin = () => {
  return (

    <div className='admin'>

        <h1 className='main-heading'>Admin Dashbaord</h1>
        
        <div className='admin-box-container'>
            
            <div className='admin-box-1'>
                <h1 className='campaign-approve'>Ended Campaigns</h1>
                <table className='table-expired'>
                
                    <tr className='rows'>
                        <th>Campaign Name</th>
                        <th>Total Earnings</th>
                        <th>Milestones Met</th>
                        <th>Scam Alert Status</th>
                        <th>Aprroval</th>
                    </tr>

                    <tr>
                        <td>
                            <div className='admin-box-1-item'>
                                Campaign 1
                            </div>
                        </td>
                            <div className='admin-box-1-item'>
                                10,000&#2547;
                            </div>
                        <td>
                            <div className='admin-box-1-item'>
                                01/10

                                
                            </div>

                        </td>

                        <td>
                        <div className='admin-box-1-item'>
                            Negative
                            <label className='switch'>
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        </td>

                        

                        
                        
                    </tr>

                    

                    <tr>
                        <td>
                            <div className='admin-box-1-item'>
                                Campaign 2
                            </div>
                        </td>
                            <div className='admin-box-1-item'>
                                20,000&#2547;
                            </div>
                        <td>
                            <div className='admin-box-1-item'>
                                02/10

                            </div>


                        </td>

                        <td>
                        <div className='admin-box-1-item'>
                            Positive
                            <label className='switch'>
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        </td>
                        
                    </tr>

                    <tr>
                        <td>
                            <div className='admin-box-1-item'>
                                Campaign 3
                            </div>
                        </td>
                            <div className='admin-box-1-item'>
                                30,000&#2547;
                            </div>
                        <td>
                            <div className='admin-box-1-item'>
                                03/10

                                
                            </div>

                        </td>

                        <td>
                        <div className='admin-box-1-item'>
                            Negative
                            <label className='switch'>
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        </td>
                        
                    </tr>

                    <tr>
                        <td>
                            <div className='admin-box-1-item'>
                                Campaign 4
                            </div>
                        </td>
                            <div className='admin-box-1-item'>
                                40,000&#2547;
                            </div>
                        <td>
                            <div className='admin-box-1-item'>
                                04/10

                                
                            </div>

                        </td>

                        <td>
                        <div className='admin-box-1-item'>
                            Negative
                            <label className='switch'>
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        </td>
                        
                    </tr>
                    
                </table>
                

                
                
                <br /><br /><br />
                <a href="/admin/ended-campaigns" className='see-more'>See More</a>
            </div>

            
            
        </div>

        <h1 className='main-heading'>Options</h1>
        <a href="/admin/add-mod">
            <button className='mod-add'>
            Add a new moderator
            </button></a>
        
    </div>
    
  )
}

export default Admin