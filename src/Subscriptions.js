import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const subscriptionOption = [
    {
        id: "price_1MmaZiC1XZ1d3fP6WHi8QBLO",
        name: "Basic",
        content: (
            <ul style={{ listStyleType: 'none' }}>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 1</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 2</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 3</li>
                <li><FontAwesomeIcon icon={faXmark} /> Feature 4</li>
                <li><FontAwesomeIcon icon={faXmark} /> Feature 5</li>
                <li><FontAwesomeIcon icon={faXmark} /> Feature 6</li>
                <li><FontAwesomeIcon icon={faXmark} /> Feature 7</li>
                <li><FontAwesomeIcon icon={faXmark} /> Feature 8</li>
            </ul>
        ),
        price: 0.00,
        quantity: 1
    },
    {
        id: "price_1MmabZC1XZ1d3fP68vYmINZZ",
        name: "Pro",
        content: (
            <ul style={{ listStyleType: 'none' }}>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 1</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 2</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 3</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 4</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 5</li>
                <li><FontAwesomeIcon icon={faXmark} /> Feature 6</li>
                <li><FontAwesomeIcon icon={faXmark} /> Feature 7</li>
                <li><FontAwesomeIcon icon={faXmark} /> Feature 8</li>
            </ul>
        ),
        price: 4.99,
        quantity: 1,
        link: "https://buy.stripe.com/test_cN24ghcHP6onabe9AB"
    }
    /*
{
        id: "price_1Mmac0C1XZ1d3fP6IcB05jud",
        name: "Expert",
        content: (
            <ul style={{ listStyleType: 'none' }}>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 1</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 2</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 3</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 4</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 5</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 6</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 7</li>
                <li><FontAwesomeIcon icon={faCheck} /> Feature 8</li>

            </ul>
        ),
        price: 7.99,
        quantity: 1,
        link: "https://buy.stripe.com/test_7sI3cdePXcML3MQ000"
    }
    */ 
    
]


function getSubscriptionData(id){
    let subscriptionData = subscriptionOption.find(product => product.id === id);
    
    if (subscriptionData === undefined){
        console.log("No subscription exists for product: " + id);
        return undefined;
    }
    return subscriptionData;
}

export {subscriptionOption, getSubscriptionData};