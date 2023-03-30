import {Row, Col} from 'react-bootstrap'
import {subscriptionOption} from '../Subscriptions'
import SubscriptionInfo from '../components/SubscriptionInfo'

function ChatComponent(){
    return(
        <>
            <h1 align="center" className="p-2">Welcome to the chat site!</h1>
            <Row sx={1} md={2} className="g-4">
                {subscriptionOption.map((option, index) => (
                    <Col align="center" key={index}>
                        <SubscriptionInfo option = {option}/>
                    </Col>
                ))}
                

            </Row>
        </>
    )
}
export default ChatComponent;