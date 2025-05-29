const orderList = document.getElementById('pedidos');
const addOrderBtn = document.getElementById('orden');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    const progress=document.createElement('meter')
    progress.id= `meter-${order.id}`
    progress.min=0
    progress.max=100
    progress.value=0
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    listItem.appendChild(progress)
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    // TODO: Actualizar el estado del pedido a "Completado"
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => resolve('completado'), 5000);
    });

    function animateMeter(id, duration) {
        const meter = document.getElementById(`meter-${id}`);
        const start = Date.now();

        function update() {
            const now = Date.now();
            const elapsed = now - start;
            const percentage = Math.min((elapsed / duration) * 100, 100);
            
            meter.value = percentage;

            if (elapsed < duration) {
            requestAnimationFrame(update);
            } else {
            console.log("¡Tiempo completado!");
            }
        }
        requestAnimationFrame(update);
    }

    promesa.then(resultado => updateOrderStatus(order, resultado));
    animateMeter(order.id, 5000)
}