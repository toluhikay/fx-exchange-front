# Operation Borderless Frontend

## Overview

Operation Borderless is a fintech platform for managing digital wallets holding multiple stablecoins. This frontend, built with React and Tailwind CSS, provides an intuitive interface to interact with the backend API (hosted at `github.com/toluhikay/fx-exchange`). Users can create wallets, deposit funds, swap currencies, transfer funds between wallets, view transaction history, and check balances with their total USD equivalent. The frontend is designed for simplicity, security, and responsiveness, delivering a seamless user experience for managing stablecoin wallets.

## Features

- **Wallet Creation**: Create a wallet with a unique email or mobile identifier.
- **Deposit**: Add funds to a wallet in supported stablecoins (e.g., cNGN, USDx).
- **Swap**: Convert funds between stablecoins using real-time exchange rates.
- **Transfer**: Send funds to another wallet, tracking both sender and receiver.
- **Transaction History**: View all wallet operations (deposits, swaps, transfers).
- **Balances**: Display all stablecoin balances and their total USD equivalent.
- **Authentication**: Secure access with JWT-based authentication.
- **Responsive Design**: Mobile-friendly UI styled with Tailwind CSS.

## Tech Stack

- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For making API requests to the backend.
- **React Router**: For client-side routing.
- **Node.js**: For development and build tools.

## Prerequisites

- **Node.js**: Version 16 or higher.
- **npm**: Version 8 or higher.
- **JWT Token**: Required for authenticated API requests (obtain from backend authentication endpoint).

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/tolukay/fx-exchange-front
   ```
