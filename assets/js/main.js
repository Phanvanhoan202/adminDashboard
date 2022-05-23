const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sideMenu = document.querySelector('aside');
const themeTogger = document.querySelector('#theme-toggle');
const root = document.querySelector(':root');

//Show sideBar
menuBtn.addEventListener('click', () =>{
    sideMenu.style.transform = 'translateX(0)';
})

//hidden sidebar
closeBtn.addEventListener('click', () =>{
    sideMenu.style.transform = 'translateX(-100%)';
})

// Theme dark mode
themeTogger.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-varaibles');

    themeTogger.querySelector('.theme-toggle span:nth-child(1)').classList.toggle('active');
    themeTogger.querySelector('.theme-toggle span:nth-child(2)').classList.toggle('active');

})


// orders

Orders.forEach( order => {
    const tr = document.createElement('tr');
    const trContent = ` <tr>
                            <td> ${order.productName}</td>
                            <td>  ${order.productNumber}</td>
                            <td> ${order.productPayment}</td>
                            <td class="${order.shipping === 'pending' ? 'warning' : order.shipping === 'Declined' ? 'danger' : 'primary' }"> ${order.shipping}</td>
                            <td class="primary"> Detail</td>
                        </tr> `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);

})

