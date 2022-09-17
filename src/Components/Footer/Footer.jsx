import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                {/*Column1*/}
                <div className='col'>
                    <h5>ABOUT</h5>
                    <ul className='list-unstyled'>
                        <li><a className='about-us' href="/about-us">About Us</a></li>
                        <li><a className='history' href="/history">History</a></li>
                        <li><a className='people' href="/people">People</a></li>
                        <li><a className='career' href="/career">Career</a></li>
                    </ul>
                </div>
                {/*Column2*/}
                <div className='col'>
                  <h5>HELP</h5>
                    <ul className='list-unstyled'>
                        <li><a className='user-guide' href="/user-guide">New User Guide</a></li>
                        <li><a className='campaign-tutorial' href="/campaign-tutorial">Campaigner Tutorial</a></li>
                        <li><a className='pledger-tutorial' href="/pledger-tutorial">Pledger tutorial</a></li>
                        <li><a className='payments' href="/payments">Payments</a></li>
                    </ul>
                </div>

                {/*Column3*/}
                <div className='col'>
                  <h5>SUPPORT</h5>
                    <ul className='list-unstyled'>
                        <li><a className='support' href="/support">Customer Support</a></li>
                        <li><a className='report' href="/report">Report</a></li>
                        <li><a className='bug-report' href="/bug-report">Report a Bug</a></li>
                        <li><a className='request' href="/request">Feature Request</a></li>
                    </ul>
                </div>

                {/*Column4*/}
                <div className='col'>
                  <h1 className='name'>Jogaar</h1>
                  <p className='trademark'>@ 2022 Jogaar Ltd</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer