//1.
function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  return price * quantity * (1 - discount / 100);
}

console.log(calculateTotal(4, 7, 100));

//2.

let id: number | string;
function displayId(id: number | string): void {
  console.log(typeof id === "string" ? id.toUpperCase() : id * 10);
}
id = 10;
displayId(id);
id = "alex";
displayId(id);

// 3.

interface IOrder {
  orderId: string;
  amount: number;
  status: "pending" | "shipped" | "delivered";
}

const orders: IOrder[] = [
  { orderId: "2", amount: 12, status: "shipped" },
  { orderId: "24", amount: 5, status: "pending" },
  { orderId: "5", amount: 66, status: "pending" },
  { orderId: "1", amount: 182, status: "pending" },
  { orderId: "33", amount: 8, status: "pending" },
];

function filterOrdersByStatus(orders: IOrder[], string: string): IOrder[] {
  return orders.filter((order) => order.status === string);
}

console.log(filterOrdersByStatus(orders, "pending"));

//4.

let inventory: { [key: string]: number } = {
  apple: 10,
  banana: 5,
  orange: 8,
};

let productInfo: [string, number, number] = ["banana", 1.5, 3];

function updateStock(
  inventory: { [key: string]: number },
  productInfo: [string, number, number]
) {
  let productName = productInfo[0];
  let quantity = productInfo[2];

  if (inventory[productName] !== undefined) {
    inventory[productName] += quantity;
  } else {
    inventory[productName] = quantity;
  }

  return inventory;
}

console.log(updateStock(inventory, productInfo));
