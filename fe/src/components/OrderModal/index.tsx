import { useEffect } from 'react';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import { Actions, Modal, OrderDetails, Overlay } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  isLoading: boolean;
  onClose: () => unknown;
  onCancelOrder: () => Promise<void>;
  onChangeOrderStatus: () => Promise<void>;
}

export function OrderModal({ visible, order, isLoading, onClose, onChangeOrderStatus, onCancelOrder }: OrderModalProps) {
  useEffect(() => {
    function handleCloseOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleCloseOnEscape);

    return () => {
      document.removeEventListener('keydown', handleCloseOnEscape);

    };
  }, [onClose]);

  if (!visible || order === null) return null;

  const total = order.products.reduce(
    (acc, { quantity, product }) => (acc + (quantity * product.price)),
    0,
  );

  return (
    <Overlay>
      <Modal>
        <header>
          <strong>{`Mese ${order.table}`}</strong>
          <button onClick={() => onClose()}>
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
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button
              className="primary"
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              {order.status === 'WAITING' ? (
                <>
                  <span>👩‍🍳</span>
                  <strong>Iniciar Produção</strong>
                </>
              ) : (
                <>
                  <span>✅</span>
                  <strong>Concluir Pedido</strong>
                </>
              )}
            </button>
          )}
          <button
            className="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            Cancelar Pedido
          </button>
        </Actions>
      </Modal>
    </Overlay>
  );
}
