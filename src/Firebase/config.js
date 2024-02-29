import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyB_LUf5Cbq1S_QENHNERF-y61mbvhwo8mE",
  authDomain: "mercado-campesino-a0d58.firebaseapp.com",
  projectId: "mercado-campesino-a0d58",
  storageBucket: "mercado-campesino-a0d58.appspot.com",
  messagingSenderId: "305108183583",
  appId: "1:305108183583:web:a8eda4814db633e7dbc32a",
  measurementId: "G-7XCX46DF6R"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file){
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}