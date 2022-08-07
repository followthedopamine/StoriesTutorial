import {createRouter, createWebHistory} from 'vue-router'
import LoginComponent from '../views/LoginComponent'
import DashboardComponent from '../views/DashboardComponent'
import AddStoryComponent from '../views/stories/AddStoryComponent'
import PublicStoriesComponent from '../views/stories/PublicStoriesComponent'
import EditStoryComponent from '../views/stories/EditStoryComponent'
import ShowSingleStoryComponent from '../views/stories/ShowSingleStoryComponent'
import ShowUserStoriesComponent from '../views/stories/ShowUserStoriesComponent'

const routes = [
    {
        path: '/',
        name: 'LoginComponent',
        component: LoginComponent
    },
    {
        path: '/dashboard',
        name: 'DashboardComponent',
        component: DashboardComponent
    },
    {
        path: '/stories/add',
        name: 'AddStoryComponent',
        component: AddStoryComponent
    },
    {
        path: '/stories',
        name: 'PublicStoriesComponent',
        component: PublicStoriesComponent
    },
    {
        path: '/stories/edit/:id',
        name: 'EditStoryComponent',
        component: EditStoryComponent,
        props: true
    },
    {
        path: '/stories/:id',
        name: 'ShowSingleStoryComponent',
        component: ShowSingleStoryComponent,
        props: true
    },
    {
        path: '/stories/user/:id',
        name: 'ShowUserStoriesComponent',
        component: ShowUserStoriesComponent,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), 
    routes,
})

export default router