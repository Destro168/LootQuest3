# LootQuest3 Release Goals for 1.0:

## TODO - Short Term:

0. Start using comments and 'let' and 'const' as appropriate.

1. Implement inventory and equipment floating windows and systems.
    a. Create inventory data structure and floating window to display.
    b. Create equipment data structure and floating window to display.
    c. Implement ability to click items between the two data structures to move items between the two freely.
        i. Needs to be able to handle inventory being full and swapping items between the two systems when needed.
    d. Add ability to right-click inventory items to show popover and select 'equip' to manually equip.
    e. Add ability to right-click inventory items to show popover and select 'destroy' to destroy.
    
2. Implement cheat window to manipulate player and enemy data freely.
    a. Should be able to modify health, damage and names of combatants with data-bound logic.

3. Implement looting from combat.
    a. Create 'not in combat' state for combat window.
    b. Add ability to start combat while in not in combat state.
    c. Implement transition from non-combat to combat.
    d. Implement transition for combat window to a loot window on combat end (i.) or death screen (ii.).
        i. loot screen
            1. Loot screen should contain items.
            2. On click, items transfer to inventory.
            3. Give option to click item to transfer to inventory or right-click menu option to transfer.
            4. Add button to end loot phase, resetting combat window to empty state.
        ii. death screen
            1. display game over and ability to restart (send back to intro screen, reset player data).

## TODO - Medium Term:

4. Actually style the game to look nice.
5. Implement World Map Feature to explore. Random fights start from world map.
6. Add health potion drop from monsters for healing. Add ability to right-click in inventory to use them.

## TODO: Long Term:

7. Flesh out systems to have content for implemented systems up to level 10.

Done:

1. Implement ability to display content dynamically into the Floating Window components. (Pass entire components into them? Sure, why not)
2. Implement 'fighter' data structures.
3. Integrate player data structures into a floating window.
4. Create a combat floating window to find new foes to fight and handle combat transitions.
5. Create a floating window for enemies that display their stats too.
6. Implement actual combat mechanisms. (turn-based hits to the death)