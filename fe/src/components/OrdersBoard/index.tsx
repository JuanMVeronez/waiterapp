import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[]
}

export function OrdersBoard({ title, icon, orders }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{`(${orders.length})`}</span>
      </header>

      <OrdersContainer>
        {orders.map((order) => (
          <button key={order._id}>
            <strong>{order.table}</strong>
            <span>{`${order.products.length} ${order.products.length === 1 ? 'item' : 'itens'}`}</span>
          </button>

        ))}
      </OrdersContainer>
    </Board>
  );
}
