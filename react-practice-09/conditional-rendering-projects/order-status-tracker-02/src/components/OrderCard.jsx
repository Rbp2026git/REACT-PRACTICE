import PendingStatus from "./PendingStatus";
import ShippedStatus from "./ShippedStatus";
import DeliveredStatus from "./DeliveredStatus";
import CancelledStatus from "./CancelledStatus";
import UnknownStatus from "./UnknownStatus";

function OrderCard({ status }) {

    let statusComponent;

    switch (status) {
        case "pending":
            statusComponent = <PendingStatus />;
            break;
        case "shipped":
            statusComponent = <ShippedStatus />;
            break;
        case "delivered":
            statusComponent = <DeliveredStatus />;
            break;
        case "cancelled":
            statusComponent = <CancelledStatus />;
            break;
        default:
            statusComponent = <UnknownStatus />;
    }

    return (
        <div className="order-card">
            {statusComponent}
        </div>
    );
}
export default OrderCard;