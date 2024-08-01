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
<button on:click={ () => splits = [...splits, {name: "", items: []}] }>Add split</button>
<button on:click={ () => { splits.pop(); splits=splits; } }>Remove split</button>
{#each splits as split}
    <input type="text" placeholder="Name" bind:value={split.name}>
    <button on:click={ () => split.items = [...split.items, {itemName: "", itemCost: 0}] }>Add item</button>
    <button on:click={ () => { split.items.pop(); split.items=split.items; } }>Remove item</button>
    {#each split.items as item}
        <label for="itemName">Item Name:</label>
        <input 
            name="itemName"
            type="text"
            bind:value={item.itemName}
        />
        <label for="itemCost">Item Cost:</label>
        <input 
            name="itemCost"
            type="number"
            step=".01"
            bind:value={item.itemCost}
        />
        <input type="submit" />
        <p>Name: {item.itemName}</p>
        <p>Cost: {item.itemCost}</p>
    {/each}
{/each}