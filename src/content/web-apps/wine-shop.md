---
title: 'Wine Shop'
date: '2025-10-20'
description: 'Co-Project'
img: '/wine-shop-portada.png'
images: []
url: 'https://proyecto-2-gerardi-humphreys.vercel.app'
---
## Technologies

NextJs, Tailwind, PostgreSQL, Prisma, MercadoPago SDK, Cloudinary, Gemini AI chat, Next-PWA

# Project Overview

**Originally conceived as a collaborative project during a web development course, this platform was subsequently refined and expanded.** It is a comprehensive wine e-commerce solution built with **Next.js (App Router), PostgreSQL + Prisma**, and **NextAuth** for secure authentication. The application features a robust shopping cart, a seamless checkout flow, and a dedicated administrative panel.

The database models users, addresses, categories, producers, wines, carts, orders, sales, OCA shipping, tracking, and push subscriptions.

**Bonus Features:** This implementation includes additional functionalities beyond the original requirements: **AI Chat (Gemini)**, **PWA (Progressive Web App)**, and **Web Push Notifications**.

---

## Implemented Features

### Client-Side
* **Catalog:** Search, filters, sorting, and pagination.
* **Product Details:** In-depth information for each item.
* **Shopping Cart:** Persistent cart management.
* **Checkout:** Step-by-step flow with validation.
* **Payment Integration:** Complete Mercado Pago flow (preferences + success/pending/failure pages).
* **User Profile:** Order history and detailed tracking information.

### Admin Panel
* **Dashboard:** Real-time metrics and analytics.
* **Product Management:** Full CRUD (Create, Read, Update, Soft Delete) and stock management.
* **Order Management:** Order confirmation and status updates.
* **Logistics:** OCA integration (shipment creation, tracking updates, and state simulation).

### External Integrations
* **Mercado Pago:** Sandbox environment + Webhooks.
* **OCA:** Quote generation, tracking, and shipment creation.
* **Cloudinary:** Image hosting and management.
* **Gemini (Google AI):** Virtual Sommelier assistant.
* **Web Push:** Subscription management and notification broadcasting from the admin panel.

---