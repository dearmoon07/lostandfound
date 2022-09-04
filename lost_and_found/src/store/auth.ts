import {writable} from 'svelte/store'

const userDetail = {
    id: '',
    name: '',
    email: '',
    picture: '',
    registered_at: '',
    status: ''
}

export const useAuthStore = writable(userDetail)