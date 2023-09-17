import { Component } from 'react';
import { ModalNodeProps } from '../../../components/modal/ModalComponent';
import ModalComponent from '../../../components/modal/ModalComponent';

export class InventoryModal extends Component<ModalNodeProps, any> {
  constructor(props: any) {
    super(props);
    const data = this.props.input;
    this.state = {};
  }

  render() {
    return <div>Modal</div>;
  }
}
