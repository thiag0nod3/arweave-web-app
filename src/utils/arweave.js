const Arweave = require('arweave');

const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
});

export const getTransaction = async (txId) => {
    try {
        const transaction = await arweave.transactions.get(txId);
        return transaction;
    } catch (error) {
        console.error('Error fetching transaction:', error);
        throw error;
    }
};

export const getData = async (txId) => {
    try {
        const transaction = await getTransaction(txId);
        const data = arweave.transactions.getData(transaction.id, { decode: true, string: true });
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const createTransaction = async (data, wallet) => {
    try {
        const transaction = await arweave.createTransaction({ data }, wallet);
        await arweave.transactions.sign(transaction, wallet);
        const response = await arweave.transactions.post(transaction);
        return response;
    } catch (error) {
        console.error('Error creating transaction:', error);
        throw error;
    }
};