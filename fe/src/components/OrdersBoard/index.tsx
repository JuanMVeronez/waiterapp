import { useState } from 'react';
import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './styles';
import { OrderModal } from '../OrderModal';

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[]
}

export function OrdersBoard({ title, icon, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenOrderModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseOrderModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        order={selectedOrder}
        visible={isModalVisible}
        onClose={handleCloseOrderModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{`(${orders.length})`}</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button key={order._id} onClick={() => handleOpenOrderModal(order)}>
              <strong>{`Mese ${order.table}`}</strong>
              <span>{`${order.products.length} ${order.products.length === 1 ? 'item' : 'itens'}`}</span>
            </button>

          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
