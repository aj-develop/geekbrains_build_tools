import "./howler.js";

export function getSound() {
    let sound = new Howl({
            src: ["./media/death.mp3"]
        }
    );
    sound.play();
}