<script>

	import { enhance } from "$app/forms";

	export let form;

    console.log(form);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
    <form method="POST" 
          action="?/create"
          use:enhance={({ formElement, formData, action }) =>{
            // console.log(formElement)
            // console.log(formData)
            // console.log(action)
            return async ({ result, update }) => {
                // console.log(result)
            }
          }}>
        <label>
            name:
            <input
                name="name"
                type="text"
                value={form?.name ?? ''}
            />
        </label>
        <label>
            total cost:
            <input
                name="total_cost"
                type="number"
                step=".01"
                value={form?.total_cost ?? ''}
            />
        </label>
        <label>
            Income:
            <input
                name="category"
                type="radio"
            />
        </label>
        <label>
            Expense:
            <input
                name="category"
                type="radio"
            />
        </label>
        <label>
            Date:
            <input
                name="date"
                type="date"
            />
        </label>
        <input type="submit" />
    </form>
</div>
