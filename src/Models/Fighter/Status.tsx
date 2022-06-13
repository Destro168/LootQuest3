// Special 'skip turn' status for when player/monster uses ability.
export const G_HIDDEN_SKIP_TURN_STATUS = 'HIDDEN_SKIP_TURN_STATUS';

export class Status {
    name: string;
    remainingTurns: number;
    doFunc: Function | null;
    endFunc: Function | null;
    isBeneficial: boolean;

    constructor(
        name: string,
        remainingTurns: number,
        applyEffect: Function | null,
        endEffect: Function | null,
        isBeneficial: boolean,
    ) {
        this.name = name;
        this.remainingTurns = remainingTurns;
        this.doFunc = applyEffect;
        this.endFunc = endEffect;
        this.isBeneficial = isBeneficial;
    }
}

export class StatusContainer {
    statusArr: Array<Status>;

    constructor() {
        this.statusArr = [];
    }

    hasSkipTurnStatus() {
        for (var status of this.statusArr) {
            if (status.name === G_HIDDEN_SKIP_TURN_STATUS) {
                return true;
            }
        }

        return false;
    }

    clear() {
        this.statusArr = [];
    }

    /**
     * Adds a new status effect to status array.
     * Makes sure to overwrite existing status by ending them and then activating the new stauts.
     */
    addStatus(newStatus: Status) {
        for (let status of this.statusArr) {
            if (status.name === newStatus.name) {
                // End old status effect.
                if (status.endFunc !== null) {
                    status.endFunc();
                }

                // Replace status with new status.
                status = newStatus;

                // Run new statuses func.
                if (status.doFunc !== null) {
                    status.doFunc();
                }
                return;
            }
        }

        // Run new statuses func.
        if (newStatus.endFunc !== null) {
            newStatus.endFunc();
        }

        this.statusArr.push(newStatus);
    }

    /**
     * Main method for processing status expiration.
     * Reduces all status effect durations by 1 turn.
     * Then, if the status effect has 0 duration left, call endEffect and remove from our status array.
     */
    reduceStatusTurns() {
        let expiredStatusEffects = [];
        let ele: Status;
        let numEle: number;

        for (let i = 0; i < this.statusArr.length; i++) {
            ele = this.statusArr[i];
            ele.remainingTurns -= 1;

            if (ele.remainingTurns === 0) {
                expiredStatusEffects.push(i);
            }
        }

        // Call end effects and remove from status array all expirated status.
        for (let i = expiredStatusEffects.length - 1; i > -1; i--) {
            numEle = expiredStatusEffects[i];
            let endFunc = this.statusArr[numEle].endFunc;

            if (endFunc !== null) {
                endFunc();
            }

            this.statusArr.splice(numEle, 1);
        }
    }
}
