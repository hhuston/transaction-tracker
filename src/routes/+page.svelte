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
        <input
            name="splits"
            type="hidden"
            value={splits}
        />
        <input type="submit" />
    </form>
</div>
<button on:click={ () => splits = [...splits, {name: "", items: []}] }>Add person</button>
{#each splits as split, i}
    <input type="text" placeholder="Name" bind:value={split.name}>
    <button on:click={ () => split.items = [...split.items, {itemName: "", itemCost: 0}] }>Add item</button>
    {#each split.items as item, n}
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
        <p>Name: {item.itemName}</p>
        <p>Cost: {item.itemCost}</p>
        <button on:click={ () => { split.items.splice(n, 1); split.items=split.items; } }>Remove item</button>
    {/each}
    <button on:click={ () => { splits.splice(i, 1); splits=splits; } }>Remove person</button>
{/each}