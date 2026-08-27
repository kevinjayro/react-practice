import { useState } from 'react';
import { initialInvoices } from './InvoicePaymentDashboard.data';
import type { Invoice } from './InvoicePaymentDashboard.types';

export default function InvoicePaymentDashboard() {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);

  const handleMarkAsPaid = (id: number) => {
    setInvoices((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, paidAmount: item.amount } : item,
      ),
    );
  };

  const totalOutstanding = invoices
    .reduce((acc, item) => acc + (item.amount - item.paidAmount), 0)
    .toFixed(2);

  return (
    <section>
      <h2>Invoice Dashboard</h2>

      <p>Total Outstanding: ${totalOutstanding}</p>

      {invoices.map(({ id, client, amount, paidAmount }) => {
        const remaining = amount - paidAmount;

        const paymentPercentage =
          amount === 0 ? 0 : (paidAmount / amount) * 100;

        const status = paidAmount >= amount ? 'Paid' : 'Pending';

        return (
          <article key={id}>
            <h3>{client}</h3>

            <p>Amount: ${amount.toFixed(2)}</p>

            <p>Paid: ${paidAmount.toFixed(2)}</p>

            <p>Remaining: ${remaining.toFixed(2)}</p>

            <p>Payment: {paymentPercentage}%</p>

            <strong>Status: {status}</strong>

            {status === 'Pending' && (
              <button onClick={() => handleMarkAsPaid(id)}>Mark as Paid</button>
            )}
          </article>
        );
      })}
    </section>
  );
}
