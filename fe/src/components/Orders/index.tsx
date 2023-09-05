import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { api } from '../../utils/api';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get<Order[]>('orders').then(({ data }) => setOrders(data));
  }, []);

  function handleCancelOrder(orderId: Order['_id']) {
    setOrders((prevState) => prevState.filter(({ _id }) => _id !== orderId));
  }

  function handleOrderStatusChange(orderId: Order['_id'], status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id !== orderId ? order : ({ ...order, status }))
    ));
  }

  const waiting = orders.filter(({ status }) => status === 'WAITING');
  const inProduction = orders.filter(({ status }) => status === 'IN_PRODUCTION');
  const done = orders.filter(({ status }) => status === 'DONE');

  return (
    <Container>
      <OrdersBoard
        title="Fila de espera"
        icon="🕑"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        title="Em produção"
        icon="👩‍🍳"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        title="Pronto!"
        icon="✅"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
