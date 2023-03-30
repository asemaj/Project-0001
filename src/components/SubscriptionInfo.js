import { Card, Button } from 'react-bootstrap'
import "./SubscriptionInfo.css"
import "./Payment.css"


function SubscriptionInfo(props){
    const subscription = props.option;
    
    const handleSelect = (link) => {
        window.open(link, '_blank');
    }

    return(
        
        <Card>
            <Card.Body>
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div> 
                <div className='Subscription_options'>
                    <Card.Title>{subscription.name}</Card.Title>
                    <Card.Text>{subscription.content}</Card.Text>
                    <Card.Text>${subscription.price}</Card.Text>
                    <Button variant='primary' onClick={() => handleSelect(subscription.link)}>Buy</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default SubscriptionInfo;
