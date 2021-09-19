import React from "react";
import {Modal, ModalHeader, ModalBody} from 'reactstrap'

interface BuyModalWindowProps {
    showModal : boolean;
    toggle : React.EventHandler<any>;
}

const BuyModalWindow = (props: BuyModalWindowProps) => {
    return (
        <Modal id="buy" tabIndex={-1} role="dialog" isOpen={props.showModal} toggle={props.toggle}>
            <div role="document">
                <ModalHeader toggle={props.toggle} className="bg-success text-white">
                    BuyItem
                </ModalHeader>
                <ModalBody>
                    { 
                        //앞으로할 부분
                    }
                </ModalBody>
            </div>
        </Modal>
    )
}

export default BuyModalWindow;