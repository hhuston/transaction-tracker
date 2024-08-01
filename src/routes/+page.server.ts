import * as db from '$lib/server/database';
import type { Split } from '../ambient';

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        let name : string = String(data.get('name'));
        let total_cost : number = Number(data.get('totalcost'));
        let category : string = String(data.get('category'));
        let date : string = String(data.get('date'));
        let splits = data.get('splits');

        console.log('name:', name);
        console.log('cost:', total_cost);
        console.log('category:', category);
        console.log('date:', date);
        console.log('splits:', splits);

        
        if (!name || !total_cost || !category || !date) {
            return {
                error: true,
                message: 'All inputs are required',
                name,
                total_cost,
                category,
                date
            };
        }
        
        let is_income = category === "income";
        console.log("Is Income?:", is_income)

        // db.createTransaction(name, total_cost, is_income, date);

        return {
            success: true
        };
    }
}