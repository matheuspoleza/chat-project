const playAudio = (audioSource: string) => {
  const sound = new Audio(audioSource);
  const promise = new Promise((resolve) => {
    sound.addEventListener('ended', () => resolve({}));
  });
  sound.play();
  return promise;
};

export default playAudio;
