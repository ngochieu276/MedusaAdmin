import { Component } from 'react';
import { APP_EVENTS } from '../../dto';
import { appEventEmitter } from '../../initilization';
import SquareClose from '../../style/svg/common/squareClose';

export enum ModalType {
  side = 'side',
  center = 'center',
}

export interface ModalNodeProps<T = any, R = any> {
  input?: T;
  onClose?: () => void;
  onDone?: (result?: R) => void;
}

export interface ModalNode<T = any, R = any> {
  node: React.ComponentType<ModalNodeProps<T, R>>;
  type: ModalType;
  status: boolean;
  title?: React.ReactNode;
  input?: T;
  onClose?: () => void;
  onDone?: (result?: R) => void;
}

interface ModalComponentState<T = any, R = any> {
  modalNodes: ModalNode<T, R>[];
}

export default class ModalComponent<T = any, R = any> extends Component<any, ModalComponentState<T, R>> {
  offListener: (() => void) | undefined;

  componentDidMount() {
    this.offListener = appEventEmitter.on(APP_EVENTS.app_modal, (data: ModalNode<T, R>) => {
      const modalNodes = this.state?.modalNodes || [];
      modalNodes.push(data);
      this.setState({ modalNodes });
    });
  }

  componentWillUnmount() {
    this.offListener && this.offListener();
  }

  onCloseModal(index: number) {
    const modalNodes = this.state?.modalNodes || [];
    modalNodes.splice(index, 1);
    this.setState({ modalNodes });
  }

  onDone(index: number, data?: R) {
    const modalNodes = this.state?.modalNodes || [];
    const onDone = modalNodes[index].onDone;
    onDone && onDone(data);
    modalNodes.splice(index, 1);
    this.setState({ modalNodes });
  }

  render() {
    const list = this.state?.modalNodes || [];
    return (
      <>
        {list.map((data: ModalNode, index: number) =>
          renderModal(data, index, this.onCloseModal.bind(this), this.onDone.bind(this))
        )}
      </>
    );
  }
}

const renderModal = <R = any,>(
  data: ModalNode,
  index: number,
  onClose: (index: number) => void,
  onDone?: (index: number, data?: R) => void
) => {
  const doClose = () => {
    const processClose = () => {
      data.onClose && data.onClose();
      onClose(index);
    };
    processClose();
  };

  const doComplete = (data: R) => {
    onDone && onDone(index, data);
  };
  const Node = data.node;
  return (
    <div key={index}>
      <div className="app-modal">
        {data.type === ModalType.center && (
          <div className="app-modal-center">
            <div className="app-modal-header">
              <span className="app-modal-header-title">
                {data.title}
                {data.type}
              </span>
              <i className="app-modal-header-close" onClick={doClose}>
                <SquareClose />
              </i>
            </div>
            <div className="app-modal-content">
              <Node onClose={doClose} onDone={doComplete} input={data.input} />
            </div>
          </div>
        )}
        {data.type === ModalType.side && (
          <div className="app-modal-side">
            <div className="app-modal-header">
              <span className="app-modal-header-title">
                {data.title}
                {data.type}
              </span>
              <i className="app-modal-header-close" onClick={doClose}>
                <SquareClose />
              </i>
            </div>
            <div className="app-modal-content">
              <Node onClose={doClose} onDone={doComplete} input={data.input} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
