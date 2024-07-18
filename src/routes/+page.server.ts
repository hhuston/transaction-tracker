import * as db from '$lib/server/database';

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        let name = data.get('name');
        let cost = data.get('total_cost');
        let category = data.get('category');
        let date = data.get('date');

        if (!name || !cost || !category || !date) {
            return {
                error: true,
                message: 'All inputs are required',
                name,
                cost,
                category,
                date
            }
        }

        // db.createTransaction(String(data.get('name')), Number(data.get('total_cost')), Boolean(data.get('category')), String(data.get('date')));

        return {
            success: true
        }
    }
}