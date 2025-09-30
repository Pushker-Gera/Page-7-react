import React from 'react'

const Table = () => {
  return (
      <table>
          <tr>
              <th class="first-col"></th>
              <th>
                  <h4 class="heading">Basic Plan</h4>
                  <p class="para">All the basic for starting a new business</p>
              </th>
              <th>
                  <h4 class="heading">Pro Plan</h4>
                  <p class="para">Everithing you need for a growing business</p>
              </th>
              <th>
                  <h4 class="heading">Company Plan</h4>
                  <p class="para">Perfect for companies, agencies & teams</p>
              </th>
          </tr>
          <tr>
              <td class="first-col">Price</td>
              <td class="amount">
                  <span>$</span>19
              </td>
              <td class="amount">
                  <span>$</span>49
              </td>
              <td class="amount">
                  <span>$</span>99
              </td>
          </tr>
          <tr>
              <td class="first-col">Hosted Projects</td>
              <td class="hosted-projects">Unlimited</td>
              <td class="hosted-projects">Unlimited</td>
              <td class="hosted-projects">Unlimited</td>
          </tr>
          <tr>
              <td class="first-col">UnHosted Projects</td>
              <td class="Unhosted-projects">2</td>
              <td class="Unhosted-projects">10</td>
              <td class="Unhosted-projects">Unlimited</td>
          </tr>
          <tr>
              <td class="first-col">Billing</td>
              <td class="box">
                  <div class="box-blank">
                  </div>
              </td>
              <td class="box">
                  <div class="box-fill">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 3.875L3.64706 6.375L9 1.375" stroke="#1E0E62" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  </div>
              </td>
              <td class="box">
                  <div class="box-fill">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 3.875L3.64706 6.375L9 1.375" stroke="#1E0E62" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  </div>
              </td>
          </tr>
          <tr>
              <td class="first-col">Support</td>
              <td class="support">Forum</td>
              <td class="support">Chat</td>
              <td class="support">Phone Call</td>
          </tr>
          <tr>
              <td class="first-col">Custom Domen</td>
              <td class="box">
                  <div class="box-blank"></div>
              </td>
              <td class="box">
                  <div class="box-blank"></div>
              </td>
              <td class="box">
                  <div class="box-fill"><svg width="10" height="8" viewBox="0 0 10 8" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 3.875L3.64706 6.375L9 1.375" stroke="#1E0E62" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </div>
              </td>
          </tr>
          <tr>
              <td class="first-col">Dashboard</td>
              <td class="box">
                  <div class="box-blank"></div>
              </td>
              <td class="box">
                  <div class="box-blank"></div>
              </td>
              <td class="box">
                  <div class="box-fill">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 3.875L3.64706 6.375L9 1.375" stroke="#1E0E62" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  </div>
              </td>
          </tr>
          <tr>
              <td class="first-col"></td>
              <td>
                  <button class="not-colored">Get Started for Free</button>
              </td>
              <td>
                  <button class="colored">Get Started for Free</button>
              </td>
              <td>
                  <button class="not-colored">Get Started for Free</button>
              </td>
          </tr>
      </table>
  )
}

export default Table