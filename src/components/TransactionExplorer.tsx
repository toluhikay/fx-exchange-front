/* eslint-disable @typescript-eslint/no-explicit-any */
import { format } from "date-fns";

const TransactionExplorer = ({ transactions, isLoading, error }: { transactions: any; isLoading: boolean; error: any }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 p-4">Error loading transactions: {error?.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-cyan-300 mb-6">Recent Transactions</h2>
      {transactions?.length === 0 ? (
        <p className="text-gray-600 text-center">No transactions found.</p>
      ) : (
        <div className="space-y-4">
          {transactions?.slice(0, 15)?.map((tx: any) => (
            <div key={tx.id} className="bg-white border border-gray-200 text-yellow-600 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Transaction ID</p>
                  <p className="font-mono text-sm text-blue-600 truncate">{tx?.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-semibold capitalize">{tx?.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Details</p>
                  {tx?.type === "transfer" ? (
                    <p className="text-sm">
                      From: <span className="font-mono truncate">{tx?.wallet_id}</span>
                      <br />
                      To: <span className="font-mono truncate">{tx?.receiver_wallet_id || "N/A"}</span>
                      <br />
                      Amount: {tx?.amount.toFixed(4)} {tx?.from_currency}
                    </p>
                  ) : (
                    <p className="text-sm">
                      From: {tx?.from_currency} {tx?.amount?.toFixed(4)}
                      <br />
                      To: {tx?.to_currency} {tx?.converted_amount?.toFixed(4)}
                      <br />
                      Rate: {tx?.rate?.toFixed(4)}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-500">Timestamp</p>
                  <p className="text-sm">{format(new Date(tx?.timestamp), "MMM dd, yyyy HH:mm:ss")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionExplorer;
