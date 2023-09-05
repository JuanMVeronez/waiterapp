import { useState } from 'react';
import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './styles';
import { OrderModal } from '../OrderModal';
import { api } from '../../utils/api';
import { toast } from 'react-toastify';

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[]
  onCancelOrder: (orderId: Order['_id']) => void;
  onChangeOrderStatus: (orderId: Order['_id'], status: Order['status']) => void;
}

export function OrdersBoard({ title, icon, orders, onChangeOrderStatus, onCancelOrder }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenOrderModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseOrderModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    if (!selectedOrder) return;

    const status = selectedOrder.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    setIsLoading(true);
    await api.patch(`orders/${selectedOrder._id}`, { status });

    setIsLoading(false);

    toast.success(`O pedido da mesa ${selectedOrder.table} teve o status alterado!`);

    onChangeOrderStatus(selectedOrder._id, status );
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    if (!selectedOrder) return;

    setIsLoading(true);
    await api.delete(`orders/${selectedOrder._id}`);

    setIsLoading(false);

    toast.success(`O pedido da mesa ${selectedOrder.table} foi cancelado!`);

    onCancelOrder(selectedOrder._id);
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        order={selectedOrder}
        visible={isModalVisible}
        isLoading={isLoading}
        onClose={handleCloseOrderModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
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
