function OrderStatus ({status}) {

    let content;

    switch (status) {
        case "pending":
            content = (
                <div>
                    <h3>Order Pending</h3>
                    <p>Your order is waiting to be confirmed.</p>
                </div>
            );
            break;

        case "shipped": 
        content = (
            <div>
                <h3>Order Shipped</h3>
                <p>Your order is on its way!</p>
            </div>
        );
        break;

        case "delivered": 
        content = (
            <div>
                <h3>Order Delivered</h3>
                <p>Your order has reached you. Enjoy!</p>
            </div>
        );
        break;

        case "cancelled": 
        content = (
            <div>
                <h3>Order Cancelled</h3>
                <p>This order was cancelled.</p>
            </div>
        );
        break;

        default: 
        content = (
            <div>
                <h3>Unknown Status</h3>
                <p>We couldn't find this order status.</p>
            </div>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}
export default OrderStatus;
