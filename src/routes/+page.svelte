<script lang="ts">
	import type { Split } from "../ambient";

    let total_cost : number;
    let splits : Split[] = [];
</script>

<div>
    <form method="POST" 
          action="?/create">
        <label for="name">Name:</label>
            <input
                name="name"
                type="text"
            />
        <label for="totalcost">Total Cost:</label>
            <input
                name="totalcost"
                type="number"
                step=".01"
                bind:value={total_cost}
            />
        <label for="category">Category:</label>
            <select name="category" value="">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        <label for="date">Date:</label>
            <input
                name="date"
                type="date"
            />
        <input type="submit" />
    </form>
</div>
<button on:click={() => splits = [...splits, {name: "Matt", items: [{itemName: "Meal", itemCost: 50}]}]}>Add split</button>
<button on:click={() => {splits.pop(); splits=splits}}>Remove split</button>
{#each splits as split, i}
    <p>{i}</p>
    <p>{split.name}</p>
{/each}
{#if total_cost}
    <p>{total_cost}</p>
{/if}
