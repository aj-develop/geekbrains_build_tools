import "./howler.js";

export function getSound() {
    let sound = new Howl({
            src: ["./public/media/death.mp3"]
        }
    );
    sound.play();
}