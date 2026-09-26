// Solution no. - 01
import { useState } from "react";

// function PaymentMethod() {
//     const payments = [
//         { id: "UPI", info: "Instant transfer via upi apps" },
//         { id: "Card", info: "pay using credit or debit card" },
//         { id: "COD", info: "Pay when the order arrives" },
//     ];
//     const [method, setMethod] = useState({
//         id: "",
//         info: ""
//     });
//     const handleChange = (e) => {
//         const selected = payments.find((payment) => payment.id === e.target.value);
//         setMethod({
//                 id: selected.id,
//                 info: selected.info,
//             });
//     };
//     return (
//         <div>
//             {payments.map((payment) => (
//                 <label key={payment.id}>
//                     <input
//                         type="radio"
//                         name="pay"
//                         value={payment.id}
//                         checked={method.id === payment.id}
//                         onChange={handleChange}
//                     />
//                     {payment.id}
//                 </label>
//             ))}
//             <p>Information : {method.info}</p>
//         </div>
//     );
// }
// export default PaymentMethod;

// Solution no. - 02

function PaymentMethod() {
    const payments = [
        { id: "UPI", info: "Instant transfer via upi apps" },
        { id: "Card", info: "pay using credit or debit card" },
        { id: "COD", info: "Pay when the order arrives" },
    ];
    const [method, setMethod] = useState("");

    const handleChange = (e) => {
        setMethod(e.target.value);
    };
    const selected = payments.find((payment) => payment.id === method);

    return (
        <div>
            {payments.map((item) => (
                <label key={item.id}>
                    <input
                        type="radio"
                        name="pay"
                        value={item.id}
                        checked={method === item.id}
                        onChange={handleChange}
                    />
                    {item.id}
                </label>
            ))}
            <p>Payment method : {method || "Not Selected"}</p>
            <p>Information : {selected && selected.info}</p>
        </div>
    );
}
export default PaymentMethod;