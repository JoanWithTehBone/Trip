import GameItem from './GameItem.js';
export default class NPC extends GameItem {
    name;
    completed;
    rewardGiven;
    progression;
    dialogue;
    quest;
    questResponse;
    rightAnswer;
    user;
    constructor(imageSrc, maxX, maxY) {
        super(null, null, imageSrc, maxX, maxY, null, null);
    }
    talkToPlayer(dialogueIndex, dialogueBox) {
        dialogueBox.setDialogueList(this.dialogue);
        for (let i = 0; i < this.dialogue.length; i += 1) {
            if (dialogueIndex === i) {
                if (dialogueBox.getDisplay()) {
                    dialogueBox.setCurrentDialogue(i);
                }
            }
        }
    }
    questingToPlayer(questBox) {
        questBox.setQuestList(this.questDialogue);
    }
    questCompleted() {
        return this.completed;
    }
    getProgression() {
        return this.progression;
    }
    setProgression(input) {
        this.progression = input;
    }
    progressFurther() {
        this.progression += 1;
    }
    getQuestResponseImage() {
        return this.questResponse;
    }
    getDialogue() {
        return this.dialogue;
    }
    getRightAnswer() {
        return this.rightAnswer;
    }
    setCompletion(value) {
        this.completed = value;
    }
}
//# sourceMappingURL=NPC.js.map