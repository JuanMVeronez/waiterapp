import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

import { Modal, OrderDetails, Overlay } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
  if (!visible || order === null) return null;

  return (
    <Overlay>
      <Modal>
        <header>
          <strong>{`Mese ${order.table}`}</strong>
          <button>
            <img src={closeIcon} alt="Fechar modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, quantity, product}) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width={48}
                  height={40}
                />

                <span className="quantity">{`${quantity}x`}</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </OrderDetails>
      </Modal>
    </Overlay>
  );
}
