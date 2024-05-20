
import PocketBase from 'pocketbase';

export default function PocketBaseInstance() {

    const pocketbase = new PocketBase(
        process.env.REACT_APP_POCKETBASE_URL);

    return pocketbase;
}