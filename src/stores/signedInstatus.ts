import { defineStore } from "pinia"



export const useSignedInStatus = defineStore('signedInStatus',{
    state: () => {
        return {
            status: false
        }
    },
    actions: {
        setStatus(arg:boolean) {
            this.status = arg
        }
    }
})


