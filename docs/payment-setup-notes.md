# Payment Processor Setup Notes

## Status

Payment processing is **not yet connected**. The checkout page collects customer
and shipping information only. No card data is collected or transmitted.

## Important: Processor Approval Required

This product category (research peptides and compounds) is often **restricted** by
mainstream payment processors. Do not integrate any of the following without prior
merchant approval:

- Stripe
- PayPal
- Square
- Shopify Payments
- Braintree

These providers may terminate accounts selling research compounds without notice.

---

## Approved Integration Path

Only connect a payment processor **after** completing the following:

1. Legal review of product category and positioning
2. Merchant account application with a **high-risk or specialty processor**
3. Processor approval and gateway credentials issued
4. Compliance review of checkout flow

### Suitable Processor Options (subject to approval)

- **Authorize.net** — mature gateway, works with high-risk merchant accounts
- **NMI (Network Merchants)** — high-risk friendly gateway
- **Durango Merchant Services** — specialty high-risk merchant accounts
- **EasyPayDirect** — high-risk ecommerce
- **Manual Invoice / Bank Transfer** — safest short-term option (manual order fulfilment)

---

## Future Checkout Architecture

When a processor is approved, connect via the following endpoint:

```
POST /api/checkout
```

This route should:
1. Validate cart items server-side
2. Verify compliance checkbox confirmation
3. Create a pending order record in the database
4. Initiate payment via approved gateway API
5. Return order confirmation or redirect to payment page

### Pending Order Table (future schema)

```sql
orders (
  id           UUID PRIMARY KEY,
  customer_email TEXT,
  customer_name  TEXT,
  organization   TEXT,
  shipping_addr  JSONB,
  items          JSONB,
  subtotal       NUMERIC(10,2),
  compliance_confirmed BOOLEAN,
  status         TEXT DEFAULT 'pending',
  created_at     TIMESTAMPTZ DEFAULT now()
)
```

---

## Current Checkout Behavior

- Collects customer info and shipping address
- Requires compliance checkbox confirmation
- Displays a notice that payment is pending processor setup
- Submits an order request (no payment collected)
- Shows confirmation with a follow-up note

**Do not enable real card collection until processor credentials are active.**
